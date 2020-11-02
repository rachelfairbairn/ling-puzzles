import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Input from '../UI/Input/Input';
import '../../globalStyles.css';

const fillInBlanks = (props) => {


    const exercises = Object.keys(props.exercises).map((index) => {
        return (
            <div className="row" key={index}>
                <div className={(props.equalColumns) ? "column-50" : "column-25"}>
                    <p>{props.exercises[index].question}</p>
                </div>
                <div className={(props.equalColumns) ? "column-50" : "column-75"}>
                    <Input 
                        value={props.showAnswers ? props.exercises[index].answer : props.exercises[index].value}
                        changed={(event) => props.inputChanged(event.target.value, Number(index) + Number(props.startIndex), props.lang)}
                        disabled={props.showAnswers} />
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