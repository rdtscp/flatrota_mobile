import React, { Component, } from 'react'
import { Button, Text, View, } from 'react-native'

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
          <View style={{ padding: 20, height: 50, flex: 1, flexDirection: "row", justifyContent: 'center', }}>
              <View style={{ width: 100, height: 50 }}>
                  <Button />
              </View>
              <View style={{ width: 100, height: 50 }}>
                  <Text style={{ color: "white", textAlign: "center" }} >{this.props.itemname}</Text>
              </View>
              <View style={{ width: 100, height: 50 }}>
                  <Button />
              </View>
          </View>
      );
  }
}

export default Item