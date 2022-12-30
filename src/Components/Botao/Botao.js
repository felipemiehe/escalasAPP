

export default function Botao({ nome, clic, ...props }) {

    return (
        <button onClick={() => { clic() }}
            className="px-2 py-1 border-2 mt-1 bg-white shadow-sm text-black hover:text-yellow-300 focus:border-low-dark rounded-md hover:bg-sky-500 shadow-cyan-500/50">
            {nome}
        </button>
    )

}