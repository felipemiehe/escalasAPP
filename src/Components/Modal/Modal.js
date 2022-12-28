import { useState, useEffect } from "react"


export default function Modal({ showModal, close, open, title, ...props }) {

    return (
        <>
            {showModal &&
                <div className="absolute w-full h-full top-[0] left-[0] bg-slate-300 z-50 align-middle bg-opacity-40 ">
                    <div className="h-full w-full absolute rounded-xl top-[50%] lg:max-w-[900px] xl:max-h-[500px] max-h-[400px] min-h-[400px] min-w-[600px]   left-[50%] transform -translate-x-1/2
                     -translate-y-1/2 text-end bg-slate-50 shadow-xl">
                        <div className="justify-between overflow-hidden flex rounded-t-xl bg-slate-900 p-1 text-white">
                            <span className="">{title}</span>
                            <span
                                onClick={() => { close() }}
                                title={'Sair'}
                                className="material-icons pr-1 cursor-pointer hover:text-red-700">
                                close
                            </span>
                        </div>
                        <div className="flex">
                            {props.children}
                        </div>
                    </div>
                </div>}
        </>
    )
}
