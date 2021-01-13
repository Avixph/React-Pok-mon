import React, { useState, useEffect } from "react";
import axios from "axios";
import { CLIENT_URL } from "../Constants";
import Pokémon from "./Pokémon";

function PokéList() {
  const [pokémons, setPokémons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(CLIENT_URL);
        const { results } = response.data;
        console.log(results);
        setPokémons(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <ul className="container collection with-header" style={{ marginTop: 25 }}>
      {pokémons.map((pokémon, index) => {
        const { name, url } = pokémon;
        return <Pokémon name={name} url={url} key={index} />;
      })}
    </ul>
  );
}

export default PokéList;
