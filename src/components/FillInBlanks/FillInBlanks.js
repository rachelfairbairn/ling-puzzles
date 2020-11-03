import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Input from '../UI/Input/Input';
import '../../globalStyles.css';
import classes from './FillInBlanks.module.css';

const fillInBlanks = (props) => {


    const exercises = Object.keys(props.exercises).map((index) => {
        let columnClasses = ['column-25', 'column-75'];
        if(props.equalColumns){
            columnClasses[0] = 'column-50';
            columnClasses[1] = 'column-50';
        }
        let disabled = (props.exercises[index].answer.length > 11) ? false : props.showAnswers;

        return (
            <div className={(props.equalColumns) ? classes.WideRow : "row"} key={index}>
                <div className={columnClasses[0]}>
                    <p>{props.exercises[index].question}</p>
                </div>
                <div className={columnClasses[1]}>
                    <Input 
                        value={props.showAnswers ? props.exercises[index].answer : props.exercises[index].value}
                        changed={(event) => props.inputChanged(event.target.value, Number(index) + Number(props.startIndex), props.lang)}
                        disabled={disabled} />
                </div>
            </div>
        );
    });

    return (
        <Aux>
            {exercises}
        </Aux>
    );

}

export default fillInBlanks;