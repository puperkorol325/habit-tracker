import { LoginData } from "../types/LocalStorageTypes/LoginData";
import { SignUpData } from "../types/LocalStorageTypes/SignUpData";

export default class LocalStorageInteractions {

    private static EMAIL = "users_email";
    private static PASSWORD = "users_password";
    private static NAME = "users_name";
    private static PFP = "users_pfp";

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
    static setName(name: string): void {
        localStorage.setItem(this.NAME, name);
    }

    static getPassword(): string | null {
        return localStorage.getItem(this.PASSWORD);
    }

    static getUsersPFP(): string | null {
        return localStorage.getItem(this.PFP);
    }

    static setUsersPFP(base64img: string): void {
        localStorage.setItem(this.PFP, base64img);
    }
}