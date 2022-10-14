import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loader from "../components/Loader"
import PokemonDetails from "../components/PokemonDetails"
export default function Pokemon(){
    const [pokemon, setPokemon] = useState([])
    const { slug } = useParams()
    const [loader, setLoader] = useState(true)

    const fetchPokemon = async () =>{
        try{
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const poke = await res.json();
            setPokemon(poke)
            if(pokemon){
                setLoader(false)
            }
        }catch(error){
            console.log(error)
            setLoader(false)
        }
    }

    useEffect(() => {
        fetchPokemon()
    }, [])

    return(
        <div className="w-full">
            <img src='/banner/pokemon_banner.png' alt='Bannière logo pokemon' className="h-[87px] mb-20 mx-auto"/>
            {loader ? (
                <Loader/>
            ) : (
            <>
                {pokemon.name ? (
                    <PokemonDetails pokemon={pokemon} />
                ) : (
                    <div>
                        Pas de pokemon
                        <Link to='/'>
                            Retour à l'accueil
                        </Link>
                    </div>
                )}
            </>
            )}
        </div>
    )
}