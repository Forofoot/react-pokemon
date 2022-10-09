import { useEffect, useState } from 'react'
import List from '../components/List'
import { useSearchParams } from 'react-router-dom'
import Loader from '../components/Loader'

export default function Pokemons(){
    const [pokemons, setPokemons] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [pokemonsFiltered, setPokemonsFiltered] = useState([])
    const [loader, setLoader] = useState(true)

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
            
            if(!searchParams.get('search')){
                setPokemonsFiltered(pokemon.results)
                setLoader(false)
            }else{
                setPokemonsFiltered(pokemon.results.filter((pokemon)=> pokemon.name.toLowerCase().includes(searchParams.get('search').toLowerCase())))
                setLoader(false)
            }
            
        }catch(error){
            console.log(error)
        }
    }

    const handleSearch = (e) =>{
        setSearchParams({search: e.target.value})
        setPokemonsFiltered(pokemons.filter((pokemon)=> pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    useEffect(() =>{
        fetchPokemons()
    }, [])
    return(
        <div>
            <form>
                <input value={searchParams.get('search') || ''} onChange={(e) => handleSearch(e)}/>
            </form>
            Liste de pokemons

            Notre liste de pokemon :  <br></br>
            <div>
                {loader ? (
                    <Loader/>
                ) : (
                <>
                    {pokemonsFiltered.length ? (
                        <List pokemonList={pokemonsFiltered}/>
                    ) : (
                        <div>
                            Pas de pokemon
                        </div>
                    )}
                </>
                )}
            </div>
        </div>
    )
}