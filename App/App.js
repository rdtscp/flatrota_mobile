import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
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
            loading: true,
            authenticated: false
        }
    }
  
    componentDidMount() {
        axios.post('http://localhost:1337/token')
        .then((response) => {
            this.setState({
                loading: false,
                authenticated: response.data.valid
            });
        });
    }
  
    authenticate = () => {
        this.setState({
            authenticated: true
        });
    }

    render() {
      console.log('State:')
      console.log(this.state)
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