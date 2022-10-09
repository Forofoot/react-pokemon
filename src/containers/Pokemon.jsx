import slugify from "slugify"
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Loader from "../components/Loader"
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
        <div>
            {loader ? (
                <Loader/>
            ) : (
            <>
                {pokemon.name ? (
                    <div>
                        {pokemon.name}
                    </div>
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