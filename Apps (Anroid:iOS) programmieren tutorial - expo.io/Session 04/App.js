import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';

import ImageTextItem from './components/ImageTextItem';

export default class App extends React.Component {

  onButton() {
    console.log("Der Button wurde gedrückt");
  }

  render() {
    return (

      <ScrollView>
        <ImageTextItem 
          title="Erste Überschrift"
          src={require('./assets/images/football.jpg')}
          >
          Das ist die erste Beschreibung
        </ImageTextItem>
        <ImageTextItem 
          title="Zweite Überschrift"
          src={require('./assets/images/towels.jpg')}
          >
          Das ist die zweite Beschreibung
        </ImageTextItem>
        <ImageTextItem 
          title="Skulptur"
          src={require('./assets/images/sculpture.jpg')}
          >
          Das ist die Beschreibung der Skulptur
        </ImageTextItem>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({

});
