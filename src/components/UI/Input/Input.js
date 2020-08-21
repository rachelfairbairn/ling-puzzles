import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    return (
        <div className={classes.Input}>
            <input 
                className={classes.InputElement}
                type="text" 
                value={props.value} 
                onChange={props.changed}
                disabled={props.disabled} />
        </div>
    );
};

export default input;