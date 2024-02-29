import { useState, useEffect } from 'react';
import Cards from "../Cards/index";
import Filters from '../Filters/Filters';
import "../SectionCards/SectionCards.css";

export default function SectionCards() {
  const [listaPersonajes, setListaPersonajes] = useState([]);
  const [personajesCompleto, setPersonajesCompleto] = useState([]);
  const [filtrosAplicados, setFiltrosAplicados] = useState([]);
  

  const traerPersonajes = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setListaPersonajes(data.results);
      setPersonajesCompleto(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const filterCharacter = (target) => {
    if (target.checked === true) {
      setFiltrosAplicados([...filtrosAplicados, target.value]);
    } else {
      setListaPersonajes(personajesCompleto)
      let filtrosNuevos = filtrosAplicados.filter((filtro) => filtro !== target.value);
      setFiltrosAplicados(filtrosNuevos);
    }
  };

  useEffect(() => {
    setListaPersonajes(personajesCompleto);
    filtrosAplicados.forEach((data) => {
      if (data === "Dead" || data === "Alive") {
        let dataFiltrada = listaPersonajes.filter((personaje) => personaje.status === data); 
        setListaPersonajes(dataFiltrada);
      } else if (data === "Female" || data === "Male") {
        let dataFiltrada = listaPersonajes.filter((personaje) => personaje.gender === data);
        setListaPersonajes(dataFiltrada);
      } else if (data === "Unknown") {
        let dataFiltrada = listaPersonajes.filter((personaje) => personaje.origin.name === "unknown");
        setListaPersonajes(dataFiltrada);
      }
    });
  }, [filtrosAplicados, listaPersonajes, personajesCompleto]);

  useEffect(() => {
    traerPersonajes();
  }, []);
  
  return (
    <section className="fuenteBlanca">
      <Filters filterCharacter={filterCharacter} />
      <div className='section-cards d-flex align-items-center m-o row justify-content-center w-100 pt-5'>
        {
          listaPersonajes.length !== 0 ?
            listaPersonajes.map((personaje) => {
              return <Cards key={personaje.id} infoPersonaje={personaje} />
            })
            :
            <div className="alert alert-success" role="alert">
              Sorry! There are no characters width all those properties.
            </div>
        }
      </div>
    </section>
  );
}
