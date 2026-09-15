import { LoginUserDTO } from "./DTO/LoginUserDTO";
import { SignUpUserDTO } from "./DTO/SignUpUserDTO";

export default class LocalStorageInteractions {

    private static EMAIL = "users_email";
    private static PASSWORD = "users_password";
    private static NAME = "users_name";
    private static PFP = "users_pfp";
    private static CREATED_AT = "users_created_at";
    private static DARK_THEME = "dark_theme";

    static getUsersLoginData(): LoginUserDTO | null {
        const email = localStorage.getItem(this.EMAIL);
        const password = localStorage.getItem(this.PASSWORD);

        if (email && password) {
            return new LoginUserDTO(email, password);
        } else {
            return null;
        }
    }

    static setUsersData(data: SignUpUserDTO) {
        if (data.email && data.password && data.name) {
            localStorage.setItem(this.EMAIL, data.email);
            localStorage.setItem(this.PASSWORD, data.password);
            localStorage.setItem(this.NAME, data.name);
            localStorage.setItem(this.CREATED_AT, new Date().toDateString());
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

    static getData(): string | null {
        return localStorage.getItem(this.CREATED_AT);
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

    static setDarkThemeMode(mode: boolean): void {
        localStorage.setItem(this.DARK_THEME, mode ? "1" : "0");
    }

    static getDarkThemeMode(): boolean {
        const mode: string | null = localStorage.getItem(this.DARK_THEME);
        if (mode) {
            return +mode === 1 ? true : false;
        }else {
            return false;
        }
    }
}