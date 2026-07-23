import { LoginData } from "../types/LocalStorageTypes/LoginData";
import { SignUpData } from "../types/LocalStorageTypes/SignUpData";
import LocalStorageInteractions from "./LocalStorageInteractions";

export default class RegistrationFunctions {

    private static INCORRECT_DATA_ERROR: string = "Неверно введенные данные";
    private static FIELDS_NOT_FULLFILLED_ERROR: string = "Заполните все поля";
    private static USER_ALREADY_EXISTS_ERROR: string = "Пользователь уже существует";
    private static NICKNAME_ALREADY_USED_ERROR: string = "Пользователь уже существует";

    static logInUser(email: string | null, password: string | null): true | string {
        const data: LoginData = LocalStorageInteractions.getUsersLoginData();

        if (!email || !password) {
            return this.FIELDS_NOT_FULLFILLED_ERROR;
        }

        if (email === data.email && password === data.password) {
            return true;
        }else {
            return this.INCORRECT_DATA_ERROR;
        }
    }

    static signUpUser(email: string | null, password: string | null, name: string | null): true | string {
        const data: SignUpData = { email, password, name };

        if (!email || !password || !name) {
            return this.FIELDS_NOT_FULLFILLED_ERROR;
        }

        if (email === LocalStorageInteractions.getEmail()) {
            return this.USER_ALREADY_EXISTS_ERROR;
        }

        if (name === LocalStorageInteractions.getName()) {
            return this.NICKNAME_ALREADY_USED_ERROR;
        }


        LocalStorageInteractions.setUsersData(data);
        return true;
    }
}