import { useState } from 'react';
import './Cabecalho.css'

export default function Cab({ inserir,criar,salvar,minhas,pdf,compartilhar,datainicio,datafim,...props }) {

    const [dateInicio, setDateInicio] = useState()
    const [dateFim, setDateFim] = useState()
   

    return (
        <>

            <div className="h-full w-full flex rounded-md px-1 items-center bg-gray-900 gap-3 text-[0.80em]">               

                <button onClick={() => {inserir()}} className='botoes' href='#'>Inserir Funcionários</button>

                <p className='text-white'>Data inical:</p>
                <div className='bg-slate-50 rounded-lg p-2 h-1/2'>
                    <input placeholder='' type="date" name="data-inicial" onChange={() => {datainicio(document.getElementsByName('data-inicial')[0].value)}} />
                </div>
                <p className='text-white'>Data Final:</p>
                <div className='bg-slate-50 rounded-lg p-2 h-1/2'>
                    <input placeholder='' type="date" name="data-final" onChange={() => {datafim(document.getElementsByName('data-final')[0].value)}} />
                </div>

                <button onClick={() => {criar()}} className='botoes' >Criar</button>
                <button onClick={() => {salvar()}} className='botoes' >Salvar</button>
                <button onClick={() => {minhas()}} className='botoes' >Minhas escalas</button>
                <button onClick={() => {pdf()}} className='botoes' >baixar PDF</button>
                <button onClick={() => {compartilhar()}} className='botoes' >compartilhar escala</button>

            </div>
        </>
    )
}