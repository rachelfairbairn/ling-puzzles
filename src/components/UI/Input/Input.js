import React from 'react';

import classes from './Input.module.css';

const input = (props) => {

    const inputClasses = [classes.InputElement];

    let validationError = null;
    if(props.errorMsg){
        inputClasses.push(classes.Invalid);
        validationError = <p className={classes.ValidationError}>{props.errorMsg}</p>;
    }

    return (
        <div className={classes.Input}>
            <input 
                className={inputClasses.join(' ')}
                type={props.password ? "password" : "text"}
                value={props.value} 
                onChange={props.changed}
                disabled={props.disabled}
                placeholder={props.placeholder} />
            {validationError}
        </div>
    );
};

export default input;