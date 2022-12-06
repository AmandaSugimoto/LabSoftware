import React from 'react';

class Cores extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nome_cor: this.props.nome_cor,
            valor_cor: this.props.valor_cor
        };
    }
    changeColor = () => {
        if(this.state.valor_cor === "#FF0084"){
            this.setState({nome_cor:"Azul"});
            this.setState({valor_cor:"#005B8F"});
        }
        else{
            this.setState({nome_cor:"Rosa"});
            this.setState({valor_cor:"#FF0084"});
        }
    }
    render() {
        return (
            <div>
                <h1 style={{color:this.state.valor_cor}}>Cor: {this.state.nome_cor}</h1>
                <button type="button" onClick={this.changeColor}>Mude a cor</button>
            </div>
        )
    }
}

export default Cores;