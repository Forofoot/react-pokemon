import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Type(){ 
    const [types, setTypes] = useState([])
    const [typePokemons, setTypePokemons] = useState([])
    const [loader, setLoader] = useState(true)

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
            

            {/*if(!searchParams.get('search')){
                setPokemonsFiltered(pokemon.results)
                setLoader(false)
            }else{
                setPokemonsFiltered(pokemon.results.filter((pokemon)=> pokemon.name.toLowerCase().includes(searchParams.get('search').toLowerCase())))
                setLoader(false)
            }*/}
            
        }catch(error){
            console.log(error)
        }
    }

    const fetchFilteredPokemons = async (typeId) =>{
        try{
            if(typePokemons.length){
                const res = await fetch(`https://pokeapi.co/api/v2/type/${typeId}`, {
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
                const res = await fetch(`https://pokeapi.co/api/v2/type/1/`, {
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

    const handleFetchTypedPokemon = (typeId) => {
        setLoader(true)
        fetchFilteredPokemons(typeId)
    }

    useEffect(() => {
        fetchType()
        fetchFilteredPokemons()
    }, []);
    return(
        <div>
            <div className="flex flex-wrap justify-center gap-5 mb-5">
                {types.map((elt, i)=>(
                    <p className="cursor-pointer w-1/12 bg-slate-300 p-2 text-center rounded-3xl" key={i} onClick={() => handleFetchTypedPokemon(elt.url.split('/').slice(-2,-1).toString())}>{elt.name}</p>
                ))}
            </div>
            
            {loader ? (
                <Loader/>
            ) : (
            <>
                {typePokemons.length ? (
                    <div>
                        {typePokemons.map((elt, i) => (
                            <p key={i}>{elt.pokemon.name}</p>
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