import React, { Component } from "react";

import MiComponente from "./MiComponente";
import Peliculas from "./Peliculas";

class SeccionPruebas extends Component {
  contador = 0;

  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      /*aqui podemos añadir todos los elementos de la pagina que vayan
      a cambiar de estado*/
    };
  }
  /*Otra manera de crear el state y que funciona igual
  state = {
    contador: 0,
  };*/

  sumar() {
    //this.contador = this.contador+1; Esto no funciona porque no se  accede a traves de state
    this.setState({
        /*Hay que llamar al metodo setState*/
      contador: this.state.contador + 1,
    });
  }
  restar() {
    //this.contador = this.contador-1;
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  render() {
    return (
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>

        <p>Primer proyecto en REACT</p>

        <h2 class="subheader">Pruebas con componentes</h2>

        <section className="componentes">
          <MiComponente></MiComponente>
          <Peliculas></Peliculas>
        </section>

        <h2 class="subheader">Pruebas de estados</h2>
        <p>Contador: {this.state.contador}</p>
        <p>
          <input
            type="button"
            value="Sumar"
            onClick={this.sumar.bind(this)}
          ></input>
          <input
            type="button"
            value="Restar"
            onClick={this.restar.bind(this)}
          ></input>
        </p>
      </section>
    );
  }
}

export default SeccionPruebas;
