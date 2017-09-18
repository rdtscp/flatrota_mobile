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
    var sampleItem = {
      name: 'Kitchen Roll',
      price: '0.99',
      description: 'Absorbent kitchen roll, usually found near the self service checkouts.',
      quantity: '2',
      rota: ['Alex', 'Anthony', 'Caitlin', 'Justina']
    }
    return (
      <View style={{backgroundColor: "black", flex: 1}}>
        <NavigationBar
          title={{ title: 'Communal Resources', tintColor: 'white', }}
          rightButton={addItem}
          style={{ backgroundColor: "black", }}
          statusBar={{ tintColor: "black", }}
        />
        <ScrollView>
          <Item item={sampleItem} />
          <Item item={sampleItem} />
          <Item item={sampleItem} />
          <Item item={sampleItem} />
          <Item item={sampleItem} />
          <Item item={sampleItem} />
        </ScrollView>
      </View>
    )
  }
}

export default Homepage