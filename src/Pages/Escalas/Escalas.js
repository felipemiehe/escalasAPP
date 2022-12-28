import { useState } from 'react';
import Botao from '../../Components/Botao/Botao';
import Quadroescalas from '../../Components/Quadro_Escalas/QuadroEscalas';
import Header from '../../Components/Header/Header';
import './Escalas.css'
import Modal from '../../Components/Modal/Modal';
import Cab from '../../Components/Cabecalho/Cabecalho';
import useControleModal from '../../Hooks/UsecontroleModal';


export default function Escalas() {

    // modal inserir colabadores na escalas
    const [enableModal_criar, closeModal_criar, openModal_criar] = useControleModal();


    const [obj, setObjet] = useState([])
    const [dateInicio, setDateInicio] = useState()
    const [dateFim, setDateFim] = useState()


    // criar vetor
    function HandleCriarObjeto(nome, horario, matricula, depart, folgas, trabalhados, dataInicial, dataFinal) { // handlesetonejto botao inserir

        if (obj.length !== 0) {
            setObjet([...obj, { data: { nome: nome, horario: horario, matricula: matricula, departamento: depart, folgas: [folgas], trabalhados: [trabalhados], dataInicial: dataInicial, dataFinal: dataFinal } }])
        } else {
            setObjet([{ data: { nome: nome, horario: horario, matricula: matricula, departamento: depart, folgas: [folgas], trabalhados: [trabalhados], dataInicial: dataInicial, dataFinal: dataFinal } }])
        }

    }

    // selecionar data

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
                <div>felipe</div>


            </Modal>

        )
    }


    return (
        <div className='h-full'>
            {modal_inserir()}
            {console.log(dateInicio, dateFim)}
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

                    />
                </div>

                <div className='item '>
                    <div>Legendas</div>
                    <Quadroescalas objeto={obj} />
                    {/* <div className='flex  overflow-scroll gap-2 h-full max-h-[130px]'>
                        <div className='w-1/2 border rounded-lg'>INFORMAÇOES DA ESCALA</div>
                        <div className='w-1/2 border rounded-lg'>INFORMAÇOES DE DIA de feriados trabalhados</div>
                    </div> */}
                </div>

            </section>

        </div>

    )

}