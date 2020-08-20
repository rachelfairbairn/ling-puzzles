import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Score from '../UI/Score/Score';
import ResponsivePlayer from '../UI/ResponsivePlayer/ResponsivePlayer';
import classes from './VideoActivity.module.css';

const videoActivity = (props) => {

    const exercises = Object.keys(props.exercises).map((index) => {
        return (
            <div key={index}>
                <ResponsivePlayer url={props.exercises[index].url}/>
                <div className={classes.VideoActivityInput}>
                    <Input 
                        value={props.exercises[index].value}
                        changed={(event) => props.inputChanged(event.target.value, index)}
                     />
                </div>
            </div>
        );
    });

    return (
        <Aux>
            <h1>{props.title}</h1>
            <p>{props.instructions}</p>
            {exercises}
            <Score correct={props.totalCorrect} total={Object.keys(props.exercises).length} show={props.showScore&&props.validAnswers} />
            <Button btnType="Info" disabled={!props.validAnswers} clicked={props.checkScore}>CHECK SCORE</Button>
            <Button btnType="Success" clicked={props.closed}>SAVE & CLOSE</Button>
        </Aux>
    );

};

export default videoActivity;