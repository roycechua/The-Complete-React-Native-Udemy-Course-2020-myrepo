import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common'

class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput 
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        style={{ height: 20, width: 100}} 
                    />
                </CardSection>

                <CardSection />

                <CardSection />
                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    };
};

export default LoginForm;
