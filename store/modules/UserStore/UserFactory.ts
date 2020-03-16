import firebase from "firebase";
import {User} from "./UserEntity";
import {FirestoreUserDoc} from "./repository/FirestoreUserEntitiy";

export default class UserFactory {

    public static makeEmpty(): User {
        return {
            id: "",
            email: "",
            providers: [],
            emailVerified: false,
            name: "",
            photoUrl: "",
            biography: ""
        }
    }

    public static makeByFirebaseUser(firebaseAuthUser: firebase.User, firestoreUserDoc: FirestoreUserDoc): User {
        if (firebaseAuthUser) {
            return {
                id: firebaseAuthUser.uid,
                email: firebaseAuthUser.email || "",
                providers: firebaseAuthUser.providerData.map(v => v ? v.providerId : ""),
                emailVerified: firebaseAuthUser.emailVerified,
                name: firestoreUserDoc.name || "",
                photoUrl: firestoreUserDoc.photoUrl || "",
                biography: firestoreUserDoc.biography || "",
            };
        } else {
            return UserFactory.makeEmpty();
        }
    }

}


