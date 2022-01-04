import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Header extends Component {

    render(){

        return (
            <header id="header">
                <div className="center">
                   
                    <div id="logo">
                        <img src="assets/images/react.svg" className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Curso</strong>React
                        </span>
                    </div>
                    
                   
                    <nav id="menu">
                        <ul>
                            {/**Importamos NavLink Para usarlo como etiqueta */}
                            <li>
                                <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formulario" activeClassName="active">Formulario</NavLink>
                            </li>
                            <li>
                                <NavLink to="/peliculas" activeClassName="active">Peliculas</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pruebas" activeClassName="active">Pagina 2</NavLink>
                            </li>                            
                        </ul>
                    </nav>
    
                   
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;