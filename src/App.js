import "./assets/css/App.css";

//importamos componente que hemos creado

import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SeccionPruebas from "./components/SeccionPruebas";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      

      <div className="center">

        <SeccionPruebas></SeccionPruebas>
        
        <Sidebar></Sidebar>
      <div className="clearfix"></div>  
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
