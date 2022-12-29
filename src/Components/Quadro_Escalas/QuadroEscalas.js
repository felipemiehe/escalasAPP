import { useEffect, useState } from 'react';
import './QuadraoEscalas.css';
import { eachDayOfInterval, format } from 'date-fns'


export default function Quadraoescalas({ objeto, datass, nao_esconder, ...props }) {



    // colocar x
    function adicionarFolgas(item, i) {
        //console.log(item.folgas[i])
        if (item.folgas[i] === ' ') {
            item.folgas[i] = 'X'

        } else if (item.folgas[i] === 'X') {
            item.folgas[i] = ' '

        }
        let newState = [...objeto];
        objeto = newState
    }



    // function CriaEscala() {

    //     const dataInicial = document.getElementsByName('data-inicial')[0].value;
    //     const dataFinal = document.getElementsByName('data-final')[0].value;


    //     let dias_seperados_final = dataInicial.split('-');
    //     let dias_seperados_inicial = dataFinal.split('-');

    //     // [0] -- ano -- [1] -- mes -- [2] -- dia
    //     //console.log(parseInt(dias_seperados[2]))

    //     const result = eachDayOfInterval({
    //         start: new Date(parseInt(dias_seperados_inicial[0]), parseInt(dias_seperados_inicial[1]) - 1, parseInt(dias_seperados_inicial[2])),
    //         end: new Date(parseInt(dias_seperados_final[0]), parseInt(dias_seperados_final[1]) - 1, parseInt(dias_seperados_final[2]))
    //     })

    //     //parseInt(dias_seperados_inicial[0]), parseInt(dias_seperados_inicial[1]), parseInt(dias_seperados_inicial[2])
    //     //parseInt(dias_seperados_final[0]), parseInt(dias_seperados_final[1]) -1, parseInt(dias_seperados_final[2])


    //     let datas_agora = []

    //     for (var j = 0; j < result.length; j++) {
    //         datas_agora.push(result[j])
    //     }

    //     setDatas(datas_agora)



    //     // const datasformatadas = format((result), 'MM/dd/yyyy')

    //     // Alimentando vetores        
    //     {
    //         for (var i = 0; i < objeto.length; i++) {
    //             objeto[i].data.folgas = []
    //             for (var k = 0; k < result.length; k++) {
    //                 objeto[i].data.folgas[k] = ' '
    //                 objeto[i].data.trabalhados[k] = 'N'
    //                 objeto[i].data.dataInicial = dateinicio
    //                 objeto[i].data.dataFinal = datefinal
    //             }
    //         }
    //     }

    //     let obj_depois_for = [...objeto]
    //     setObjet(obj_depois_for)
    //     objeto = obj_depois_for


    //     // console.log(datas[1].getMonth())        
    // }




    // #### funcao que traforma numeros da sema 1 segunda 0 domingo

    function diassemanas(dia, i) {


        const dias = {
            1: 'SEG',
            2: 'TER',
            3: 'QUA',
            4: 'QUI',
            5: 'SEX',
            6: 'SAB',
            0: 'DOM',
        }

        const meses = {
            0: 'bg-green-300',
            1: 'bg-red-300',
            2: 'bg-green-300',
            3: 'bg-red-300',
            4: 'bg-green-300',
            5: 'bg-red-300',
            6: 'bg-green-300',
            7: 'bg-red-300',
            8: 'bg-green-300',
            9: 'bg-red-300',
            10: 'bg-green-300',
            11: 'bg-red-300',
        }

        return (<div className={`${(dias[dia.getDay()] === 'SAB' || dias[dia.getDay()] === 'DOM') ? 'bg-stone-500 text-slate-100' : meses[dia.getMonth()]} border-[1px] border-black font-black quadrados text-[0.60rem] text-center`}>{dias[dia.getDay()]}</div>)

    }

    // &&  <div className={`text-center flex justify-center meses w-[px]`}>DEZEMBRO</div>

    function mesesz(dia, i) {

        const meses = {
            0: 'JANEIRO',
            1: 'FEVEREIRO',
            2: 'MARÇO',
            3: 'ABRIL',
            4: 'MAIO',
            5: 'JUNHO',
            6: 'JULHO',
            7: 'AGOSTO',
            8: 'SETEMBRO',
            9: 'OUTUBRO',
            10: 'NOVEMBRO',
            11: 'DEZEMBRO',
        }

        const rowLen = datass.length

        return (<div className={`${(i === 0) && 'border-l-[1px] border-black'} 
        ${(i + 1 === rowLen) && 'border-r-[1px] border-black'}
        ${(dia.getDate() === 1) && 'border-l-[1px] border-black'}     
        quadrados border-y-[1px] border-black text-[0.80rem] text-center`}>
            {(i === 0) && meses[dia.getMonth()]}
            {dia.getDate() === 1 && i !== 0 && meses[dia.getMonth()]}
        </div>)
    }



    return (

        <>

            <div className="w-full h-full p-2">
                {nao_esconder &&
                    <div className='flex gap-1 border p-1 justify-around rounded items-center'>

                        <div className='flex gap-1 border p-1 rounded items-center'>
                            <span title="Afastamento" className='w-5 h-5 font-black text-center bg-orange-700'>A</span>
                            <p className='text-[0.7em] text-center '>Afastamento</p>
                        </div>

                        <div className='flex gap-1 border p-1 rounded items-center'>
                            <span title="Compensação de Horas" className='w-5 h-5 font-black text-center bg-purple-900'>C</span>
                            <p className='text-[0.7em] text-center '>Compensação de Horas</p>
                        </div>

                        <div className='flex gap-1 border p-1 rounded items-center'>
                            <span title="Férias" className='w-5 h-5 font-black text-center bg-blue-400'>F</span>
                            <p className='text-[0.7em] text-center '>Férias</p>
                        </div>

                        <div className='flex gap-1 border p-1 rounded items-center'>
                            <span title="Descanso" className='w-5 h-5 font-black text-center bg-green-200'>D</span>
                            <p className='text-[0.7em] text-center '>Descanso</p>
                        </div>

                        <div className='flex gap-1 border p-1 rounded items-center'>
                            <span title="Folgas" className='w-5 h-5 font-black text-center bg-yellow-300'>X</span>
                            <p className='text-[0.7em] text-center '>Folgas</p>
                        </div>

                        <div className='flex gap-1 border p-1 rounded items-center'>
                            <span title="Folgas compensatórias" className='w-5 h-5 font-black text-center bg-pink-700'>FF </span>
                            <p className='text-[0.7em] text-center '>Folgas compensatórias</p>
                        </div>

                    </div>}

                <table className="text-center pt-1 text-[0.8rem]">
                    <tbody>
                        <tr >
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td className='border-r border-black'></td>
                            <td className='flex text-[0.60rem] items-center'>
                                {/* {   datas.filter(i => i.getMonth() === 0).length > 0 && mesesz()} */}
                                {nao_esconder && (datass.length > 2) && datass.map((item, i) => (mesesz(item, i)))}

                            </td>
                        </tr>

                        <tr className="">
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td className='border-r border-black'></td>
                            <td className='flex text-[0.60rem] items-center'>
                                {
                                    // obj.map((item, i) => item.data.diassemana.map((c) => (i === 0) ? <div className='quadradao text-center flex'>{c}</div> : ''))
                                    nao_esconder && (datass.length > 2) && datass.map((item, i, row) => (diassemanas(item, i, row)))
                                }
                            </td>
                        </tr>

                        {objeto.length != 0 &&
                            <tr className="">
                                <th className='f '>Depart</th>
                                <th className='f '>Mat</th>
                                <th className='f '>Nome</th>
                                <th className='f '>Hrs. inicial - final</th>
                                <th className='f '>Folgas</th>
                                <th className='f '>ASS</th>
                                <td className='flex'>
                                    {
                                        // add dias da semana                                   
                                        nao_esconder && (datass.length > 2) && datass.map((item, i) => (<div className={`${(i % 2 == 0) ? '' : 'bg-slate-300'} border-[1px] border-black quadrados text-sm`}>{item.getDate()}</div>))
                                    }

                                </td>
                            </tr>}
                        {objeto.map((item, index) => (
                            <>
                                <tr className="text-[0.6rem]">
                                    <th >{item.data.departamento}</th>
                                    <th className='px-[4px]'>{item.data.matricula}</th>
                                    <th className='px-[4px]'>{item.data.nome}</th>
                                    <th className='px-[4px]'>{item.data.horario}</th>
                                    <th className='px-[4px]'></th>
                                    <th className='px-[4px]' ></th>

                                    <td className='flex'>
                                        <>
                                            {
                                                nao_esconder && (datass.length > 2) && item.data.folgas.map((elemento, i) => (elemento !== '') ? <div title={`${item.data.trabalhados[index]}`} onClick={() => adicionarFolgas(item.data, i)} className={`border-[1px] border-black quadrados cursor-pointer`}>{elemento}</div> : '')

                                            }

                                        </>
                                    </td>
                                </tr>
                            </>
                        ))
                        }

                    </tbody>
                </table>
            </div>

        </>

    )
}

