import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, StatusBar, Text, View } from 'react-native';

import * as Data from '../Myquote';

export default class Forquote extends Component {
	state = {
		index: 0,
		mycolor: ['#ab47bc', '#ad1457', '#e35183', '#880e4f', '#4a148c', '#7c43bd'],
		colorindex: 0,
	};

	render() {
		return (
			<View style={{ backgroundColor: this.state.mycolor[this.state.colorindex], flex: 1 }}>
				<StatusBar backgroundColor="#12005e" />

				<View style={{ alignItems: 'center', top: 200 }}>
					<Text style={{ fontSize: 20 }}>{Data.quotes[this.state.index].quote}</Text>
					<Text style={{ fontWeight: 'bold' }}>{Data.quotes[this.state.index].author}</Text>

					<View style={{ paddingTop: 10 }}>
						<TouchableOpacity
							style={mydesign.bton}
							onPress={() => {
								if (this.state.colorindex <= 4) {
									this.setState({
										index: this.state.index + 1,
										colorindex: this.state.colorindex + 1,
									});
								}
								if (this.state.colorindex >= 5) {
									this.setState({
										colorindex: 0,
										index: this.state.index + 1,
									});
								}
							}}
						>
							<Text style={mydesign.btontxt}>Next</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

const mydesign = StyleSheet.create({
	bton: {
		backgroundColor: '#7c43bd',
		borderRadius: 16,
		borderRadius: 16,
		width: 90,
		height: 40,
	},
	btontxt: {
		alignSelf: 'center',
		bottom: 5,
		color: 'white',
		fontSize: 40,
	},
});
