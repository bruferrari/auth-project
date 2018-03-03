import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD42vwvi36OU44eJV0mkXYOBFZ4zucbgME',
            authDomain: 'rn-auth-e6e31.firebaseapp.com',
            databaseURL: 'https://rn-auth-e6e31.firebaseio.com',
            projectId: 'rn-auth-e6e31',
            storageBucket:  'rn-auth-e6e31.appspot.com',
            messagingSenderId: '1088091491895'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log out
                        </Button>
                    </CardSection>
                );

            case false:
                return <LoginForm />;

            default:
                return <Spinner size="large"/>
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;