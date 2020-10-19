import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

import { connect } from 'react-redux'
import { onEmailChanged } from '../actions';

export class LoginForm extends Component {
    onEmailChange(text) {
        this.props.onEmailChanged(text)
    }

    render() {
        return (
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
                    <Input secureTextEntry label="Password" placeholder="password" />
                </CardSection>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => ({
    email: state.auth.email,
})

const mapDispatchToProps = {
    onEmailChanged
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
