import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, StatusBar, Text, View } from 'react-native';

export default class Bckend extends Component {
	render() {
		return (
			<View key={this.props.keyval} style={styles.forv}>
				<StatusBar backgroundColor="#12005e" />

				<Text style={styles.forrel}>{this.props.val.note}</Text>

				<TouchableOpacity onPress={this.props.deleteMethod} style={styles.btn}>
					<Text style={styles.fordel}>delete</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={this.props.previewmethod} style={styles.btn2}>
					<Text style={styles.fordel}>preview</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	forv: {
		top: 10,
		bottom: 5,
		position: 'relative',
		padding: 10,
		paddingRight: 70,
		bottom: 20,
	},
	fordel: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18,
	},
	btn: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#7c43bd',
		width: 60,
		height: 30,
		borderRadius: 60,
		borderLeftColor: '#7c43bd',
		left: 260,
		bottom: 65,
	},
	forrel: {
		padding: 20,
		borderLeftWidth: 10,
		borderLeftColor: '#7b1fa2',
	},
	forv: {
		top: 10,
		bottom: 5,
		position: 'relative',
		padding: 10,
		paddingRight: 70,
		bottom: 20,
	},
	fordel: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18,
	},

	btn2: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#7c43bd',
		width: 60,
		height: 30,
		borderRadius: 60,
		borderLeftColor: '#7c43bd',
		left: 260,
		bottom: 50,
	},
});
