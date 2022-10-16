import { Link } from "react-router-dom";

export default function Page404(){
    return(
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="mt-4 text-center mb-8">
                    <span className="text-blue font-bubble text-8xl block"><span>4  0  4</span></span>
                    <span className="text-gray text-xl">Désolé nous n'avons pas pu trouver ce que vous cherchiez</span>
                </div>
                <Link to='/' className="text-white font-mono text-xl bg-blue p-3 rounded-md hover:shadow-md">Retourner à l'accueil</Link>
            </div>
        </>
    )
}