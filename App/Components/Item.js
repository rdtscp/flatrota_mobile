import React, { Component, } from 'react'
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
} from 'react-native'

class Item extends Component {

  constructor(props) {
      super(props)
      this.state = {
        modalVisible: false
      }
  }

  toggleModal() {
      this.setState(previousState => {
          return { modalVisible: !previousState.modalVisible };
      });
  }

  alertTopup() {
      Alert.alert('alertTopup');
  }

  render() {
      return (
          <View style={{ padding: 20, margin: 5, height: 75, flex: 1, flexDirection: "row", justifyContent: 'center', backgroundColor: "white" }}>
              <View style={{ width: 100, height: 75, paddingRight: 5 }}>
                  <Button
                      onPress={this.toggleModal.bind(this)}
                      title="Top Up +"
                      color="green"
                      accessibilityLabel="Declare that you have bought another item."
                  />
              </View>
              <View style={{ width: 100, height: 75 }}>
                  <Text style={{ color: "black", textAlign: "center", fontSize: 18}} >{this.props.itemname}</Text>
              </View>
              <View style={{ width: 100, height: 75, paddingLeft: 5 }}>
                  <Button
                      onPress={this.alertTopup}
                      title="Run Out!"
                      color="red"
                      accessibilityLabel="Learn more about this purple button"
                  />
              </View>
              <ItemTopup toggle={this.toggleModal.bind(this)} visible={this.state.modalVisible} />
          </View>
      );
  }
}

class ItemTopup extends Component {

    constructor(props) {
        super(props)
    }

    topup() {
        Alert.alert('Thanks for topping up!');
        this.props.toggle();
    }

    render() {
        console.log('rendering modal')
        console.log(this.props.visible)
        return (
              <Modal
                transparent={false}
                visible={this.props.visible}>
                <View style={styles.container}>
                    <Text>Quantity</Text>
                    <TextInput
                      style={{
                        height: 30, 
                        width:  50 ,
                        borderWidth: 1,
                        borderColor: "rgba(0,0,0,0.5)",
                      }}
                      placeholder={''}
                      placeholderTextColor={"rgba(198,198,204,1)"}
                      onChangeText={(text) => {this.setState({text})}}
                      onSubmitEditing={this.authenticate}
                      value={(this.state && this.state.text) || ''}
                    />
                    <Button
                      onPress={this.topup.bind(this)}
                      title="OK"
                      color="#841584"
                      accessibilityLabel="Learn more about this purple button"
                    />
                </View>
              </Modal>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default Item