import { Link } from "react-router-dom";

export default function PokemonDetails({pokemon}){
    return(
        <>
            <div className="w-full shadow-lg rounded-[20px] mb-14">
                <div className="w-5/12 bg-blueLight rounded-[20px] md:p-10 gap-6 flex flex-col justify-center items-center">                
                    <span>#{pokemon.species.url.split('/').slice(-2, -1)}</span>
                    <img className="h-full" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.species.url.split('/').slice(-2, -1)}.svg`} alt={`${pokemon.name}`}/>
                    <span>{pokemon.name}</span>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <Link to='/' className="p-2 px-6 px- border-2 border-blue rounded-md uppercase text-blue font-semibold">Retour</Link>
            </div>
        </>
    )
}