import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class ImageTextItem extends React.Component {

  openDetails() {
    this.props.navigation.navigate('DetailScreen',
      {
        title: this.props.title,
        desc: this.props.children,
        src: this.props.src
      });
  }

	render() {
		return (
			<View>
        {this.props.image &&
  				<Image
  					style={styles.image}
  					source={this.props.src}
  					resizeMode="cover"
  				/>
        }
        <TouchableOpacity onPress={this.openDetails.bind(this)}>
				  <Text style={[ styles.head, styles.text ]}>{this.props.title}</Text>
        </TouchableOpacity>
				<Text style={[ styles.text, styles.last ]}>{this.props.children}</Text>
			</View>
		)
	}

}

const styles = StyleSheet.create({
  head: {
  	fontSize: 25,
  	fontWeight: 'bold',
  	paddingTop: 5,
  },
  text: {
  	paddingLeft: 10,
  	paddingRight: 10,
  },
  last: {
  	paddingBottom: 10,
  },
  image: {
  	height: 200,
  	width: null,
  }
});