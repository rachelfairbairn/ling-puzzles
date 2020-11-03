import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Header from '../../components/UI/Header/Header';
import * as actions from '../../store/actions/index';
import classes from './LandingPage.module.css';

import morphologyImagePath from '../../resources/images/morphology_comic.jpg';
import phoneticsImagePath from '../../resources/images/phonetics_comic.png';

class LandingPage extends Component{
     
    state = {
        inputValue: '',
        invalidPassword: false
    }

    inputChangedHandler = (event) => {
        this.setState({inputValue: event.target.value});
    }

    authHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.inputValue);
    }

    render () {
        return (
            <Aux>
                <Header type="h1">Welcome to Ling Puzzles!</Header>
                { (this.props.isAuthenticated) ? 
                <Aux>
                    <div className={classes.LandingPageCard}>                        
                        <Button 
                        btnType="Img"
                        clicked={() => this.props.history.push('/phonetics')}>
                            <p style={{fontSize:"1.5em",
                                        margin:"4px"}}>PHONETICS</p>
                            <br/>
                            <img style={{width:"100%"}} src={phoneticsImagePath} alt="phonetics comic" />
                        </Button>
                    </div>
                    <div className={classes.LandingPageCard}>                        
                        <Button 
                        btnType="Img"
                        clicked={() => this.props.history.push('/morphology')}>
                            <p style={{fontSize:"1.5em",
                                        margin:"4px"}}>MORPHOLOGY</p>
                            <br/>
                            <img style={{width:"100%"}} src={morphologyImagePath} alt="morphology comic" />                        
                        </Button>
                    </div>
                </Aux> :
                <Aux>
                    <p>Please enter the password to continue.</p>
                    <form onSubmit={this.authHandler}>
                        <div style={{width:'200px', margin:'auto'}}>
                            <Input 
                                password
                                value={this.state.inputValue} 
                                changed={this.inputChangedHandler} 
                                placeholder="password"
                                errorMsg={this.props.errorMsg} />
                        </div>
                        <Button 
                            btnType="Success" 
                            clicked={this.authHandler}>ENTER</Button>
                    </form>
                </Aux> }
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        errorMsg: state.auth.errorMsg
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (password) => dispatch(actions.auth(password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);