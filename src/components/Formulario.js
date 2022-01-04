import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Formulario extends Component {
  //creamos variables para almacenar los imputs
  //tienen que llamarse igual que las ref que ponemos en el html
  nombreRef = React.createRef();
  apellidosRef = React.createRef();
  bioRef = React.createRef();
  generoHombreRef = React.createRef();
  generoMujerRef = React.createRef();
  generoOtroRef = React.createRef();

  state = {
    user: {},
  };

  //funcion que se ejecuta cuando enviamos el formulario
  recibirFormulario = (e) => {
    e.preventDefault();

    //accedemos al valor actual de la referencia

    let genero = "hombre";

    if (this.generoHombreRef.current.checked) {
      genero = this.generoHombreRef.current.value;
    } else if (this.generoMujerRef.current.checked) {
      genero = this.generoMujerRef.current.value;
    } else {
      genero = this.generoOtroRef.current.checked;
    }

    let user = {
      nombre: this.nombreRef.current.value,
      apellidos: this.apellidosRef.current.value,
      bio: this.bioRef.current.value,
      genero: genero,
    };

    this.setState({
      user: user
    });

    alert("Formulario enviado!!!");
    console.log(user);
  };
  recibirFormulario = (e) => {
    e.preventDefault();

    //accedemos al valor actual de la referencia

    let genero = "hombre";

    if (this.generoHombreRef.current.checked) {
      genero = this.generoHombreRef.current.value;
    } else if (this.generoMujerRef.current.checked) {
      genero = this.generoMujerRef.current.value;
    } else {
      genero = this.generoOtroRef.current.checked;
    }

    let user = {
      nombre: this.nombreRef.current.value,
      apellidos: this.apellidosRef.current.value,
      bio: this.bioRef.current.value,
      genero: genero,
    };

    this.setState({
      user: user
    });
    console.log(user);
  };

  enviarFormulario = (e) => {
    e.preventDefault();
    alert("Formulario enviado!!")
  };
  render() {
    return (
      <div id="formulario">
        <Slider title="Formulario" size="slider-small" />
        <div className="center"></div>
        <div id="content">
          <h1 className="subheader">Formulario</h1>
          {this.state.user.nombre && (
            <div is="user-data">
              <p>
                Nombre: <strong>{this.state.user.nombre}</strong>
              </p>
              <p>
                Apellidos: <strong>{this.state.user.apellidos}</strong>
              </p>
              <p>
                Bio: <strong>{this.state.user.bio}</strong>
              </p>
              <p>
                Genero: <strong>{this.state.user.genero}</strong>
              </p>
            </div>
          )}

          <form className="mid-form" onSubmit={this.enviarFormulario} onChange={this.recibirFormulario}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="nombre" ref={this.nombreRef} />{" "}
              {/** ref para asociar el input a la variable */}
            </div>

            <div className="form-group">
              <label htmlFor="apellidos">Apellidos</label>
              <input type="text" name="apellidos" ref={this.apellidosRef} />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Biografia</label>
              <textarea name="bio" ref={this.bioRef}></textarea>
            </div>

            <div className="form-group radibuttons">
              <input
                type="radio"
                name="genero"
                value="hombre"
                ref={this.generoHombreRef}
              />{" "}
              Hombre
              <input
                type="radio"
                name="genero"
                value="mujer"
                ref={this.generoMujerRef}
              />{" "}
              Mujer
              <input
                type="radio"
                name="genero"
                value="otro"
                ref={this.generoOtroRef}
              />{" "}
              Otro
            </div>

            <div className="clearfix"></div>

            <input type="submit" value="Enviar" className="btn btn-success" />
          </form>
        </div>
        <Sidebar crearArticulo="false" />
      </div>
    );
  }
}
export default Formulario;
