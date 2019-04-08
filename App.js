import React, { Component } from 'react';

import Startpage from './components/Startpage';
import Forquote from './components/Forquote';

export default class App extends Component {
	state = {
		seequote: false,
	};
	render() {
		if (this.state.seequote == true) {
			return <Forquote />;
		}
		return (
			<Startpage
				wannaseequotes={() => {
					this.soyoudo();
				}}
			/>
		);
	}

	soyoudo() {
		this.setState({ seequote: true });
	}
}
