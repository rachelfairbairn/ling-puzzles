import React from 'react';

import NavItem from './NavItem/NavItem';
import classes from './NavItems.module.css';

const navItems = (props) => (
    <ul className={classes.NavItems}>
        { props.auth ? <NavItem link="/phonetics">Phonetics</NavItem > : null}
        { props.auth ? <NavItem link="/morphology">Morphology</NavItem > : null}
        { props.auth && !props.showProgress ? <NavItem link="/progress">Progress</NavItem> : null}
        { props.auth&&props.admin ? <NavItem link="/admin">Admin</NavItem> : null}
        { props.auth ? <NavItem link="/acknowledgments">Acknowledgments</NavItem > : null}
    </ul>
);

export default navItems;