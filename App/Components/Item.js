import React, { Component, } from 'react'
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Picker,
} from 'react-native'

class Item extends Component {

  constructor(props) {
      super(props)
      this.state = {
        modalVisible: false
      }
  }

  topupModal() {
      this.setState(previousState => {
          return { modalVisible: !previousState.modalVisible };
      });
  }

  requestTopup() {
      Alert.alert('Flatmate has been sent a notification!');
  }

  infoPopup = () => {
      Alert.alert('Name: ' + this.props.item.name + '\nPrice: £' + this.props.item.price + '\nDesc: ' + this.props.item.description + '\nQuantity: ' + this.props.item.quantity);
  }

  render() {
      return (
          <View style={{ padding: 10, margin: 5, height: 75, flex: 1, flexDirection: "row", justifyContent: 'center', backgroundColor: "white" }}>
              <View style={{ width: 100, height: 75, paddingRight: 5 }}>
                  <Button
                      onPress={this.topupModal.bind(this)}
                      title="Top Up +"
                      color="green"
                      accessibilityLabel="Declare that you have bought another item."
                  />
              </View>
              <View style={{ width: 100, height: 75 }}>
                  {/* <Text style={{ color: "black", textAlign: "center", fontSize: 18}} >{this.props.itemname}</Text> */}
                  <Button
                      onPress={this.infoPopup}
                      title={this.props.item.name}
                      color="black"
                      accessibilityLabel="Get info about this item."
                  />
              </View>
              <View style={{ width: 100, height: 75, paddingLeft: 5 }}>
                  <Button
                      onPress={this.requestTopup}
                      title="Run Out!"
                      color="red"
                      accessibilityLabel="Request topup of this item."
                  />
              </View>
              <ItemTopup toggle={this.topupModal.bind(this)} visible={this.state.modalVisible} />
          </View>
      );
  }
}

class ItemTopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pickerValue: 0
        }
    }

    topup() {
        // Send network request.
        var quantity = this.state.pickerValue;
        // Close modal.
        this.props.toggle();
    }

    render() {
        return (
              <Modal
                transparent={false}
                visible={this.props.visible}>
                <View style={styles.modal}>
                    <Text>Quantity</Text>
                    <Picker 
                      style={{
                        width: 50,
                      }}
                      selectedValue={(this.state && this.state.pickerValue) || '0'}
                      onValueChange={(value) => {
                        this.setState({pickerValue: value})
                      }}>
                      <Picker.Item label={'0'} value={'0'} />
                      <Picker.Item label={'1'} value={'1'} />
                      <Picker.Item label={'2'} value={'2'} />
                      <Picker.Item label={'3'} value={'3'} />
                    </Picker>
                    <Button
                      onPress={this.topup.bind(this)}
                      title="Submit"
                      color="blue"
                      accessibilityLabel="Submit"
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
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});

export default Item