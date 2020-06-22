export default class ErrorMessageFactory {

    public static get(errorCode: string): string {
        return this.messages[errorCode] || "Unexpected error occurred"
    }

    private static messages: { [errorCode: string]: string } = {
        "DB_CONNECT_001": "database initialize error",
        "SIGNIN_001": "Please click the URL to verify your email address",
        "EDIT_USER_001": "Please sign in"

        // todo エラーメッセージ追加
    };

}
