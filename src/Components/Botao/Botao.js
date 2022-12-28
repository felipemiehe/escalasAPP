

export default function Botao({nome,cor,clic,title,...props}){

    const jota = 'miqueias muito broxa'

    return(
        <button onClick={()=> { clic(jota) }} className= "p-1 border-2 bg-white text-black hover:text-yellow-300 focus:border-low-dark rounded-md hover:bg-sky-500 shadow-cyan-500/50">
            {nome}
        </button>
    )

}