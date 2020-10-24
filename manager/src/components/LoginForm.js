import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions';

export class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
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

                {this.renderError()}

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
})

const mapDispatchToProps = {
    emailChanged,
    passwordChanged,
    loginUser,
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
