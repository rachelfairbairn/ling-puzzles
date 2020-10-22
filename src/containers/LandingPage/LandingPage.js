import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Aux from '../../hoc/Aux/Aux';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Header from '../../components/UI/Header/Header';
import * as actions from '../../store/actions/index';

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
        let authRedirect = null;
        if(this.props.isAuthenticated){
            authRedirect = <Redirect to="/phonetics" />
        }

        return (
            <Aux>
                {authRedirect}
                <Header type="h1">Welcome to Ling Puzzles!</Header>
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