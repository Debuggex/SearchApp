import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native"




const AddNote = ({navigation,route})=>{
    const [inputVal, setInputVal] = useState('');

    useEffect(()=>{
        if(route.params?.note!=undefined){
            setInputVal(route.params.note);
            global.note = route.params.note;
        }
    },[route])

    return(
        <View style={{padding:30,backgroundColor:"#F0F0F3",height:"100%"}}>
            <TextInput style={{fontSize:14}} placeholderTextColor="#898A8D" value={inputVal} onChangeText={(text)=>{
                setInputVal(text);
                global.note = text;
            }} placeholder="Add Note"/>
        </View>
    )
}

export default AddNote;