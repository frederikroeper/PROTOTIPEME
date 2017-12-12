import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ImageTextItem extends React.Component {

	render() {
		return (
			<View>
				<Image
					style={styles.image}
					source={this.props.src}
					resizeMode="cover"
				/>
				<Text style={[ styles.head, styles.text ]}>{this.props.title}</Text>
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