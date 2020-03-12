import firebase from "firebase";
import {ActionResult} from "./ActionResult";

export default class ActionResultFactory {

    public static makeSuccessResult(): ActionResult {
        return {
            isError: false,
            errorCode: "",
            errorMessage: ""
        }
    }

    public static makeFailedResult(error: { code: string, message: string }): ActionResult {
        return {
            isError: true,
            errorCode: error.code,
            errorMessage: error.message
        }
    }

}
