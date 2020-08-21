import React from 'react';

import classes from './Toolbar.module.css';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../../UI/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.menuButtonClicked} />
        <div className={classes.Logo}><Logo /></div>
        <nav className={classes.DesktopOnly}>
            <NavItems auth={props.auth} admin={props.admin} />
        </nav>
    </header>
);

export default toolbar;