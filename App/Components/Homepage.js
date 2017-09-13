import NavigationBar from 'react-native-navbar'
import React, { Component, } from 'react'
import {
  Alert,
  View,
  ScrollView,
  Text,
  SegmentedControlIOS,
} from 'react-native'

import Item from './Item.js';

const addItem = {
  title: 'Add Item',
  handler: () => {
    Alert.alert('Create new item');
  }
}

class Homepage extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  

  render() {
    return (
      <View style={{backgroundColor: "black", flex: 1}}>
        <NavigationBar
          title={{ title: 'Communal Resources', tintColor: 'white', }}
          rightButton={addItem}
          style={{ backgroundColor: "black", }}
          statusBar={{ tintColor: "black", }}
        />
        <ScrollView>
          <Item itemname="Toilet Paper" />
          <Item itemname="Kitchen Roll" />
          <Item itemname="Hand Soap" />
          <Item itemname="Bin Bags" />
          <Item itemname="Dish Soap" />
        </ScrollView>
      </View>
    )
  }
}

export default Homepage