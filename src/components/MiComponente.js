//Importamos react para generar este tipo de compoenentes
import React from "react";

//Estructura basica que tiene que etenr la clase de tipo React.Component
class MiComponente extends React.Component{

    render(){
        let receta = {
            nombre :'pizza',
            ingredientes: ['tomate', 'queso', 'jamon'],
            calorias: 400
        };
        //siempre devuelve algo
        return(
            //solo se devuelve una etiqueta que dentro puede tener más etiquetas
            //Podemos poner la etiqueta React.Fragment o basta con un <div>        
            //Podemos mostrar elementos de un array haciendo un callback    
            <React.Fragment>
                <h1>Hola, soy el compoenente llamado MiComponente</h1>
                <h2>Segunda linea que se imprime</h2>
                <h2>Imprimir variable {receta.nombre} 
                con los ingredientes {receta.ingredientes[0]}</h2>
                <ol>
                    {receta.ingredientes.map((ingrediente, i) => {
                        return (
                            <li key={i}>
                                {ingrediente}
                            </li>
                        )
                    })}
                </ol>
            </React.Fragment>
        );
    }


}
//Exportamos para poder acceder desde app.js
export default MiComponente;