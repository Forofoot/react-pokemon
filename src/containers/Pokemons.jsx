import { useEffect, useState } from 'react'
import List from '../components/List'
import { useSearchParams } from 'react-router-dom'

export default function Pokemons(){
    const [pokemons, setPokemons] = useState([])
    const [filter, setFilter] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()


    const fetchPokemons = async () =>{
        try{
            //POST form values
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            const pokemon = await res.json();

            setPokemons(pokemon.results)

            console.log(pokemon.results)

        }catch(error){
            console.log(error)
        }
    }

    const handleSearch = (e) =>{
        e.preventDefault()
        setFilter(e.target.value)
        setSearchParams({search: e.target.value})
    }

    useEffect(() =>{
        fetchPokemons()        
    }, [])
    return(
        <div>
            <form>
                <input value={filter} onChange={(e) => handleSearch(e)}/>
            </form>
            Liste de pokemons

            Notre liste de pokemon :  <br></br>
            {pokemons.length ? (
                <List pokemonList={pokemons}/>
            ) : (
                <div>
                    Pas de pokemon
                </div>
            )}
            
        </div>
    )
}