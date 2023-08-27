import { useContext, useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native"
import context from './Context/ContextProvider';




const AddNote = ({navigation,route})=>{
    const {noteText,setNoteText,noteIndex,notesAction,setNotesAction,notes,note} = useContext(context);
    useEffect(()=>{
        if (notesAction=='NEW') {
            setNoteText('');
            }else{
            setNoteText(notes[noteIndex].note);
        }
    },[note])

    return(
        <View style={{padding:30,backgroundColor:"#F0F0F3",height:"100%"}}>
            <TextInput multiline={true} style={{fontSize:14}} placeholderTextColor="#898A8D" value={noteText} onChangeText={(text)=>{
                setNoteText(text);
            }} placeholder="Add Note"/>
        </View>
    )
}

export default AddNote;