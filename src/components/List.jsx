import { Link } from "react-router-dom";
import Like from "./Like";

export default function Pokemons({pokemonList, fav, setFav}){

    return(
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {pokemonList.map((elt, i)=>(
                <div key={i} className="shadow-lg md:max-w-[300px] w-full hover group p-10">
                    <Link to={`/pokemon/${elt.name}`} className="group-hover:scale-110 ease-in duration-300 mb-5 flex flex-col items-center justify-between h-full">
                        <img className="w-full max-h-[200px]" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${elt.url.split('/').slice(-2, -1)}.svg`} alt={`${elt.name}`}/>
                        {elt.name} 
                    </Link>
                    <Like id={elt.url.split('/').slice(-2, -1)} name={elt.name} url={elt.url} isLiked={fav.some((like) => like.id === elt.url.split('/').slice(-2, -1).toString())} setFav={setFav}/>
                </div>
            ))}
        </div>
    )
}