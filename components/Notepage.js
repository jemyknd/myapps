import React, { Component } from 'react';
import { TouchableOpacity, StatusBar, StyleSheet, ScrollView, Text, View, TextInput } from 'react-native';

import Bckend from './Bckend';
import Back2 from './Back2';

export default class Notepage extends Component {
	state = {
		notes: [],
		note: '',
		isnxt: false,
		allnote: [],
		prevstate: [],
	};

	render() {
		let eachnote = this.state.notes.map((val, key) => {
			return (
				<Bckend
					keyval={key}
					val={val}
					deleteMethod={() => this.delmeth(val)}
					previewmethod={() => this.nxtpage(val)}
				/>
			);
		});

		let widenote = this.state.notes.map((val, key) => {
			return <Back2 keyval={key} val={val} thekey={val} />;
		});

		if (this.state.isnxt == true) {
			return (
				<View style={styles.main}>
					<StatusBar backgroundColor="#12005e" />
					<View style={styles.header}>
						<Text style={styles.htxt}>My Note</Text>
					</View>
					<View style={styles.body}>
						<ScrollView>{widenote}</ScrollView>
					</View>
					<TouchableOpacity onPress={this.another.bind(this)} style={styles.back}>
						<Text style={styles.forbac}>Back</Text>
					</TouchableOpacity>
				</View>
			);
		}

		return (
			<View style={styles.main}>
				<View style={styles.header}>
					<StatusBar backgroundColor="#12005e" />
					<Text style={styles.htxt}>My Notes</Text>

					<TouchableOpacity
						onPress={this.props.iswhat}
						style={{ alignSelf: 'flex-end', paddingRight: 10, bottom: 30 }}
					>
						<Text
							style={{
								color: 'white',
								alignSelf: 'flex-end',
								bottom: 5,
								fontWeight: 'bold',
								paddingRight: 10,
								fontSize: 15,
								alignSelf: 'auto',
							}}
						>
							Back
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.body}>
					<ScrollView>{eachnote}</ScrollView>
				</View>
				<View style={styles.footer}>
					<TextInput
						style={styles.input}
						placeholder={'Start Typing...'}
						multiline={true}
						onChangeText={(note) => {
							this.setState({ note: note });
						}}
						value={this.state.note}
					/>
				</View>

				<TouchableOpacity style={styles.btn} onPress={this.thenote.bind(this)} value={this.state.notes}>
					<Text style={styles.btntxt}>+</Text>
				</TouchableOpacity>
			</View>
		);
	}

	thenote() {
		if (this.state.note) {
			this.state.note.length > 20
				? this.state.notes.push({ note: this.state.note.substring(0, 20) + '...' })
				: (knd = this.state.notes.push({ note: this.state.note }));

			this.state.prevstate.push({ note: this.state.note });
		}

		this.setState({ note: '' });

		this.setState({ notes: this.state.notes });
	}

	delmeth(val) {
		let fromarry = this.state.notes;
		fromarry.splice(val, 1);
		this.setState({ notes: fromarry });
	}
	nxtpage(val) {
		this.setState({ isnxt: true, note: val, notes: [val] });
	}

	another() {
		this.setState({ isnxt: false, notes: this.state.prevstate });
	}
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
	},
	header: {
		justifyContent: 'center',
		backgroundColor: '#4a148c',
	},
	htxt: {
		fontSize: 30,
		fontWeight: 'bold',
		paddingLeft: 20,
		paddingTop: 15,
		color: 'white',
	},
	body: {
		flex: 9,
	},
	footer: {
		backgroundColor: '#e1bee7',
		fontSize: 30,
		color: 'white',
		justifyContent: 'center',
	},
	btn: {
		position: 'absolute',
		width: 60,
		height: 60,
		right: 30,
		borderRadius: 30,
		backgroundColor: '#7c43bd',
		bottom: 14,
	},
	btntxt: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 45,
	},
	delete: {
		alignSelf: 'flex-end',
		width: 60,
		height: 30,
		right: 30,
		borderRadius: 10,
		backgroundColor: '#7c43bd',
	},
	btn2: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 15,
		top: 5,
	},
	sts: {
		color: 'purple',
	},
	back: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#7b1fa2',
		width: 60,
		height: 30,
		borderRadius: 60,
		borderLeftColor: '#7b1fa2',
		left: 260,
		bottom: 65,
	},
	forbac: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18,
	},
});
