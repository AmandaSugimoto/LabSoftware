import React from 'react';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';
import Cores from './Cores';
import Bo from './Bo';
import Header from './Header';
import FunContainer from './FunContainer';
import Contador from './Contador';
let n = prompt("Digite um número", "5");

function App() {
  return (
    <div>
      <FunContainer show = "Titulo"/>
      <Header favcol="Amarelo" />
      <Bo m = "Ola Mundo"/>
      <Cores nome_cor = "Rosa"
             valor_cor = "#FF0084"
            />
      <Titulo titulo = "Fatec"
              texto = "Faculdade de Tecnologia de Presidente Prudente"
              link = "https://www.fatecpp.edu.br"
              />
      <Titulo2/>
      <Tabuada numero = {n}/>
      <Contador seg = {0}/>

    </div>
  );
}

export default App;
