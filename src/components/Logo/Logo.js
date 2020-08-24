import React from 'react';
import { NavLink } from 'react-router-dom';

import lingLogo from '../../resources/images/ling-puzzles-logo-puzzle.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <NavLink to="/">
            <img src={lingLogo} alt="LingPuzzles" />
        </NavLink>
    </div>
);

export default logo;