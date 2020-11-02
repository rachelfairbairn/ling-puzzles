import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Input from '../UI/Input/Input';
import ResponsivePlayer from '../UI/ResponsivePlayer/ResponsivePlayer';
import classes from './VideoActivity.module.css';

const videoActivity = (props) => {

    const exercises = Object.keys(props.exercises).map((index) => {
        return (
            <div key={index}>
                <ResponsivePlayer url={props.exercises[index].question}/>
                <div className={classes.VideoActivityInput}>
                    <Input 
                        value={props.showAnswers ? props.exercises[index].answer : props.exercises[index].value}
                        changed={(event) => props.inputChanged(event.target.value, index)}
                        disabled={props.showAnswers}
                     />
                </div>
            </div>
        );
    });

    return (
        <Aux>
            {exercises}
        </Aux>
    );

};

export default videoActivity;