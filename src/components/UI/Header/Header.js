import React from 'react';

import classes from './Header.module.css';

const header = (props) => (
    <p className={classes[props.type]}>{props.children}</p>
);

export default header;