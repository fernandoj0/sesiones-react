import "./card.css";

// creacion de componente funcional


// creacion de componente funcional

/* 
const myStyle = {
    virtuales: {}
    reales: {}
} */


const myStyle = {
    virtual: {
        color:"green",
        fontSize: 18, // por default son pixeles
        fontFamily: "Arial"
    } ,
    real: {
        color:"purple",
        fontSize: 20,
        fontFamily: "Georgia"
    }
 };

function CardApp( prop ) {
    /*
    Reglas de JSX( JavaScript XML  :
     - Los componentes deben estar dentro de una etiqueta o componente
       contenedor. NO se pueden poner componentes hermanos.
     - No se renderizan los valores undefined o null
     - No se renderizan valores booleanos
     - No se renderiza NaN o Infinity
     - No se renderiza funciones o objetos

   */
    const myCard = (<div className="card-container">
        <a href= {prop.href} >
        <img src= {prop.src}/>
        <h1>{prop.title}</h1>
        <p style={{color:"green"}} >{prop.description}</p>
        <p style={prop.type === "virtual"? myStyle.virtual : myStyle.real } >{prop.description}</p>

        </a>
    </div>);

    return myCard;
}


// Exportacion por default, es una forma de exportar 
// una unica entidad desde un módulo
export default CardApp;