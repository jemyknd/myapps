import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class Back2 extends Component {
	render() {
		return (
			<View key={this.props.keyval} style={styles.forv}>
				<Text style={styles.forrel} value={this.props.textmthd} key={this.props.thekey}>
					{this.props.val.note}
				</Text>
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
	forrel: {
		padding: 20,
		borderLeftWidth: 10,
		borderLeftColor: '#7b1fa2',
	},
});
