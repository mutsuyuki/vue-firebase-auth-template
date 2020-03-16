export interface SignUpByPasswordParam {
    name: string;
    email: string;
    password: string,
}

export interface SignInByPasswordParam {
    email: string;
    password: string
}

export interface SendPasswordResetParam {
    email: string;
}
