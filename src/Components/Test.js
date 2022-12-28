import { useState } from "react"

export default function Test() {


    const [nome, setNome] = useState('')
    const [data, setData] = useState('')
    const [matricula, setMatricula] = useState('')

    return (

        <>
            <form>
                <label>
                    Name:
                    <input type="text" onChange={event => setNome(event.target.value)} />
                </label>
                <label>
                    data:
                    <input type="text" onChange={event => setData(event.target.value)} />
                </label>
                <label>
                    mitricula:
                    <input type="text" onChange={event => setMatricula(event.target.value)} />
                </label>
            </form>


            {/* <button onClick={()=>array.push(nome)}> pushado </button>
            ///
            <button onClick={()=>console.log(array)}>mostrar</button> */}
        </>
    )


}