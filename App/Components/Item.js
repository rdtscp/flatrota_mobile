import React, { Component, } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
} from 'react-native'

class Item extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
      super(props)
      this.state = {
          
      }
  }

  render() {
      return (
          <View style={{ padding: 20, margin: 5, height: 75, flex: 1, flexDirection: "row", justifyContent: 'center', backgroundColor: "white" }}>
              <View style={{ width: 100, height: 75, paddingRight: 5 }}>
                  <Button
                      onPress={this.authenticate}
                      title="Top Up +"
                      color="green"
                      accessibilityLabel="Learn more about this purple button"
                  />
              </View>
              <View style={{ width: 100, height: 75 }}>
                  <Text style={{ color: "black", textAlign: "center", fontSize: 18}} >{this.props.itemname}</Text>
              </View>
              <View style={{ width: 100, height: 75, paddingLeft: 5 }}>
                  <Button
                      onPress={this.authenticate}
                      title="Run Out!"
                      color="red"
                      accessibilityLabel="Learn more about this purple button"
                  />
              </View>
          <View> 
            <Modal 
              animated={true}
              transparent={false}
              visible={(this.state && this.state.modalVisible) || true }>
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
                    onPress={this.authenticate}
                    title="OK"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                  />
              </View>
            </Modal>
          </View>
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
  }
});

export default Item