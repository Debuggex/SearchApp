import { Dimensions, FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SingleNote from "./SingleNote";
import { useContext, useEffect, useState } from "react";
import context from './Context/ContextProvider';
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";




const Notes = ({navigation,route}) =>{

    const {notes,setNotes,searctText,isData, setIsData,notesAction,setNotesAction,note,setNote,noteIndex,setNoteIndex} = useContext(context);

    const [data,setData] = useState([]);

    const headerHeight = useHeaderHeight();

    
    useEffect(()=>{

        if(notes.length!=0){
            setIsData(true);
        }
    },[notes])

    const {height} = Dimensions.get("window");
    const goAddNotes=()=>{
        setNotesAction('NEW');
        setNote({});
        navigation.navigate('AddNote');
    }

    const updateNotes=(item)=>{
        setNoteIndex(item);
        setNotesAction('UPDATE');
        navigation.navigate('AddNote');
    }

    const filteredNotes = notes.filter((note)=>{
        if(searctText == undefined || searctText == null || searctText == ''){
            return true;
        }
        let isHeading = note.heading.indexOf(searctText)!=-1;
        let isNote = note.note.indexOf(searctText)!=-1;
        
        return isNote || isHeading;
    })


    

    if(isData){
        return(
            <SafeAreaView>
                <FlatList style={{ backgroundColor: "#F0F0F3", padding: 30, paddingTop: headerHeight, display: 'flex' }}
                 data={filteredNotes}
                    renderItem={({item,index})=>{
                        return(
                            <SingleNote props={{heading:item.heading,key:index,note:item.note,pressed:()=>{updateNotes(index)}}}/>
                        )
                    }}
                />
            </SafeAreaView>
        )
    }else{
        return(
            <View style={{backgroundColor:"#F0F0F3",display:'flex',alignItems:'center',justifyContent:"center",height:"100%"}}>
                <Text style={{fontSize:18,fontWeight:400,marginBottom:20}}>Journal</Text>
                <Text style={{color:"#A3ADB2",fontWeight:500,fontSize:14,marginBottom:40}}>Track your physical and mental well-being here.</Text>
                <TouchableOpacity onPress={()=>{goAddNotes()}} style={{shadowColor:"#AEAEC0",shadowOpacity:0.25,elevation:5,shadowRadius:5,shadowOffset:{width:5,height:5},display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                                <View style={{shadowColor:"#FFFFFF",shadowOpacity:0.25,elevation:5,margin:10,marginBottom:5,marginTop:5,shadowRadius:5,shadowOffset:{width:-5,height:-5},display:"flex",flexDirection:"row",justifyContent:"center",padding:5,paddingRight:20,paddingLeft:20,alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                                    <Text style={{fontSize:16,fontWeight:400,color:"#2684FF"}}>Add</Text>
                                </View>
                </TouchableOpacity>
                
            </View>
            
        )
    }
    

}


export default Notes;