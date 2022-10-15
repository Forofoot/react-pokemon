import { Link } from "react-router-dom";
import Like from "./Like";

export default function Pokemons({pokemonList, fav, setFav}){

    return(
            <>
                {pokemonList.url.split('/').slice(-2,-1).toString() <= 151 &&
                    <div className="shadow-lg w-full hover:bg-blueLight ease-in duration-150 p-5 bg-white rounded-[20px] relative">
                        <Link to={`/pokemon/${pokemonList.name}`} className="flex max-h-[83px] items-center justify-between h-full">
                            <span>#{pokemonList.url.split('/').slice(-2, -1)}</span>
                            <div className="h-full">
                                <img className="h-full" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonList.url.split('/').slice(-2, -1)}.svg`} alt={`${pokemonList.name}`}/>
                            </div>
                            <span className="capitalize font-semibold mr-10">{pokemonList.name}</span>
                        </Link>
                        <Like id={pokemonList.url.split('/').slice(-2, -1)} name={pokemonList.name} url={pokemonList.url} isLiked={fav.some((like) => like.id === pokemonList.url.split('/').slice(-2, -1).toString())} setFav={setFav}/>
                    </div>
                }
            </>
            
    )
}