import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {

  onButton() {
    console.log("Der Button wurde gedrückt");
  }

  render() {
    return (

      <View style={styles.design}>
        <Image 
          source={require("./assets/icons/app-icon.png")}
          style={styles.bild}
          />
        <Text>Hallo Nutzer!</Text>
        <Button
          title="Ich bin ein Button!"
          onPress={this.onButton}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  design: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  bild: {
    height: 50,
    width: 50
  }
});
