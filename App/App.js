import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  AsyncStorage,
  Button,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
} from 'react-native'

import Login from './Components/Login.js';
import Homepage from './Components/Homepage.js';
import axios from 'axios';


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            authToken: '',
            loading: true,
            authenticated: false
        }
    }
  
    componentDidMount() {
        // Get our authToken.
        AsyncStorage.getItem('authToken', (err, authToken) => {
            if (err) console.log(err);
            // If we have a token.
            if (authToken !== null){
                this.setState({
                    authToken: authToken
                });
                this.checkToken(authToken);
            // Else Login.
            } else {
                this.setState({
                    loading: false,
                    authenticated: false
                });
            }
        });
    }

    // Checks if our authToken is still valid.
    checkToken = (authToken) => {
        // Schedule a check for every 1 second.
        var tokenCheck = setInterval((authToken) => {
            // Post our authToken to the backend.
            axios.post('http://localhost:1337/token', {
                token: authToken
            })
            .then((response) => {
                res = response.data;
                // Mark that we have finished loading, and store validity of our token.
                this.setState({
                    loading: false,
                    authenticated: res.valid
                });
                // Stop trying to check token.
                clearInterval(tokenCheck)
            })
            .catch((err) => {
                throw err;
            })
        }, 1000);
    }
  
    // Posts Login details to backend.
    authenticate = (username) => {
        axios.post('http:localhost:1337/login', {
            username: username
        })
        .then((response) => {
            res = response.data
            // If the response contains a token.
            if (res.token) {
                // Store the token in storage.
                AsyncStorage.setItem('authToken', JSON.stringify(res.token), (err) => {
                    if (err) {
                        console.log(err);
                        // Inform App we have stopped loading, but we are not authenticated.
                        this.setState({
                            loading: false,
                            authenticated: false
                        });
                    }
                    else {
                        console.log('Stored token: ' + res.token);
                        // Inform App we have stopped loading, and we are authenticated.
                        this.setState({
                            loading: false,
                            authenticated: true
                        });
                    }
                });
            } else {
                // There was no token in response: Inform App we have stopped loading, and we are not authenticated.
                this.setState({
                    loading: false,
                    authenticated: false
                })
            }
        })
    }

    render() {
      if (this.state.loading) {
          return (
              <View style={styles.container}>
                <ActivityIndicator
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  animating={true}
                  size={'small'}
                  color={'black'}
                />
              </View>
          );
      } else {
          if (this.state.authenticated) {
              return (
                  <Homepage />
              );
          } else {
              return (
                  <Login authenticate={this.authenticate} />
              );
          }
      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App