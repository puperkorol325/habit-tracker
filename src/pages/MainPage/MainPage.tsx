import React, { useEffect } from "react";
import styles from "./MainPage.module.css"
import RegistrationFunctions from "../../classes/RegistrationFuntions";
import { useNavigate } from "react-router";

const MainPage: React.FC = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!RegistrationFunctions.isUserLoggedIn()) {
            navigate("/login")
        }
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default MainPage;