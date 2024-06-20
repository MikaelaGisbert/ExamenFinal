import React from "react";
import ComponenteEjercicio from "./ComponenteEjercicio";
import './Ejercicios.css'

function Ejercicios() {
    return (
        <div className="ContenedorGeneral">
            <h1 className="Ejercicios">Ejercicios</h1>
            <ComponenteEjercicio/>
        </div>
    )
}

export default Ejercicios;
