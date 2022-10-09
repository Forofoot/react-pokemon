import { Link } from "react-router-dom";

export default function Pokemons({pokemonList}){
    return(
        <ul>
            {pokemonList.map((elt, i)=>(
                <li key={i}>
                    <Link to={`/pokemon/${elt.name}`}>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${elt.url.split('/').slice(-2, -1)}.png`}/>
                        <br></br>
                        {elt.name} 
                    </Link>
                </li>
            ))}
        </ul>
    )
}