import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Header from '../UI/Header/Header';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Score from '../UI/Score/Score';
import '../../globalStyles.css';

const fillInBlanks = (props) => {

    const exercises = Object.keys(props.exercises).map((index) => {
        return (
            <div className="row" key={index}>
                <div className="column-25">
                    <p>{props.exercises[index].given}</p>
                </div>
                <div className="column-75">
                    <Input 
                        value={props.exercises[index].value}
                        changed={(event) => props.inputChanged(event, index)} />
                </div>
            </div>
        );
    });

    return (
        <Aux>
            <Header type="h2">{props.title}</Header>
            <p>{props.instructions}</p>
            {exercises}
            <Score correct={props.totalCorrect} total={Object.keys(props.exercises).length} show={props.showScore&&props.validAnswers} />
            <Button btnType="Info" disabled={!props.validAnswers} clicked={props.checkScore}>CHECK SCORE</Button>
            <Button btnType="Success" clicked={props.closed}>SAVE & CLOSE</Button>
        </Aux>
    );

}

export default fillInBlanks;