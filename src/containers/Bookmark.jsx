import { useState } from "react"

export default function Bookmark(){
    const [favList, setFavList] = useState(JSON.parse(localStorage.getItem('pokemon')))

    return(
        <div>
            {favList.map((elt,i) => (
                <div key={i}>
                    {elt.name}
                </div>
            ))}
        </div>
    )
}