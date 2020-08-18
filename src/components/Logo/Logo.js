import React from 'react';
import lingLogo from '../../resources/images/ling-puzzles-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={lingLogo} alt="LingPuzzles" />
    </div>
);

export default logo;