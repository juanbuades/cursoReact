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

  sumar = (e) => {
    //this.contador = this.contador+1; Esto no funciona porque no se accede a traves de state
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
        <h2 className="subheader">Últimos artículos</h2>

        <p>Primer proyecto en REACT</p>

        <h2 className="subheader">Pruebas con componentes</h2>

        <section className="componentes">
          <MiComponente></MiComponente>
          <MiComponente></MiComponente>
          
        </section>

        <h2 className="subheader">Pruebas de estados</h2>
        <p>Contador: {this.state.contador}</p>
        <p>
          <input
            type="button"
            value="Sumar"
            onClick={this.sumar}
          ></input>
          <input
            type="button"
            value="Restar"
            onClick={this.restar.bind(this)}
            /* se añade bind.(this) por la manera en 
            la que hemos creado el metodo restar*/ 
          ></input>
        </p>
        <h2 className="subheader">Prop (Propiedades)</h2>
        <p>{this.props.textoProps}</p>

      </section>
    );
  }
}

export default SeccionPruebas;
