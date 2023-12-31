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
    const [modalButton, setModalButtons] = useState(false);
    const [medicates,setMedicates] = useState([]);
    const [medicateId,setMedicateId] = useState(-1);
    const [datas,setDatas] = useState([
        {   id:1,
            label:"First Name",
            placeholder:"Enter First Name",
            value:''
        },
        {
            id:2,label:"Last Name",
            placeholder:"Enter Last Name",
            value:''
        },
        {
            id:3,label:"Number",
            placeholder:"Enter Number",
            value:''
        },
        {id:4,label:"Birthday",
            placeholder:"Enter Birthday",
            value:''
        },
        {id:5,label:"Height",
            placeholder:"Enter Height",
            value:''
        },
        {id:6,label:"Weight",
            placeholder:"Enter Weight",
            value:''
        },
        {id:7,label:"Blood Type",
            placeholder:"Enter Blood Type",
            value:''
        }
    ]);
    const [conditions,setConditions] = useState([{id:0,value:''},{id:1,value:''}]);
    const [name,SetName] = useState('');
    const [dosage,setDosage] = useState('');
    const [frequency,setFrequency] = useState('');
    const [Mnotes,setMnotes] = useState('');


    const [cards, setCards] = useState([
    //     {
    //     title1:"1",
    //     title2:"assasda",
    //     title3:"asdadsdsa",
    //     title4:"asdsdadsa",
    //     input1:"sadsdasadsda",
    //     input2:"asddsasdadsa",
    //     input3:"dsadsadsadsa",
    //     input4:"adsdsadsa",
    //     cardColor:"#FFFFFF"
    // },
    //     {
    //         title1: "2",
    //         title2: "assasda",
    //         title3: "asdadsdsa",
    //         title4: "asdsdadsa",
    //         input1: "sadsdasadsda",
    //         input2: "asddsasdadsa",
    //         input3: "dsadsadsadsa",
    //         input4: "adsdsadsa",
    //         cardColor: "#34393A"
    //     }
    ]);
    const [editCardIndex,setEditCardIndex] = useState(null);
    const [title1, setTitle1] = useState('');
    const [title2, setTitle2] = useState('');
    const [title3, setTitle3] = useState('');
    const [title4, setTitle4] = useState('');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [cardColor,setCardColor] = useState('');

     const showModal = ()=>{
        setIsModal(!isModal);
     }

    return(
        <ContextCreator.Provider value={{ 
            notes, setNotes, setNote, note, searctText, setSearchText, showModal, isModal, documents, setDocuments, isDocument, setIsDocuments, selectedFolder, setSelectedFolder, notesAction, setNotesAction, noteHeading, setNoteHeading, noteText, setNoteText, noteIndex, setNoteIndex, isData, setIsData, searchDocument, setSearchDocument, isHealthModal, setIsHealthModal, emailList, setEmailList, settings, setSettings, cards, setCards, title1, setTitle1, title2, setTitle2, title3, setTitle3, title4, setTitle4, input1, setInput1, input2, setInput2, input3, setInput3, input4, setInput4, cardColor, setCardColor, editCardIndex, setEditCardIndex, modalButton, setModalButtons,medicates,setMedicates,medicateId,setMedicateId,name,SetName,dosage,setDosage,frequency,setFrequency,Mnotes,setMnotes,datas,setDatas,conditions,setConditions }}>
            {children}
        </ContextCreator.Provider>
    )

}

export default ContextCreator;