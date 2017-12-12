import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import DetailScreen from './screens/DetailScreen';

import ImageTextItem from './components/ImageTextItem';

class App extends React.Component {

  static navigationOptions = {
    title: "Alle Bilder"
  }

  constructor() {
    super();

    this.state = {
      toggle: true
    }

  }


  onButton() {
    console.log("Der Button wurde gedrückt");
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (

      <ScrollView>
        <ImageTextItem 
          title="Erste Überschrift"
          image={this.state.toggle}
          src={require('./assets/images/football.jpg')}
          navigation={this.props.navigation}
          >
          Das ist die erste Beschreibung
        </ImageTextItem>
        <ImageTextItem 
          title="Zweite Überschrift"
          image={this.state.toggle}
          src={require('./assets/images/towels.jpg')}
          navigation={this.props.navigation}
          >
          Das ist die zweite Beschreibung
        </ImageTextItem>
        <ImageTextItem 
          title="Skulptur"
          image={this.state.toggle}
          src={require('./assets/images/sculpture.jpg')}
          navigation={this.props.navigation}
          >
          Das ist die Beschreibung der Skulptur
        </ImageTextItem>
        <Button
          title="Toogle Bilder"
          onPress={this.onButton.bind(this)}
        />
      </ScrollView>

    );
  }
}

export default StackNavigator({
  Home: {
    screen: App,
  },
  DetailScreen: {
    screen: DetailScreen,
  }
},
{
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0: StatusBar.currentHeight
  }
}


)

const styles = StyleSheet.create({

});
