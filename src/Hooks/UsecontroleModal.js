import { useState } from "react";
/**
 * @callback OpenModal
 * 
 */
/**
 * Hook para controlar o State da Modal 
 * @returns {[Boolean,Function,Function]} [enableModal,closeModal,openModal]
 */

export default function useControleModal() {
    
    const [enableModal, setEnableModal] = useState(false);    

    const closeModal = () => {        
        setEnableModal(false);
    }

    const openModal = () => {
        setEnableModal(true);

    }

    return [enableModal,closeModal, openModal];
}