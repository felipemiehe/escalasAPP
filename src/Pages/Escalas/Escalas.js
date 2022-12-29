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


    // criar vetor
    function HandleCriarObjeto(nome, horario, matricula, depart, pref, folgas, trabalhados, dataInicial, dataFinal) { // handlesetonejto botao inserir

        if (obj.length !== 0) {
            setObjet([...obj, { data: { nome: nome, horario: horario, matricula: matricula, departamento: depart, preffolgas: pref, folgas: [folgas], trabalhados: [trabalhados], dataInicial: dataInicial, dataFinal: dataFinal } }])
        } else {
            setObjet([{ data: { nome: nome, horario: horario, matricula: matricula, departamento: depart, preffolgas: pref, folgas: [folgas], trabalhados: [trabalhados], dataInicial: dataInicial, dataFinal: dataFinal } }])
        }

    }

    // CRIAR ESCALAS ####

    function CriaEscala() {


        let dias_seperados_final = dateInicio.split('-');
        let dias_seperados_inicial = dateFim.split('-');
        console.log(dias_seperados_final)

        // [0] -- ano -- [1] -- mes -- [2] -- dia
        // console.log(parseInt(dateInicio))

        // const result = eachDayOfInterval({
        //     start: new Date(parseInt(dias_seperados_inicial[0]), parseInt(dias_seperados_inicial[1]) - 1, parseInt(dias_seperados_inicial[2])),
        //     end: new Date(parseInt(dias_seperados_final[0]), parseInt(dias_seperados_final[1]) - 1, parseInt(dias_seperados_final[2]))
        // })

        const result = eachDayOfInterval({
            start: new Date(parseInt(2022), parseInt(12) - 1, parseInt(1)),
            end: new Date(parseInt(2022), parseInt(12) - 1, parseInt(31))
        })

        //parseInt(dias_seperados_inicial[0]), parseInt(dias_seperados_inicial[1]), parseInt(dias_seperados_inicial[2])
        //parseInt(dias_seperados_final[0]), parseInt(dias_seperados_final[1]) -1, parseInt(dias_seperados_final[2])


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
                    obj[i].data.folgas[k] = ' '
                    obj[i].data.trabalhados[k] = 'N'
                    obj[i].data.dataInicial = dateInicio
                    obj[i].data.dataFinal = dateFim
                }
            }
        }

        let obj_depois_for = [...obj]
        setObjet(obj_depois_for)

        // console.log(datas[1].getMonth())        
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

            <Modal title={'Inserir funcionários'} showModal={enableModal_criar} open={openModal_criar} close={closeModal_criar}>
                <div className='items-center p-2'>
                    <FromCli func={HandleCriarObjeto} />
                </div>
                {obj.length > 0 &&
                    <div>
                        <Quadroescalas objeto={obj} datass={datas} nao_esconder={false} />
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
                {/* <BotaoSuspenso itens={data} opcao={opcao} mudarOpcao={escolhe_Opcao} />
            <Quadroescalas/> 
            <Botao nome={"clique para mudar"} clic={st}></Botao>           
            <Botao nome={nome}></Botao>            */}
                <div className='sidebar bg-slate-50 '>
                    <Cab inserir={openModal_criar}
                        datainicio={handle_datasInicio}
                        datafim={handle_datasFim}
                        criar={CriaEscala}
                    />
                </div>

                <div className='item overflow-scroll'>
                    <Quadroescalas objeto={obj} datass={datas} nao_esconder={true} />
                </div>

            </section>

        </div>

    )

}