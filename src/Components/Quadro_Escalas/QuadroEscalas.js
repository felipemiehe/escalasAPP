import { useEffect, useState } from 'react';
import './QuadraoEscalas.css';
import { eachDayOfInterval, format } from 'date-fns'


export default function Quadraoescalas({ objeto, datass, ...props }) {



    const [obj, setObjet] = useState([]) // fazer usesate desse
    const [dateInicio, setDateInicio] = useState()
    const [dateFim, setDateFim] = useState()
    const [datas, setDatas] = useState([]) // dentro do componente    

    // { data: { nome: 'txxt', horario: 'txt', matricula: '123', departamento: 'recepção', numFolgas: 5, folgas: new Array(2).fill({ dfolga: ' ' }) , dias : [1, 2, 3,4,5,6,7]}}]
    //vetor de nome   

    function setnomesvetor(nome, horario, matricula, depart, folgas, trabalhados, dataInicial, dataFinal) { // handlesetonejto botao inserir

        if (obj.length !== 0) {
            setObjet([...obj, { data: { nome: nome, horario: horario, matricula: matricula, departamento: depart, folgas: [folgas], trabalhados: [trabalhados], dataInicial: dataInicial, dataFinal: dataFinal } }])
        } else {
            setObjet([{ data: { nome: nome, horario: horario, matricula: matricula, departamento: depart, folgas: [folgas], trabalhados: [trabalhados], dataInicial: dataInicial, dataFinal: dataFinal } }])
        }

    }

    // colocar x
    function adicionarFolgas(item, i) {
        //console.log(item.folgas[i])
        if (item.folgas[i] === ' ') {

            item.folgas[i] = 'X'
        } else if (item.folgas[i] === 'X') {

            item.folgas[i] = ' '
        }
        let newState = [...obj];
        setObjet(newState)
    }

    // só para checar se paga a data #APAGAR DEPOIS#
    function printar() {
        obj.map((item, i) => {
            console.log(item.data.dataFinal)
        })
    }


    function CriaEscala() {

        const dataInicial = document.getElementsByName('data-inicial')[0].value;
        const dataFinal = document.getElementsByName('data-final')[0].value;


        let dias_seperados_final = dataInicial.split('-');
        let dias_seperados_inicial = dataFinal.split('-');

        // [0] -- ano -- [1] -- mes -- [2] -- dia
        //console.log(parseInt(dias_seperados[2]))

        const result = eachDayOfInterval({
            start: new Date(parseInt(dias_seperados_inicial[0]), parseInt(dias_seperados_inicial[1]) - 1, parseInt(dias_seperados_inicial[2])),
            end: new Date(parseInt(dias_seperados_final[0]), parseInt(dias_seperados_final[1]) - 1, parseInt(dias_seperados_final[2]))
        })

        //parseInt(dias_seperados_inicial[0]), parseInt(dias_seperados_inicial[1]), parseInt(dias_seperados_inicial[2])
        //parseInt(dias_seperados_final[0]), parseInt(dias_seperados_final[1]) -1, parseInt(dias_seperados_final[2])


        let datas_agora = []

        for (var j = 0; j < result.length; j++) {
            datas_agora.push(result[j])
        }

        setDatas(datas_agora)



        // const datasformatadas = format((result), 'MM/dd/yyyy')

        // Alimentando vetores        
        {
            for (var i = 0; i < objeto.length; i++) {
                objeto[i].data.folgas = []
                for (var k = 0; k < result.length; k++) {
                    objeto[i].data.folgas[k] = ' '
                    objeto[i].data.trabalhados[k] = 'N'
                    objeto[i].data.dataInicial = dataInicial
                    objeto[i].data.dataFinal = dataFinal
                }
            }
        }

        let obj_depois_for = [...objeto]
        setObjet(obj_depois_for)
        objeto = obj_depois_for


        // console.log(datas[1].getMonth())        
    }


    // funcao que traforma numeros da sema 1 segunda 0 domingo

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

        return (<div className={`${(dias[dia.getDay()] === 'SAB' || dias[dia.getDay()] === 'DOM') ? 'bg-stone-500' : meses[dia.getMonth()]} border-[1px] border-black font-black quadrados text-[0.60rem] text-center`}>{dias[dia.getDay()]}</div>)

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

        const rowLen = datas.length

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

            {/* <input placeholder='' type="date" name="data-inicial" onChange={() => setDateInicio(document.getElementsByName('data-inicial')[0].value)} />
            <input placeholder='' type="date" name="data-final" onChange={() => setDateFim(document.getElementsByName('data-final')[0].value)} />
            
            <button onClick={() => setnomesvetor('felipe', '14:00', 10, 'recepção', '', '')}>AQUI</button>
            <button onClick={() => setnomesvetor('jose', '15:00', 15, 'recepção', '', '')}>AQUI2</button>
            <button onClick={() => CriaEscala()}>Criar escala</button>
            <button onClick={() => printar()}>printar datas</button> */}

            <div className="max-w[1200px] h-full border-2 overflow-x-scroll overflow-y-scroll rounded-md p-2">
                <table className="text-center text-sm font-bold">
                    <tbody >
                        <tr >
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td className='border-r-[1px] border-black'></td>
                            <td className='flex text-[0.60rem] items-center'>
                                {/* {   datas.filter(i => i.getMonth() === 0).length > 0 && mesesz()} */}
                                {dateInicio !== null && dateFim !== null && datas.map((item, i) => (mesesz(item, i)))}

                            </td>
                        </tr>

                        <tr className="">
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td className='border-r-[1px] border-black'></td>
                            <td className='flex text-[0.60rem] items-center'>
                                {
                                    // obj.map((item, i) => item.data.diassemana.map((c) => (i === 0) ? <div className='quadradao text-center flex'>{c}</div> : ''))
                                    dateInicio !== null && dateFim !== null && datas.map((item, i, row) => (diassemanas(item, i, row)))
                                }
                            </td>
                        </tr>

                        {objeto.length != 0 &&
                            <tr className="text-[0.6rem]">
                                <th className='f '>Departament</th>
                                <th className='f '>Mat</th>
                                <th className='f '>Nome</th>
                                <th className='f '>Hrs.entrada</th>
                                <th className='f '>Folgas</th>
                                <th className='  border-r-[1px] border-black px-4'>ASS</th>
                                <td className='flex'>
                                    {
                                        // add dias da semana                                   
                                        datas.map((item) => (<div className='border-[1px] border-black quadrados '>{item.getDate()}</div>))
                                    }

                                </td>
                            </tr>}
                        {objeto.map((item, index) => (
                            <>
                                <tr className="text-[0.6rem]">
                                    <th >{item.data.departamento}</th>
                                    <th >{item.data.matricula}</th>
                                    <th className='px-[2px]'>{item.data.nome}</th>
                                    <th >{item.data.horario}</th>
                                    <th ></th>
                                    <th ></th>

                                    <td className='flex'>
                                        <>
                                            {
                                                item.data.folgas.map((elemento, i) => (elemento !== '') ? <div title={`${item.data.trabalhados[index]}`} onClick={() => adicionarFolgas(item.data, i)} className={`border-[1px] border-black quadrados cursor-pointer`}>{elemento}</div> : '')

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

