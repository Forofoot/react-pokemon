import { useEffect, useState } from 'react'
import List from '../components/List'
import { useSearchParams } from 'react-router-dom'
import Loader from '../components/Loader'

export default function Pokemons(){
    const [pokemons, setPokemons] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [pokemonsFiltered, setPokemonsFiltered] = useState([])
    const [loader, setLoader] = useState(true)
    const [fav, setFav] = useState(JSON.parse(localStorage.getItem("pokemon")) || [])

    const fetchPokemons = async () =>{
        try{
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
        <div className='w-full'>
            <form className='text-center mb-5 w-full'>
                <input className='w-full shadow-lg border-0 rounded-[50px] p-5 pl-14' placeholder='Chercher un pokemon' value={searchParams.get('search') || ''} onChange={(e) => handleSearch(e)}/>
            </form>
            <div className='flex justify-center'>
                {loader ? (
                    <Loader/>
                ) : (
                <>
                    {pokemonsFiltered.length ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                            {pokemonsFiltered.map((elt, i) => (
                                <List key={i} pokemonList={elt} fav={fav} setFav={setFav}/>
                            ))}
                        </div>
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