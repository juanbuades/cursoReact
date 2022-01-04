import React, { Component } from "react";
import Pelicula from "./Pelicula";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Peliculas extends Component {
  state = {
    peliculas: [
      {
        titulo: "Batman vs Superman",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_L9LEOyP3fBrNOAT2zHD-cSK5LrHmTfIDWg&usqp=CAU",
      },
      {
        titulo: "Gran torino",
        image:
          "https://www.artmajeur.com/medias/hd/f/a/fasquelolivier/artwork/11789156_gran-torino.jpg",
      },
      {
        titulo: "Looper",
        image:
          "https://www.bolsamania.com/cine/wp-content/uploads/2020/06/93.jpg",
      },
    ],
    nombre: "Juan Buades",
    favorita: {},
  };

  /** cambiamos el estado de alguna propiedad de las peliculas del array */
  cambiarTitulo = () => {
    var { peliculas } = this.state;

    peliculas[0].titulo = "Batman begins";

    this.setState({
      peliculas: peliculas,
    });
  };
  favorita = (pelicula) => {
    console.log("FAVORITA MARCADA");
    console.log(pelicula);
    this.setState({
      favorita: pelicula,
    });
  };

  render() {
    return (
      <>
        <Slider title="Peliculas" size="slider-small" />
        <div className="center">
          <div id="content" className="peliculas">
            <h2 className="subheader">Listado de películas</h2>
            <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>
            <div>
              <button onClick={this.cambiarTitulo}>
                Cambiar titulo de pelicula
              </button>
            </div>

            {/**Así se crea una condicion en JSX. Si existe titulo de la pelicula favorita
             * se imprime el resto del codigo */}
            {this.state.favorita.titulo ? (
              <p>
                <strong>La película favorita es: </strong>
                <span>{this.state.favorita.titulo}</span>
              </p>
            ) : (
              /**else */ <p> No hay pelicula favorita</p>
            )}

            {/**Crear componente pelicula */}
            <div>
              {this.state.peliculas.map((pelicula, i) => {
                /**Devuelve el componente Pelicula con las propiedades key y pelicula (como objeto) */
                return (
                  <Pelicula
                    key={i}
                    pelicula={pelicula}
                    marcarFavorita={this.favorita}
                  />
                );
              })}
            </div>
          </div>
          <Sidebar
            crearArticulo="false"/>
        </div>
      </>
    );
  }
}

export default Peliculas;
