import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Score from '../UI/Score/Score';
import '../../globalStyles.css';

const fillInBlanks = (props) => {

    const exercises = Object.keys(props.exercises).map((index) => {
        return (
            <div className="row" key={index}>
                <div className="column-25">
                    <p>{props.exercises[index].question}</p>
                </div>
                <div className="column-75">
                    <Input 
                        value={props.showAnswers ? props.exercises[index].answer : props.exercises[index].value}
                        changed={(event) => props.inputChanged(event.target.value, index)}
                        disabled={props.showAnswers} />
                </div>
            </div>
        );
    });

    return (
        <Aux>
            <h1>{props.title}</h1>
            <p>{props.instructions}</p>
            {exercises}
            <div style={{paddingTop:'10px'}}>
                <Score correct={props.totalCorrect} total={props.exercises.length} show={props.showScore} />
                <Button btnType="Info" disabled={props.showAnswers} clicked={props.checkScore}>CHECK SCORE</Button>
                <Button btnType="Success" clicked={props.closed}>SAVE & CLOSE</Button>
            </div>
        </Aux>
    );

}

export default fillInBlanks;