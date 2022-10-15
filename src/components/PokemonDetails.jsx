import { Link } from "react-router-dom";

export default function PokemonDetails({pokemon}){
    return(
        <>
            <div className="w-full shadow-lg rounded-[20px] mb-14 flex bg-white">
                <div className="w-5/12 bg-blueLight rounded-[20px] md:p-10 gap-6 flex flex-col justify-center items-center">                
                    <span>#{pokemon.species.url.split('/').slice(-2, -1)}</span>
                    <img className="h-full" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.species.url.split('/').slice(-2, -1)}.svg`} alt={`${pokemon.name}`}/>
                    <span>{pokemon.name}</span>
                </div>
                <div className="md:p-10 bg-white w-7/12 rounded-r-[20px] flex flex-col gap-10">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="text-blue font-bold mb-5">Taille</h3>
                            <p className="text-secondaryText">{pokemon.height / 10} m</p>
                        </div>
                        <div>
                            <h3 className="text-blue font-bold mb-5">Poids</h3>
                            <p className="text-secondaryText">{pokemon.weight / 10} kg</p>
                        </div>
                        <div>
                            <h3 className="text-blue font-bold mb-5">Types</h3>
                            <div className="flex gap-5">
                                {pokemon.types.slice(0, 3).map((elt, i) => (
                                    <p key={i} className={`capitalize text-white px-5 py-1 bg-${elt.type.name} rounded-[20px] text-center`}>{elt.type.name}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-blue font-bold mb-5">Capacités</h3>
                        {pokemon.abilities.slice(0, 3).map((elt, i) => (
                            <p key={i} className='inline-block text-secondaryText mr-5 capitalize last-of-type:mr-0'>{elt.ability.name}</p>
                        ))}
                    </div>
                    <div>
                        <h3 className="text-blue font-bold mb-5">Statistiques</h3>
                        {pokemon.stats.slice(0, 3).map((elt, i) => (
                            <p key={i} className='text-secondaryText mb-2.5'><span className="capitalize">{elt.stat.name}</span> : {elt.base_stat}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <Link to='/' className="p-2 px-6 px- border-2 border-blue rounded-md uppercase text-blue font-semibold">Retour</Link>
            </div>
        </>
    )
}