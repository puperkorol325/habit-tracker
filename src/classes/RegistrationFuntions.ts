import { LoginData } from "../types/LocalStorageTypes/LoginData";
import { SignUpData } from "../types/LocalStorageTypes/SignUpData";
import LocalStorageInteractions from "./LocalStorageInteractions";
import bcrypt from 'bcryptjs';

export default class RegistrationFunctions {

    private static INCORRECT_DATA_ERROR: string = "Incorrect data";
    private static FIELDS_NOT_FULLFILLED_ERROR: string = "All fields must be fullfilled";
    private static USER_ALREADY_EXISTS_ERROR: string = "User already exists";
    private static NICKNAME_ALREADY_USED_ERROR: string = "Nickname is already used";

    private static ROUNDS: number = 12;

    static async logInUser(email: string | null, password: string | null): Promise<true | string> {
        const data: LoginData = LocalStorageInteractions.getUsersLoginData();

        if (!email || !password) {
            return this.FIELDS_NOT_FULLFILLED_ERROR;
        }

        if (email === data.email && await bcrypt.compare(password, data.password as string)) {
            return true;
        }else {
            return this.INCORRECT_DATA_ERROR;
        }
    }

    static async signUpUser(email: string | null, password: string | null, name: string | null): Promise<true | string> {
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



        LocalStorageInteractions.setUsersData({ ...data, password: await bcrypt.hash(data.password as string, this.ROUNDS) });
        return true;
    }
}