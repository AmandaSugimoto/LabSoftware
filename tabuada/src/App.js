import React from 'react';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';
import Cores from './Cores';
import Bo from './Bo';
import Header from './Header';
let n = prompt("Digite um número", "5");

function App() {
  return (
    <div>
      <
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

    </div>
  );
}

export default App;
