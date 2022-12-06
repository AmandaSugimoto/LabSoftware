import React from 'react';

class FunContainer extends React.Component {
	constructor(props){
        super(props);
        this.state = {show: this.props.show.true};
    }
    delHeader = () =>{
        this.setState({show: false});
    }
	render() {
        let myheader;
        if(this.state.show) {
            myheader = <Child />;
        };
	  return (
        <div>
            {myheader}
            <button type="button" onClick={this.delHeader}>Apague o Título</button>
        </div>
	  );
	}
}
class Child extends React.Component {
    componentWillUnmount() {
        alert("O componente Header está orestes a ser desmontado.");
    }
    render() {
        return (
            <h1>Olá Mundo!!</h1>
        );
    }
}
export default FunContainer;