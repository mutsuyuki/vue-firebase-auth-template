export interface User {
    id: string;
    email: string;
    name: string;
    photoURL?: string;
    providers:string[];
    emailVerified:boolean;
}
