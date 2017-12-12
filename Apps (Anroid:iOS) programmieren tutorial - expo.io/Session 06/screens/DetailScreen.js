import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class DetailScreen extends React.Component {

	static navigationOptions = ({ navigation }) => ({
		title: navigation.state.params.title,
	});

	render() {
		var params = this.props.navigation.state.params;
		return (
			<View>
  			<Image
					style={styles.image}
					source={params.src}
					resizeMode="cover"
				/>
				<Text style={[ styles.head, styles.text ]}>{params.title}</Text>
				<Text style={[ styles.text, styles.last ]}>{params.desc}</Text>
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