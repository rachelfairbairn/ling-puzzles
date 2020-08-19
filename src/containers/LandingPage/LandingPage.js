import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Header from '../../components/UI/Header/Header';

class LandingPage extends Component{
     
    state = {
        inputValue: ''
    }

    inputChangedHandler = (event) => {
        this.setState({inputValue: event.target.value});
    }

    render () {
        return (
            <Aux>
                <Header type="h1">Welcome to Ling Puzzles!</Header>
                <p>Please enter the password to continue.</p>
                <Input value={this.state.inputValue} changed={this.inputChangedHandler} />
                <Button btnType="Success">ENTER</Button>
            </Aux>
        );
    }
}

export default LandingPage;