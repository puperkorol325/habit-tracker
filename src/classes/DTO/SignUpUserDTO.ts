import { User } from "../../types/User";

export class SignUpUserDTO implements Pick<User, 'email' | 'password' | 'name'> {
    public email;
    public password;
    public name;

    constructor(email: string, password: string, name: string) {
        this.email = email;
        this.password = password;
        this.name = name;
    }
}