import { useEffect } from "react";

export default function Like({id,name,isLiked, setFav}){

    useEffect(() => {
    }, []);

    const handleFavorite = (arg, arg2) =>{

        const data = {
            'id'   : arg2.toString(),
            'name' : arg
        }
        let stock = JSON.parse(localStorage.getItem('pokemon')) || []

        if(!stock.length){
            stock.push(data)
            localStorage.setItem('pokemon', JSON.stringify(stock))
            setFav(JSON.parse(localStorage.getItem("pokemon")))
        } else {
            let found = stock.find(elt => {
                return elt.id === arg2.toString()
            })
            if(!found){
                stock.push(data)
                localStorage.setItem('pokemon', JSON.stringify(stock))
                setFav(JSON.parse(localStorage.getItem("pokemon")))
            }else{
                let index = stock.map(poke => poke.id).indexOf(arg2.toString())
                stock.splice(index, 1)
                localStorage.setItem('pokemon', JSON.stringify(stock))
                setFav(JSON.parse(localStorage.getItem("pokemon")))
            }
        }
        
        console.log(stock)
        console.log(JSON.parse(localStorage.getItem('pokemon')))
    }

    return(
        <p className="cursor-pointer" onClick={() => handleFavorite(name, id)}>{isLiked ? 'Retirer des favoris' : 'Ajouter en favoris'}</p>
    )
}