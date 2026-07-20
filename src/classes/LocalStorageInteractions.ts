import { LoginData } from "../types/LocalStorageTypes/LoginData";
import { SignUpData } from "../types/LocalStorageTypes/SignUpData";

export default class LocalStorageInteractions {

    static getUsersLoginData(): LoginData {
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");

        return { email, password }
    }

    static setUsersData(data: SignUpData) {
        if (data.email && data.password && data.name) {
            localStorage.setItem("email", data.email);
            localStorage.setItem("password", data.password);
            localStorage.setItem("email", data.name);
        }
    }
}