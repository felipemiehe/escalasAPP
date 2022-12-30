import { useState } from "react"
import PropTypes from 'prop-types';

const estilos = {
    Check: {
        icone: 'check_circle_outline',
        bg: "bg-green-600"
    },
    Warning: {
        icone: 'error_outline',
        bg: "bg-yellow-500"
    },
    Error: {
        icone: 'error_outline',
        bg: "bg-red-900 text-white"
    }
}
const estiloPadrao = { icone: '', bg: "bg-low-light text-low-pure" }

export default function Alerts({ usarIcone, tipo, ...props }) {

    return <div className={`${estilos[tipo]?.bg || estiloPadrao.bg} rounded-md text-center font-medium inline-block `}>
        <div className="items-center justify-center flex px-1 p-1 text-xs">
            {usarIcone &&
                <span className="material-icons  mr-quarck">
                    {estilos[tipo]?.icone || estiloPadrao.icone}
                </span>
            }
            <span className="font-bold">
                {props.children}
            </span>
        </div>
    </div>
}

Alerts.propTypes = {
    tipo: PropTypes.oneOf(['Warning', 'Check', 'Error']),
    usarIcone: PropTypes.bool
}
// valore dos icon -> error_outline || check_circle_outline
// valore possiveis componenetes -> Check || Warning || Error