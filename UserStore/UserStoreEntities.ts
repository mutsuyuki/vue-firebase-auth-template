export interface User {
    id: string;
    email: string;
    name: string;
    photoURL?: string;
    providers:string[];
    emailVerified:boolean;
}

export interface SignUpParam {
    name: string;
    email: string;
    password: string,
}

export interface SignInParam {
    email: string;
    password: string
}

export interface EditUserParam {
    name: string;
    email: string;
    photoURL?: string;
}


export interface SendPasswordResetParam {
    email: string;
}

export interface ActionResult {
    isError: boolean;
    errorCode: string;
    errorMessage: string;
}


