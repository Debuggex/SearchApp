import React, { useState } from "react"


const ContextCreator = React.createContext(); 
export const ContextProvider = ({children,navigation})=>{

    const [notes, setNotes] = useState([]);
    const [note,setNote] = useState({});
    const [noteHeading,setNoteHeading] = useState('');
    const [noteText,setNoteText] = useState('');
    const [notesAction,setNotesAction] = useState('NEW');
    const [searctText, setSearchText] = useState('');
    const [searchDocument,setSearchDocument] = useState('');
    const [isHealthModal,setIsHealthModal] = useState(false);
    const [isData, setIsData] = useState(false);
    const [noteIndex,setNoteIndex] = useState(0);
    const [isModal,setIsModal] = useState(false);
    const [documents,setDocuments] = useState([]);
    const [isDocument,setIsDocuments] = useState(false);
    const [selectedFolder,setSelectedFolder] = useState(0);
    const [emailList,setEmailList] = useState([]);
    const [settings,setSettings] = useState(false);

     const showModal = ()=>{
        setIsModal(!isModal);
     }

    return(
        <ContextCreator.Provider value={{notes,setNotes,setNote,note,searctText, setSearchText,showModal,isModal,documents,setDocuments,isDocument,setIsDocuments,selectedFolder,setSelectedFolder,notesAction,setNotesAction,noteHeading,setNoteHeading,noteText,setNoteText,noteIndex,setNoteIndex,isData, setIsData,searchDocument,setSearchDocument,isHealthModal,setIsHealthModal,emailList,setEmailList,settings,setSettings}}>
            {children}
        </ContextCreator.Provider>
    )

}

export default ContextCreator;