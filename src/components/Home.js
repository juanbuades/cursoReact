import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <Slider
            title="Pagina de home"
            button="VER BLOG"  
            size="slider-big"/>
        <div className="center"></div>
        <div id="content">
          <h1 className="subheader"> Ultimos articulos</h1>
        </div>
        <Sidebar></Sidebar>
      </div>
    );
  }
}
export default Home;
