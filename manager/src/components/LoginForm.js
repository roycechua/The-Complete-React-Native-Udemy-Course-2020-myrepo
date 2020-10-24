import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

import { connect } from 'react-redux'
import { emailChanged, passwordChanged } from '../actions';

export class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    render() {
        return (
            <SafeAreaView>
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry 
                        label="Password" 
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password} />
                </CardSection>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
    email: state.auth.email,
    password: state.auth.password,
})

const mapDispatchToProps = {
    emailChanged,
    passwordChanged,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
