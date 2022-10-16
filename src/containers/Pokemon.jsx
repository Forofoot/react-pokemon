import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loader from "../components/Loader"
import PokemonDetails from "../components/PokemonDetails"
import { Helmet } from "react-helmet"

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
            setLoader(false)
            throw error
        }
    }

    useEffect(() => {
        fetchPokemon()
    }, [])

    return(
        <div className="w-full">
            <Helmet>
                <title>Pokémon | Détails</title>
            </Helmet>
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