import React, { useState } from "react"


const ContextCreator = React.createContext(); 
export const ContextProvider = ({children,navigation})=>{

    const [notes,setNotes] = useState([]);
    const [note,setNote] = useState('');
    const [searctText, setSearchText] = useState('');
    const [isData, setIsData] = useState(false);
    const [isModal,setIsModal] = useState(false);
    const [documents,setDocuments] = useState([]);
    const [isDocument,setIsDocuments] = useState(false);
    const [selectedFolder,setSelectedFolder] = useState(0);

     const showModal = ()=>{
        setIsModal(!isModal);
     }

    return(
        <ContextCreator.Provider value={{notes,setNotes,setNote,note,searctText, setSearchText,showModal,isModal,documents,setDocuments,isDocument,setIsDocuments,selectedFolder,setSelectedFolder}}>
            {children}
        </ContextCreator.Provider>
    )

}

export default ContextCreator;