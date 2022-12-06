import React from 'react';

class Bo extends React.Component {
	constructor(props){
        super(props);
        this.state = {
            m: this.props.m
        };
    }
	exibir = () => {
		console.log(this.state.m);
	}
	render() {
	  return (
        <button onClick={this.exibir}>Clique</button>
	  );
	}
}

export default Bo;