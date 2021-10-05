import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

import PokemonThumb from "../components/PokemonThub";

const useStyles = makeStyles({
  pageContainer: {
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center',
    'min-height': '100vh',
    'padding': '3rem 0.5rem'
  },
  pokemonContainer: {
  
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center',
  },
  allContainer: {
    'display': 'flex',
    'flex-wrap': 'wrap',
   'align-items': 'center',
    'justify-content': 'center',
  },
  //   buttonPrev: {
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //   },
  //   buttonNext: {
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "center",
  //   },
  loadMore: {
    'back-ground': '#f5f5f5 linear-gradient(#f5f5f5,#f1f1f1) repeat-x',
    'border-radius': '2px',
    'border': '1px solid #c6c6c6',
    'color': '#444',
    'padding': '0.5rem 1.5rem',
    'min-width': '50%',
    'margin-top': '1rem',
  },
  input:{
      'box-sizing': 'border-box',
      'font-size': '1rem',
      'padding': '1rem',
      'display': 'block',
      'margin': '2rem auto'
    
  }
});
function ListaPokemonow() {
const classes = useStyles()

  const [allPokemon, setAllPokemon] = useState([])
  const [loadMore, setLoadMore] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=150`
  );

  const getAllPokemon = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()
    
    setLoadMore(data.next)
   
    console.log(data)
    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllPokemon((currentlist) => [...currentlist, data])
        await allPokemon.sort((a,b)=> a.id - b.id)

        
      });
    }
    createPokemonObject(data.results)
    await console.log(allPokemon)
    
  }

  useEffect(() => {
    getAllPokemon()
  },[])

  
  return (<div>
    <input className={classes.input} type='text' placeholder='Wyszukaj Pokemona'/>
    <div className={classes.pageContainer}>
      
      <div className={classes.pokemonContainer}>
        <div className={classes.allContainer}>
        {allPokemon.filter((item,index) => index <15).map( (pokemonStats, index) => 
            <PokemonThumb
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
              height={pokemonStats.height}
              weight={pokemonStats.weight}
              ability={pokemonStats.abilities[0].ability.name}
              baseExperience={pokemonStats.base_experience}
            />)}
        </div>
        <button className={classes.loadMore} onClick={()=> getAllPokemon()}>Load More</button>
        <button className={classes.buttonPrev}>Poprzednia strona</button>
        <button className={classes.buttonNext}>Następna strona</button>
      </div>
    </div>
    </div>
  );
}
export default ListaPokemonow
