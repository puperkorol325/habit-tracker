import React, { useState } from "react";
import styles from "./ProfilePanel.module.css";
import CameraIcon from "../../icons/CameraIcon";
import LocalStorageInteractions from "../../classes/LocalStorageInteractions";

const ProfilePanel: React.FC = () => {

    const [pfp, setPfp] = useState<string>(LocalStorageInteractions.getUsersPFP() || "");
    const email: string = LocalStorageInteractions.getEmail() || "email@example.com";
    const [name, setName] = useState<string>((LocalStorageInteractions.getName() || ""));

    async function handlePfpChange(file: File): Promise<void> {
        await new Promise<string | undefined>((resolve, reject) => {
            const reader: FileReader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                if (reader.result) {
                    setPfp(reader.result?.toString());
                }
                resolve(reader.result?.toString());
            };
            reader.onerror = (error) => reject(error);
        });
    }

    function handleSubmit() {
        if (name.length > 3) {
            LocalStorageInteractions.setName(name);
        }
        if (pfp.length > 0) {
            LocalStorageInteractions.setUsersPFP(pfp);
        }
    }

    return (
        <>
            <h1 className={styles.title}>Profile</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.mainInfo}>
                    <label htmlFor="pfp" className={styles.imageLabel}>
                        <img 
                            className={styles.usersPfp} 
                            src={ pfp ? pfp : require("../../images/default-pfp.jpg") } 
                            alt="Users pfp" />
                        <CameraIcon className={styles.cameraIcon} />
                    </label>
                    <input 
                        type="file" 
                        accept=".jpeg, .jpg, .png"
                        id="pfp" 
                        name="pfp"
                        className={styles.pfpInput}
                        onChange={(e) => e.target.files?.length ? handlePfpChange(e.target.files[0]) : "" } />
                    <div className={styles.mainInfoRight}>
                        <div className={styles.formField}>
                            <p className={styles.label}>E-mail</p>
                            <p className={styles.emailString}>{email}</p>
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={styles.textInput}
                                />
                        </div>
                        <button className={styles.saveButton}>Save</button>
                    </div>
                </div>
            </form>
        </>
    )
};

export default ProfilePanel;