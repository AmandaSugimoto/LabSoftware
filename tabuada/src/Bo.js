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
		<div>
			<h3>Abra o console e clique no botão</h3>
        	<button onClick={this.exibir}>Clique</button>
		</div>
	  );
	}
}

export default Bo;