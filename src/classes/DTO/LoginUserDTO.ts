import { User } from "../../types/User";

export class LoginUserDTO implements Pick<User, 'email' | 'password'> {
    public email;
    public password;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}