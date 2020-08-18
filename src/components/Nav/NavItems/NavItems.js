import React from 'react';

import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.css';

const navItems = (props) => (
    <ul className={classes.NavItems}>
        <NavItem link="/phonetics">Phonetics</NavItem>
        <NavItem link="/progress">Progress</NavItem>
    </ul>
);

export default navItems;