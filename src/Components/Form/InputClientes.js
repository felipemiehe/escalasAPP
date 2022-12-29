import { useState } from "react";
import "./Input.css"
export default function Inpt_cliente({ func, ...props }) {


    const [name, setName] = useState('');
    const [preferenceOff, setPreferenceOff] = useState('');
    const [initialTimer, setInitialTimer] = useState('');
    const [finalTimer, setFinalTimer] = useState('');
    const [matricula, setMatricula] = useState('');
    const [depart, setDepart] = useState('');

    function inserir() {
        { func(name, initialTimer + '-' + finalTimer, matricula, depart, preferenceOff) }
        setMatricula('');
        setFinalTimer('');
        setInitialTimer('')
        setName('')
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

            <button className="" onClick={() => inserir()}> Inseir </button>

        </div>




    )
}