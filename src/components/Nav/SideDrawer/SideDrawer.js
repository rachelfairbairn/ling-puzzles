import React from 'react';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavItems 
                        auth={props.auth} 
                        admin={props.admin} 
                        showProgress={props.showProgress}
                        showPhonetics={props.showPhonetics}
                        showMorphology={props.showMorphology} />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;