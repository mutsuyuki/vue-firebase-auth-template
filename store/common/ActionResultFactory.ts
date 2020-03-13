import firebase from "firebase";
import {ActionResult} from "./ActionResult";

export default class ActionResultFactory {

    public static makeSuccess(): ActionResult {
        return {
            isError: false,
            errorCode: "",
            errorMessage: ""
        }
    }

    public static makeFailed(error: { code: string, message: string }): ActionResult {
        return {
            isError: true,
            errorCode: error.code,
            errorMessage: error.message
        }
    }

}
