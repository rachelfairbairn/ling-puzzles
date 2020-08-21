import React from 'react';

import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.css';

const navItems = (props) => (
    <ul className={classes.NavItems}>
        { props.auth ? <NavItem link="/phonetics">Phonetics</NavItem > : null}
        { props.auth ? <NavItem link="/progress">Progress</NavItem> : null}
        { props.auth&&props.admin ? <NavItem link="/admin">Admin</NavItem> : null}
    </ul>
);

export default navItems;