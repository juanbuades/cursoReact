import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import SeccionPruebas from "./components/SeccionPruebas";
import Error from "./components/Error";

import Header from "./components/Header";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Formulario from "./components/Formulario";

class Router extends Component {
  render() {
    return (
      /** ROUTES CON LA VERSION DE react-router-dom@5.3.0 */
      <BrowserRouter>
        <Header></Header>

        {/* configurar rutas y paginas*/}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/formulario" component={Formulario} />
          <Route exact path="/peliculas" component={Peliculas} />

          <Route exact path="/segunda-ruta" component={MiComponente} />
          <Route component={Error} />
          <Route
            exact
            path="/ejemplo-render"
            render={() => (
              <React.Fragment>
                <h1>
                  Ejemplo de pasar un render por routa en lugar de un componente
                </h1>
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/pruebas/:nombre"
            render={(props) => {
              var nombre = props.match.params.nombre;
              var apellidos = props.match.params.apellidos;
              return (
                <React.Fragment>
                  <div id="content">
                    <h1 class="subheader">Página de pruebas</h1>
                    <h2>
                      {nombre}
                      {apellidos}
                    </h2>
                  </div>
                </React.Fragment>
              );
            }}
          />
        </Switch>

        <div className="clearfix"></div>
        <Footer></Footer>
      </BrowserRouter>

      /**  ¡¡VERSIONES NUEVAS DE react-router-dom!!
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Peliculas />}></Route>
          <Route exact path="/ruta-prueba" element={<SeccionPruebas />}></Route>
          <Route exact path="/segunda-ruta" element={<MiComponente />}></Route>
          <Route exact path="/ejemplo-render" render={() =>
                <h1>
                  Ejemplo de pasar un render por routa en lugar de un componente
                </h1>}

          ></Route>

          <Route path="*" element={<Error />} />
        </Routes>

      </BrowserRouter>*/
    );
  }
}
export default Router;
