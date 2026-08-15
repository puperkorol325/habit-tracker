import React from "react";
import styles from "./CreateHabitControl.module.css";
import AddIcon from "../../icons/AddIcon";

const CreateHabitControl: React.FC = () => {

    return (
        <div className={styles.createHabit}>
            <AddIcon className={styles.addIcon} />
        </div>
    );
};

export default CreateHabitControl;