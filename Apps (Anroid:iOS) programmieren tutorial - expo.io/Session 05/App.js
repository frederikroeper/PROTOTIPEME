import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';

import ImageTextItem from './components/ImageTextItem';

export default class App extends React.Component {

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
          >
          Das ist die erste Beschreibung
        </ImageTextItem>
        <ImageTextItem 
          title="Zweite Überschrift"
          image={this.state.toggle}
          src={require('./assets/images/towels.jpg')}
          >
          Das ist die zweite Beschreibung
        </ImageTextItem>
        <ImageTextItem 
          title="Skulptur"
          image={this.state.toggle}
          src={require('./assets/images/sculpture.jpg')}
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

const styles = StyleSheet.create({

});
