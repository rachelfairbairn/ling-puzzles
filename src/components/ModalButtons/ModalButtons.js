import React from 'react';

import Button from '../UI/Button/Button';
import Score from '../UI/Score/Score';

const modalButtons = (props) => (
    <div style={{paddingTop:'10px'}}>
        <Score correct={props.totalCorrect} total={props.exercises.length} show={props.showScore} />
        <Button btnType="Info" disabled={props.showAnswers} clicked={() => props.checkScore(props.lang)}>CHECK SCORE</Button>
        <Button btnType="Success" clicked={props.closed}>SAVE & CLOSE</Button>
    </div>
);

export default modalButtons;