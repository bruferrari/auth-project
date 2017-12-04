import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        var config = {
            apiKey: 'AIzaSyD42vwvi36OU44eJV0mkXYOBFZ4zucbgME',
            authDomain: 'rn-auth-e6e31.firebaseapp.com',
            databaseURL: 'https://rn-auth-e6e31.firebaseio.com',
            projectId: 'rn-auth-e6e31',
            storageBucket:  'rn-auth-e6e31.appspot.com',
            messagingSenderId: '1088091491895'
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;