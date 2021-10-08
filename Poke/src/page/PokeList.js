import axios from "axios"
import { useEffect, useState } from "react"

function PokeList(){
    const [pokemon, setPokemon]= useState(null)
    const BASE_URL = (`https://pokeapi.co/api/v2/pokemon?limit=100&offset=200

    `)

    useEffect((pokemon)=>{
        axios.get(`${BASE_URL}`).then((response) =>{
            console.log('dane',response)
            setPokemon(response.data.results)
        })
    },[])
    if(!pokemon){
        return(
            <div>Brak banych</div>
        )
    }
//     axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=15`)
//     .then(response => { setPokemon(response.data.results) 
//         console.log(response.data.results)   
// })
// },[page])


}
export default PokeList