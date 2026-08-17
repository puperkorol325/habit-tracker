import React from "react";
import styles from "./CreateHabitControl.module.css";
import AddIcon from "../../icons/AddIcon";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { switchState } from "../../state/createPopupSlice";

const CreateHabitControl: React.FC = () => {

    const dispatch = useAppDispatch();

    function onClickHandler() {
        dispatch(switchState());
    }

    return (
        <div className={styles.createHabit} onClick={onClickHandler}>
            <AddIcon className={styles.addIcon} />
        </div>
    );
};

export default CreateHabitControl;