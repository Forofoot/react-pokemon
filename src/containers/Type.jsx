import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import List from "../components/List"

export default function Type(){ 
    const [types, setTypes] = useState([])
    const [currentFilter, setCurrentFilter] = useState('normal')
    const [typePokemons, setTypePokemons] = useState([])
    const [loader, setLoader] = useState(true)
    const [fav, setFav] = useState(JSON.parse(localStorage.getItem("pokemon")) || [])

    const fetchType = async () =>{
        try{
            const res = await fetch('https://pokeapi.co/api/v2/type', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            const type = await res.json();
            
            setTypes(type.results)
            
        }catch(error){
            console.log(error)
        }
    }

    const fetchFilteredPokemons = async (typeId) =>{
        try{
            if(typePokemons.length){
                const res = await fetch(`https://pokeapi.co/api/v2/type/${typeId}?limit=151&offset=0`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                
                const pokemon = await res.json();

                setTypePokemons(pokemon.pokemon)
                
                if(res.ok){
                    setLoader(false)
                }
            }else{
                const res = await fetch(`https://pokeapi.co/api/v2/type/1/?limit=151&offset=0`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                
                const pokemon = await res.json();
            
                setTypePokemons(pokemon.pokemon)
                
                if(res.ok){
                    setLoader(false)
                }
            }

        }catch(error){
            console.log(error)
        }
    }

    const handleFetchTypedPokemon = (typeId, name) => {
        setLoader(true)
        setCurrentFilter(name)
        fetchFilteredPokemons(typeId)
    }

    useEffect(() => {
        fetchType()
        fetchFilteredPokemons()
    }, []);
    return(
        <div>
            <div className="flex flex-wrap justify-center gap-5 mb-5">
                {types.slice(0, 18).map((elt, i)=>(
                    <p className={`capitalize text-white px-5 py-1 bg-${elt.name} rounded-[20px] cursor-pointer text-center ${elt.name === currentFilter ? 'border-2 border-blue' : '' }`} key={i} onClick={() => handleFetchTypedPokemon(elt.url.split('/').slice(-2,-1).toString(), elt.name)}>{elt.name}</p>
                ))}
            </div>
            
            {loader ? (
                <Loader/>
            ) : (
            <>
                {typePokemons.length ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                    {typePokemons.map((elt, i) => (
                        <List key={i} pokemonList={elt.pokemon} fav={fav} setFav={setFav}/>
                    ))}
                </div>
                ) : (
                    <div>
                        Veuillez filtrer par type
                    </div>
                )}
            </>
            )}
            
        </div>
    )
}