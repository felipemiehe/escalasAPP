import { useState } from 'react';
import Botao from '../../Components/Botao/Botao';
import Quadroescalas from '../../Components/Quadro_Escalas/QuadroEscalas';
import Header from '../../Components/Header/Header';
import './Escalas.css'
import Modal from '../../Components/Modal/Modal';
import FromCli from '../../Components/Form/InputClientes';
import Cab from '../../Components/Cabecalho/Cabecalho';
import { eachDayOfInterval, format } from 'date-fns'

import useControleModal from '../../Hooks/UsecontroleModal';


export default function Escalas() {

    // modal inserir colabadores na escalas
    const [enableModal_criar, closeModal_criar, openModal_criar] = useControleModal();


    const [obj, setObjet] = useState([])
    const [dateInicio, setDateInicio] = useState()
    const [dateFim, setDateFim] = useState()

    const [datas, setDatas] = useState([])


    // criar vetor // handlesetonejto botao inserir
    
    function HandleCriarObjeto(nome, horario, matricula, depart, pref, folgas, trabalhados, dataInicial, dataFinal) { 

        if (obj.length !== 0) {
            setObjet([...obj, { data: { nome: nome, horario: horario, matricula: matricula, departamento: depart, preffolgas: pref, folgas: [folgas], trabalhados: [trabalhados], dataInicial: dataInicial, dataFinal: dataFinal } }])
        } else {
            setObjet([{ data: { nome: nome, horario: horario, matricula: matricula, departamento: depart, preffolgas: pref, folgas: [folgas], trabalhados: [trabalhados], dataInicial: dataInicial, dataFinal: dataFinal } }])
        }

    }

    // setobjeto

    function Setobjt(novoObj) {
        setObjet(novoObj)
    }

    // CRIAR ESCALAS ####

    function CriaEscala() {


        if (obj.length < 1) {
            return
        }

        const dinicial = dateInicio.split('-');
        const dfinal = dateFim.split('-');
       

        const result = eachDayOfInterval({
            start: new Date(parseInt(dinicial[0]), parseInt(dinicial[1]) - 1, parseInt(dinicial[2])),
            end: new Date(parseInt(dfinal[0]), parseInt(dfinal[1]) - 1, parseInt(dfinal[2]))
        })
        


        let datas_agora = []

        for (var j = 0; j < result.length; j++) {
            datas_agora.push(result[j])
        }

        setDatas(datas_agora)


        // Alimentando vetores        
        {
            for (var i = 0; i < obj.length; i++) {
                obj[i].data.folgas = []
                for (var k = 0; k < result.length; k++) {

                    if (datas_agora[k].getDay() === obj[i].data.preffolgas) {
                        obj[i].data.folgas[k] = 'X'
                    } else {

                        obj[i].data.folgas[k] = ' '
                    }

                    obj[i].data.trabalhados[k] = 'N'
                    obj[i].data.dataInicial = dateInicio
                    obj[i].data.dataFinal = dateFim
                }
            }
        }

        let obj_depois_for = [...obj]
        setObjet(obj_depois_for)

        //console.log(obj)        
    }




    // ######## selecionar data ####### //

    function handle_datasInicio(inicial) {
        setDateInicio(inicial)
    }
    function handle_datasFim(fim) {
        setDateFim(fim)
    }

    // ########## MODAL ########## //

    function modal_inserir() {
        return (

            <Modal title={'Inserir funcionários no modelo escala 6x1'} showModal={enableModal_criar} open={openModal_criar} close={closeModal_criar}>
                <div className='items-center p-2'>
                    <FromCli func={HandleCriarObjeto} />
                </div>
                {obj.length > 0 &&
                    <div>
                        <Quadroescalas objeto={obj} datass={datas} nao_esconder={false} setObjtelevado={() => Setobjt} />
                    </div>}
            </Modal>


        )
    }


    return (
        <div className='h-full'>
            {modal_inserir()}
            {/* {console.log(dateInicio,dateFim)}           */}
            <Header className="header" user={'felipe'} />
            <section className='container'>

                <div className='sidebar bg-slate-50 '>
                    <Cab inserir={openModal_criar}
                        datainicio={handle_datasInicio}
                        datafim={handle_datasFim}
                        criar={CriaEscala}
                />
                
                </div>

                <div className='item overflow-auto'>
                    <Quadroescalas objeto={obj} datass={datas} nao_esconder={true} setObjtelevado={Setobjt} />
                </div>

            </section>

        </div>

    )

}