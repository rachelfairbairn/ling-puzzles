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
        inputValue: ''
    }

    inputChangedHandler = (event) => {
        this.setState({inputValue: event.target.value});
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
                <div style={{width:'200px', margin:'auto'}}>
                    <Input value={this.state.inputValue} changed={this.inputChangedHandler} />
                </div>
                <Button btnType="Success" clicked={() => this.props.onAuth(this.state.inputValue)}>ENTER</Button>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (password) => dispatch(actions.auth(password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);