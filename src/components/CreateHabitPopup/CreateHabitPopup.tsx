import React, { useState } from "react";
import styles from "./CreateHabitPopup.module.css";
import CloseIcon from "../../icons/CloseIcon";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { switchState } from "../../state/createPopupSlice";
import { createHabit } from "../../state/habitSlice";

const CreateHabitPopup: React.FC = () => {

    const [title, setTitle] = useState<string>("");

    const dispatch = useAppDispatch();

    function handleClosePopup() {
        dispatch(switchState());
    }

    function handleCreateHabit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(createHabit(title));
        dispatch(switchState());
    } 

    return (
        <div className={styles.popup}>
            <div className={styles.popupContainer}>
                <div className={styles.containerTop}>
                    <p className={styles.popupTitle}>Create a new habit</p>
                    <CloseIcon className={styles.closeButton} onClick={handleClosePopup}/>
                </div>
                <form className={styles.form} onSubmit={(e) => handleCreateHabit(e)}>
                    <div className={styles.field}>
                        <label htmlFor="title" className={styles.label}>Title</label>
                        <input
                            id="title"
                            className={styles.input}
                            placeholder="Type the title..."
                            type="text" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <button type="submit" className={styles.submitButton}>Create</button>
                </form>
            </div>
        </div>
    )
};

export default CreateHabitPopup;