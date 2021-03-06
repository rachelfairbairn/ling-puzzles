import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.css';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Nav/Toolbar/Toolbar';
import SideDrawer from '../../components/Nav/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    menuButtonHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    logoClickHandler = () => {
        this.props.history.push('/');
    }

   render () {
        return (
            <Aux>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} 
                    auth={this.props.isAuthenticated} 
                    admin={this.props.isAdmin}
                    showProgress={this.props.showPhoneticsAnswers && this.props.showMorphologyAnswers}
                    showPhonetics={this.props.showPhonetics}
                    showMorphology={this.props.showMorphology} />
                <Toolbar 
                    menuButtonClicked={this.menuButtonHandler}
                    auth={this.props.isAuthenticated} 
                    admin={this.props.isAdmin}
                    showProgress={this.props.showPhoneticsAnswers && this.props.showMorphologyAnswers}
                    showPhonetics={this.props.showPhonetics}
                    showMorphology={this.props.showMorphology} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <div className={classes.Footer}>Last modified: January 2021</div>
            </Aux>
        );
   }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isAdmin: state.auth.isAdmin,
        showPhoneticsAnswers: state.phonetics.showAnswers,
        showMorphologyAnswers: state.morphology.showAnswers,
        showPhonetics: state.phonetics.show,
        showMorphology: state.morphology.show
    }
}

export default connect(mapStateToProps)(Layout);