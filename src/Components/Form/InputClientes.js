import { useState } from "react";
import "./Input.css"
import Alertas from "../Alerts/Alerts"
import Botao from "../Botao/Botao"
export default function Inpt_cliente({ func, ...props }) {


    const [name, setName] = useState('');
    const [preferenceOff, setPreferenceOff] = useState('');
    const [initialTimer, setInitialTimer] = useState('');
    const [finalTimer, setFinalTimer] = useState('');
    const [matricula, setMatricula] = useState('');
    const [depart, setDepart] = useState('');

    const [alert, setAlert] = useState(false)


    function inserir() {

        if ((name && initialTimer && finalTimer && matricula && depart) != '') {

            { func(name, initialTimer + '-' + finalTimer, matricula, depart, converterdata[preferenceOff]) }
            setMatricula('');
            setFinalTimer('');
            setInitialTimer('')
            setName('')
        } else {
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 3000);
        }
    }

    const converterdata = {
        'SEG': 0,
        'TER': 1,
        'QUA': 2,
        'QUI': 3,
        'SEX': 4,
        'SAB': 5,
        'DOM': 6
    }

    return (

        <div className=" w-full h-fit p-3 text-[0.8em] flex flex-col gap-1  items-center border rounded bg-slate-200">
            Nome do funcionario:
            <input value={name}
                className='input'
                onChange={e => setName(e.target.value)}
                placeholder="Nome" type="text"
            />
            Matricula:
            <input value={matricula}
                className='input'
                onChange={e => setMatricula(e.target.value)}
                placeholder="Matricula" type="text"
            />
            Departamento:
            <input value={depart}
                className='input'
                onChange={e => setDepart(e.target.value)}
                placeholder="Departamento" type="text"
            />
            Preferência de folga:
            <select onChange={e => setPreferenceOff(e.target.value)}>
                <option >SEG</option>
                <option >TER</option>
                <option >QUA</option>
                <option >QUI</option>
                <option >SEX</option>
                <option >SAB</option>
                <option >DOM</option>
            </select>

            Iforme o horario de trabalho
            <div className="flex justify-between gap-1">
                <input
                    type="time"
                    value={initialTimer}
                    onChange={e => setInitialTimer(e.target.value)}
                />

                <p>às</p>
                <input
                    type="time"
                    value={finalTimer}
                    onChange={e => setFinalTimer(e.target.value)}
                />
            </div>

            <Botao nome={'Inserir'} clic={() => inserir()} />

            {alert && <Alertas tipo={'Error'} usarIcone={true}>Faltam preencher campos</Alertas>}
        </div>




    )
}