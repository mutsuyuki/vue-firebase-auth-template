import firebase from "firebase";
import {ResultValue} from "@/store/common/ResultValue";
import ResultStatusFactory from "@/store/common/ResultStatusFactory";
import DeepCloner from "@/store/common/DeepCloner";


export default class ResultValueFactory {

    public static makeSuccess<T>(value: T): ResultValue<T> {
        const returnStatus = ResultStatusFactory.makeSuccess();
        return Object.assign(returnStatus, {value: DeepCloner.copyJson(value)});
    }

    public static makeFailed<T>(errorCode: string, value: T): ResultValue<T> {
        const returnStatus = ResultStatusFactory.makeFailed(errorCode);
        return Object.assign(returnStatus, {value: DeepCloner.copyJson(value)});
    }

    public static makeFailedByFirebaseError<T>(firebaseError: firebase.FirebaseError, value: T): ResultValue<T> {
        const returnStatus = ResultStatusFactory.makeFailedByFirebaseError(firebaseError);
        return Object.assign(returnStatus, {value: DeepCloner.copyJson(value)});
    }
}
