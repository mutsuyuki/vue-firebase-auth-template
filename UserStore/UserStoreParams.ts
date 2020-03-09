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
