import React from 'react';

import classes from './QuestionAndFill.module.css';

import FillInBlanks from '../FillInBlanks/FillInBlanks';

const questionAndFill = (props) => {
    
    return (
        <div className={classes.QuestionAndFill}>
            <p className={classes.Task}>{props.exerciseTask1}</p>
            <FillInBlanks 
                exercises={props.exercises.slice(0,props.startIndex)}
                lang={props.lang}
                validAnswers
                startIndex={0}
                inputChanged={props.inputChanged}
                showAnswers={props.showAnswers}
                equalColumns />
            <p className={classes.Task}>{props.exerciseTask2}</p>
            <FillInBlanks 
                exercises={props.exercises.slice(props.startIndex)}
                lang={props.lang}
                validAnswers
                startIndex={props.startIndex}
                inputChanged={props.inputChanged}
                showAnswers={props.showAnswers}
                equalColumns />
        </div>
    );
};

export default questionAndFill;