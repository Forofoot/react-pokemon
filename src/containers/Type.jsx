import { useEffect, useState } from "react";

export default function Type(){ 
    const [types, setTypes] = useState([])
    const [typePokemons, setTypePokemons] = useState([])
    const [currentFav, setCurrentFav] = ('')
    

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
            const res = await fetch(`https://pokeapi.co/api/v2/type/${typeId}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            const pokemon = await res.json();
            
            setTypePokemons(pokemon.pokemon)
            
        }catch(error){
            console.log(error)
        }
    }

    const handleFetchTypedPokemon = (typeId) => {
        fetchFilteredPokemons(typeId)
        console.log(typePokemons)
    }

    useEffect(() => {
        fetchType()
    }, []);
    return(
        <div>
            {types.map((elt, i)=>(
                <p key={i} onClick={() => handleFetchTypedPokemon(elt.url.split('/').slice(-2,-1).toString())}>{elt.name}</p>
            ))}
            {typePokemons.length ? (
                <div>
                    {typePokemons.map((elt, i) => (
                        <p key={i}>{elt.pokemon.name}</p>
                    ))}
                </div>
            ) : (
                <div>
                    pas test
                </div>
            )}
        </div>
    )
}