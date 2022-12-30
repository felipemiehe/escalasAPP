import './Botao.css'

export default function Botao({ nome, clic, ...props }) {

    return (
        <button onClick={() => { clic() }}
            className="px-2 py-1 shadow-sm botoes">
            {nome}
        </button>
    )

}