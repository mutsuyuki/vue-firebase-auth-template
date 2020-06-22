import firebase from "firebase";
import {ResultStatus} from "@/store/common/ResultStatus";
import ResultStatusFactory from "@/store/common/ResultStatusFactory";

export default class DatabaseConnector {

    public static async connect() {
        return new Promise<ResultStatus>(async resolve => {
            firebase.initializeApp({
                apiKey: "AIzaSyBqQoA24zxm4puPW8USlOKWRv83-m7MwpU",
                authDomain: "logintutorial-e5644.firebaseapp.com",
                databaseURL: "https://logintutorial-e5644.firebaseio.com",
                projectId: "logintutorial-e5644",
                storageBucket: "logintutorial-e5644.appspot.com",
                messagingSenderId: "487156093161",
                appId: "1:487156093161:web:c013775c008042a5952078"
            });

            // firebaseの初期化が終わらない場合対策（タイムアウト）
            setTimeout(() => {
                resolve(ResultStatusFactory.makeFailed("DB_CONNECT_001"))
            }, 5000);

            // firebaseの初期化を待つ
            await new Promise<void>(resolveAtFirebaseInit => {
                const unsubscribe = firebase.auth().onAuthStateChanged(_ => {
                    unsubscribe();
                    resolveAtFirebaseInit();
                });
            });

            resolve(ResultStatusFactory.makeSuccess());
        });
    }
}
