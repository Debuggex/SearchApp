import React, { useState } from "react"


const ContextCreator = React.createContext(); 
export const ContextProvider = ({children,navigation})=>{

    const [notes,setNotes] = useState([]);
    const [note,setNote] = useState('');
    const [searctText, setSearchText] = useState('');

    return(
        <ContextCreator.Provider value={{notes,setNotes,setNote,note,searctText, setSearchText}}>
            {children}
        </ContextCreator.Provider>
    )

}

export default ContextCreator;