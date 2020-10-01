import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgmYbNMmwY6oKHjoy2IvXjFwBY_Q0vtLU",
    authDomain: "authentication-633ed.firebaseapp.com",
    databaseURL: "https://authentication-633ed.firebaseio.com",
    projectId: "authentication-633ed",
    storageBucket: "authentication-633ed.appspot.com",
    messagingSenderId: "1004025333148",
    appId: "1:1004025333148:web:c2f866839799029c96f459",
    measurementId: "G-HBYKP8SW79"
};
  
export default class App extends Component {
    state = { loggedIn: null }  

    componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        });
    };

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />
        }
    };

    render() {
        return (
            <SafeAreaView>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </SafeAreaView>
        )
    }
};
