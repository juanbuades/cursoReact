import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Blog extends Component {
  render() {
    return (
      <div id="blog">
        <Slider
            title="Blog"
            size="slider-small"/>
        <div className="center"></div>
        <div id="content">
          {/**LISTADO DE ARTICULOS QUE VIENEN DE LA API */}
        </div>
        <Sidebar
            crearArticulo="true"/>
      </div>
    );
  }
}
export default Blog;