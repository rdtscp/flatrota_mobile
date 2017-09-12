import NavigationBar from 'react-native-navbar'
import React, { Component, } from 'react'
import {
  View,
  ScrollView,
  Text,
} from 'react-native'

class Homepage extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={{backgroundColor: "black"}}>
        <NavigationBar
          title={{ title: 'Home', tintColor: 'white', }}
          leftButton={{ title: 'Add Task', }}
          rightButton={{ title: 'Add Item', }}
          style={{ backgroundColor: "black", }}
          statusBar={{ tintColor: "black", }}
        />
        <ScrollView>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          <Text>Line</Text>
          
        </ScrollView>
      </View>
    )
  }
}

export default Homepage