import { useState } from "react"
import Like from "../components/Like"
import { Link } from "react-router-dom"

export default function Bookmark(){
    const [fav, setFav] = useState(JSON.parse(localStorage.getItem("pokemon")) || [])

    return(
        <>
        {JSON.parse(localStorage.getItem('pokemon')).length ? (
            <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                    {JSON.parse(localStorage.getItem('pokemon')).map((elt,i) => (
                        <div key={i} className="shadow-lg w-full hover:bg-blueLight ease-in duration-150 p-5 bg-white rounded-[20px] relative">
                            <Link to={`/pokemon/${elt.name}`} className="flex max-h-[83px] items-center justify-between h-full">
                                <span>#{elt.url.split('/').slice(-2, -1)}</span>
                                <div className="h-full">
                                    <img className="h-full" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${elt.url.split('/').slice(-2, -1)}.svg`} alt={`${elt.name}`}/>
                                </div>
                                <span className="capitalize font-semibold mr-10">{elt.name}</span>
                            </Link>
                            <Like id={elt.url.split('/').slice(-2, -1)} name={elt.name} url={elt.url} isLiked={fav.some((like) => like.id === elt.url.split('/').slice(-2, -1).toString())} setFav={setFav}/>
                        </div>
                    ))}
                </div>
            </>
        ) : (
            <>
             Aucun pokémon en favoris
            </>
        )}
        </>
    )
}