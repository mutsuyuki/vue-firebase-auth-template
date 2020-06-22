import {FirestoreUserDoc} from "@/store/modules/UserStore/repository/FirestoreUserEntitiy";
import {User} from "@/store/modules/UserStore/UserEntity";

export default class FirestoreUserFactory {

    public static makeEmptyFirestoreUserDoc(): FirestoreUserDoc {
        return {
            name: "",
            photoUrl: "",
            biography: ""
        }
    }

    public static makeFirestoreUserByUser(user: User): FirestoreUserDoc {
        let firestoreUser = FirestoreUserFactory.makeEmptyFirestoreUserDoc();

        for (const key of Object.keys(firestoreUser)) {
            // @ts-ignore
            firestoreUser[key] = user[key];
        }
        console.log("aaa",firestoreUser)
        return firestoreUser;
    }

}


