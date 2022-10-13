import { useState } from "react"
import Like from "../components/Like"

export default function Bookmark(){
    const [fav, setFav] = useState(JSON.parse(localStorage.getItem("pokemon")) || [])

    return(
        <>
        {JSON.parse(localStorage.getItem('pokemon')).length ? (
            <>
                {JSON.parse(localStorage.getItem('pokemon')).map((elt,i) => (
                    <div key={i}>
                        <img className="w-full max-h-[200px]" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${elt.id}.svg`} alt={`${elt.name}`}/>
                        {elt.name}
                        <Like id={elt.url.split('/').slice(-2, -1)} name={elt.name} url={elt.url} isLiked={fav.some((like) => like.id === elt.url.split('/').slice(-2, -1).toString())} setFav={setFav}/>
                    </div>
                ))}
            </>
        ) : (
            <>
             Aucun pokémon en favoris
            </>
        )}
        </>
    )
}