import React, { useEffect } from "react";
import styles from "./MainPage.module.css"
import RegistrationFunctions from "../../classes/RegistrationFuntions";
import { useNavigate } from "react-router";
import Header from "../../components/Header/Header";
import Sidemenu from "../../components/Sidemenu/Sidemenu";

const MainPage: React.FC = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!RegistrationFunctions.isUserLoggedIn()) {
            navigate("/login")
        }
    }, []);

    return (
        <div className={styles.mainPageWrapper}>
            <Header />
            <main className={styles.content}>
                <Sidemenu />
            </main>
        </div>
    )
}

export default MainPage;