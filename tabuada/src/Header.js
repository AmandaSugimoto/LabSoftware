import React from 'react';

class Header extends React.Component {
	constructor(props){
        super(props);
        this.state = {corfavorita: "vermelho"};
        }
	static getDerivedStateFromProps(props, state){
		return {corfavorita: props.favcol};
	}
	render() {
	  return (
        <h1>Minha cor favorita é {this.state.corfavorita}</h1>
	  );
	}
}
export default Header;