import React from "react";
import ejercicio1 from "/src/assets/images/ej1.png";
import boton from "/src/assets/icons/Icons.png";
import "./ComponenteEjercicio.css";

const ComponenteEjercicio = () => {
  return (
    <div className="ContenedorEjercicio">
      <div className="ContenedorImagen">
        <img className="ejercicio1" src={ejercicio1} alt="" />
      </div>
      <div className="ContenedorTexto">
        <h1 className="TituloEjercicio">Puxada frontal</h1>
        <h2 className="IndicadionEjercicio">3 series x 12 repeticiones</h2>
      </div>
      <button className="boton">
        <img className="boton" src={boton} alt="" />
      </button>
    </div>
  );
};

export default ComponenteEjercicio;
