import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, StatusBar, Text, View } from 'react-native';

import Notepage from './Notepage';

export default class Startpage extends Component {
	state = {
		next: false,
	};
	
	nxtpg = () => {
		this.setState({ next: true });
	};

	render() {
		if (this.state.next == false) {
			return (
				<View>
					<View style={mydesign.main}>
						<StatusBar backgroundColor="#12005e" />
						<Text style={mydesign.headerTxt}>My Notes</Text>
					</View>
					<View>
						<Text style={mydesign.first}>Nothing to display</Text>
					</View>

					<TouchableOpacity style={mydesign.firstbtn} onPress={this.nxtpg.bind(this)}>
						<Text
							style={{
								alignSelf: 'center',
								top: 10,
								color: 'white',
								fontSize: 18,
							}}
						>
							Add Note
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={mydesign.secondbtn} onPress={this.props.wannaseequotes}>
						<Text
							style={{
								alignSelf: 'center',
								top: 10,
								color: 'white',
								fontSize: 18,
							}}
						>
							See Quotes
						</Text>
					</TouchableOpacity>
				</View>
			);
		}

		return <Notepage iswhat={() => this.what()} />;
	}

	what() {
		this.setState({ next: false });
	}
}

const mydesign = StyleSheet.create({
	main: {
		flex: 0,
		borderLeftWidth: 3,
		borderLeftColor: '#4a148c',
	},
	headerTxt: {
		fontSize: 40,
		color: 'white',
		backgroundColor: '#4a148c',
		fontWeight: 'bold',
		borderBottomWidth: 2,
		borderBottomColor: 'transparent',
		paddingTop: 10,
	},
	btn: {
		position: 'absolute',
		bottom: 40,
		right: 50,
		width: 60,
		height: 60,
		backgroundColor: 'purple',
		borderRadius: 30,
	},
	btntxt: {
		alignSelf: 'center',
		top: 2,
		color: 'white',
		fontSize: 45,
	},
	inputbox: {
		padding: 10,
		borderWidth: 1,
		borderColor: '#f0f',
		height: 50,
		borderBottomColor: 'purple',
		borderBottomWidth: 3,
		borderLeftColor: 'green',
		borderLeftWidth: 3,
		borderWidth: 1,
		fontSize: 15,
	},
	notetxt: {
		padding: 10,
		borderWidth: 1,
		borderColor: '#f0f',
		height: 40,
		width: 248,
		borderBottomColor: 'purple',
		borderBottomWidth: 3,
		borderLeftColor: 'green',
		borderLeftWidth: 3,
		borderWidth: 1,
		fontSize: 15,
		backgroundColor: 'transparent',
		borderRadius: 10,
	},
	first: {
		fontSize: 40,
		top: 240,
		alignSelf: 'center',
	},
	firstbtn: {
		top: 420,
		left: 270,
		backgroundColor: '#7c43bd',
		borderRadius: 16,
		width: 90,
		height: 40,
	},
	secondbtn: {
		top: 380,
		left: 4,
		backgroundColor: '#7c43bd',
		borderRadius: 16,
		width: 90,
		height: 40,
	},
});
