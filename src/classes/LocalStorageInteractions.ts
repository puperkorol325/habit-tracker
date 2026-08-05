import { LoginData } from "../types/LocalStorageTypes/LoginData";
import { SignUpData } from "../types/LocalStorageTypes/SignUpData";

export default class LocalStorageInteractions {

    private static EMAIL = "users_email";
    private static PASSWORD = "users_password";
    private static NAME = "users_name"; 

    static getUsersLoginData(): LoginData {
        const email = localStorage.getItem(this.EMAIL);
        const password = localStorage.getItem(this.PASSWORD);

        return { email, password }
    }

    static setUsersData(data: SignUpData) {
        if (data.email && data.password && data.name) {
            localStorage.setItem(this.EMAIL, data.email);
            localStorage.setItem(this.PASSWORD, data.password);
            localStorage.setItem(this.NAME, data.name);
        }
    }

    static getEmail(): string | null {
        return localStorage.getItem(this.EMAIL);
    }

    static getName(): string | null {
        return localStorage.getItem(this.NAME);
    }

    static getPassword(): string | null {
        return localStorage.getItem(this.PASSWORD);
    }
}