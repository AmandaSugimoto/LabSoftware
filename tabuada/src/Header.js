import React from 'react';

class Header extends React.Component {
	constructor(props){
        super(props);
        this.state = {corfavorita: this.props.favcol};
        }

	componentDidMount(){
		setTimeout(()=>{
			this.setState({corfavorita: "Vermelho"})
		},2000);
	}
	render() {
	  return (
        <h1>Minha cor favorita é {this.state.corfavorita}</h1>
	  );
	}
}
export default Header;