import { useState, useEffect } from "react"


export default function Modal({ showModal, close , open, ...props }) {      
   
    return (
        <>
            {showModal &&
                <div className="absolute w-full h-full top-[0] left-[0] bg-slate-300 z-50 align-middle bg-opacity-40 ">
                    <div className="absolute rounded-xl top-[50%] w-[900px] h-[500px] left-[50%] transform -translate-x-1/2
                     -translate-y-1/2 text-end bg-slate-50 shadow-xl">
                        <span
                            onClick={() => {close()}}
                            title={'Sair'}
                            className="material-icons cursor-pointer p-1 mr-2 mt-2 hover:text-red-700">
                            close
                        </span>
                        <div className="flex">
                            {props.children}
                        </div>
                    </div>
                </div>}
        </>
    )
}
