export interface User {
    id: string;
    email: string;
    providers: string[];
    emailVerified: boolean;

    name: string;
    photoUrl?: string;
    biography?: string;
}
