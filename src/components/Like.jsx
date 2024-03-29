import toast from "react-hot-toast"

export default function Like({id, name, url, isLiked, setFav}){

    const handleFavorite = (arg, arg2, url) =>{
        toast.remove()
        const data = {
            'id'   : arg2.toString(),
            'name' : arg,
            'url'  : url
        }
        let stock = JSON.parse(localStorage.getItem('pokemon')) || []

        if(!stock.length){
            stock.push(data)
            localStorage.setItem('pokemon', JSON.stringify(stock))
            setFav(JSON.parse(localStorage.getItem("pokemon")))
            toast.success('Pokémon ajouté en favoris')
        } else {
            let found = stock.find(elt => {
                return elt.id === arg2.toString()
            })
            if(!found){
                stock.push(data)
                localStorage.setItem('pokemon', JSON.stringify(stock))
                setFav(JSON.parse(localStorage.getItem("pokemon")))
                toast.success('Pokémon ajouté en favoris')
            }else{
                let index = stock.map(poke => poke.id).indexOf(arg2.toString())
                stock.splice(index, 1)
                localStorage.setItem('pokemon', JSON.stringify(stock))
                setFav(JSON.parse(localStorage.getItem("pokemon")))
                toast.success('Pokémon enlevé des favoris', {icon: '☑️'})
            }
        }
    }

    return(
        <img className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-5" src={`/tools/${isLiked ? 'Star_active.svg' : 'Star.svg'}`} alt='Favoris' height={21} width={21} onClick={() => handleFavorite(name, id, url)}/>
    )
}