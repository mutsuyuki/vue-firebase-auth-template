import firebase from "firebase";
import {ResultStatus} from "./ResultStatus";
import {ResultValue} from "./ResultValue";
import ErrorMessageFactory from "./ErrorMessageFactory";
import DeepCloner from "./DeepCloner";

export default class ResultStatusFactory {

    public static makeSuccess(): ResultStatus {
        return {
            isError: false,
            errorCode: "",
            errorMessage: ""
        }
    }

    public static makeFailed(errorCode: string): ResultStatus {
        return {
            isError: true,
            errorCode: errorCode,
            errorMessage: ErrorMessageFactory.get(errorCode)
        }
    }

    public static makeFailedByFirebaseError(firebaseError: firebase.FirebaseError): ResultStatus {
        // todo  firebaseのエラーコードをErrorMessageFactoryで変換するように
        return {
            isError: true,
            errorCode: firebaseError.code,
            errorMessage: firebaseError.message
        }
    }

    public static makeByResultValue<T>(value: ResultValue<T>): ResultStatus {
        const returnStatus = DeepCloner.copyJson(value);
        delete returnStatus.value;
        return returnStatus;
    }

}
