import React, { useEffect } from "react";
import styles from "./MainPage.module.css"
import RegistrationFunctions from "../../classes/RegistrationFuntions";
import { Outlet, useNavigate } from "react-router";
import Header from "../../components/Header/Header";
import Sidemenu from "../../components/Sidemenu/Sidemenu";
import MainPanel from "../../components/MainPanel/MainPanel";
import { useAppSelector } from "../../hooks/redux-hooks";
import CreateHabitPopup from "../../components/CreateHabitPopup/CreateHabitPopup";

const MainPage: React.FC = () => {

    const navigate = useNavigate();
    const isCreatePopupActive: boolean = useAppSelector((state) => state.createPopup);

    useEffect(() => {
        if (!RegistrationFunctions.isUserLoggedIn()) {
            navigate("/login")
        }
    }, []);

    return (
        <>
            <div className={styles.mainPageWrapper}>
                <Header />
                <main className={styles.content}>
                    <Sidemenu />
                    <div className={styles.panel}>
                        <Outlet />
                    </div>
                </main>
            </div>
            {isCreatePopupActive && (
                <CreateHabitPopup />
            )}
        </>
    )
}

export default MainPage;