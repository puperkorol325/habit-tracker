import { LoginData } from "../types/LocalStorageTypes/LoginData";
import { SignUpData } from "../types/LocalStorageTypes/SignUpData";
import LocalStorageInteractions from "./LocalStorageInteractions";

export default class RegistrationFunctions {

    static logInUser(email: string | null, password: string | null): boolean {
        const data: LoginData = LocalStorageInteractions.getUsersLoginData();

        if (email === data.email && password === data.password) {
            return true;
        }else {
            return false;
        }
    }

    static signUpUser(email: string | null, password: string | null, name: string | null) {
        const data: SignUpData = { email, password, name };
        LocalStorageInteractions.setUsersData(data);
    }
}