import React, { Component, } from 'react'
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

class Login extends Component {

    static propTypes = {}

    static defaultProps = {}

    constructor(props) {
      super(props)
      this.state = {}
    }
  
    authenticate = () => {
        this.props.authenticate();
    }

    render() {
        return (
            <View style={styles.container}>
              <Text>Enter your name</Text>
              <TextInput
                style={{
                  height: 30, 
                  width:  300 ,
                  borderWidth: 1,
                  borderColor: "rgba(0,0,0,0.5)",
                }}
                placeholder={'Username'}
                placeholderTextColor={"rgba(198,198,204,1)"}
                onChangeText={(text) => {this.setState({text})}}
                onSubmitEditing={this.authenticate}
                value={(this.state && this.state.text) || ''}
              />
              <Button
                onPress={this.authenticate}
                title="OK"
                color="blue"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
        );
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

export default Login