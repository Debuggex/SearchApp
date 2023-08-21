import React, { useState } from "react"


const ContextCreator = React.createContext(); 
export const ContextProvider = ({children,navigation})=>{

    const [notes,setNotes] = useState([]);
    const [note,setNote] = useState('');
    const [searctText, setSearchText] = useState('');
    const [isData, setIsData] = useState(false);

    return(
        <ContextCreator.Provider value={{notes,setNotes,setNote,note,searctText, setSearchText,isData, setIsData}}>
            {children}
        </ContextCreator.Provider>
    )

}

export default ContextCreator;