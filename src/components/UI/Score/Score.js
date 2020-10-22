import React from 'react';

import classes from './Score.module.css';

const score = (props) => {
    let classArray = [classes.Score];
    if(props.correct === props.total){
        classArray.push(classes.Correct);
    } else{
        classArray.push(classes.Wrong);
    }
    return ( 
        props.show
            ? <p className={classArray.join(' ')}>{props.correct}/{props.total}</p>
            : null
        );
}

export default score;