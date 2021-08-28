import React from 'react';


import { CgChevronLeft} from 'react-icons/cg';
import { useHistory, useParams } from 'react-router-dom';
import Button from './Button';
import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }
    return (
        <>
            <div className="back-button-container"></div>
                <button className="back-button" onClick={handleBackButtonClick}>
                    <CgChevronLeft />
                </button>
            
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>descrição</p>
            </div>
        </>
    );
}

export default TaskDetails;