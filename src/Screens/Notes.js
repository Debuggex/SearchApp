import { Dimensions, FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SingleNote from "./SingleNote";
import { useEffect, useState } from "react";




const Notes = ({navigation,route}) =>{

    const goAddNotes=(heading,note,key)=>{
        navigation.navigate('AddNote',{
            heading:heading,
            note:note,
            key:key
        });
    }

    const [isData, setIsData] = useState(false);

    const [data,setData] = useState([]);


    
    useEffect(()=>{
        console.log(route.params);
        if(route.params?.heading!=undefined){
            if(route.params?.key!=undefined){
                    let newData = {
                        heading:route.params.heading,
                        note:route.params.note,
                        key:route.params.key
                    }
                    console.log("Hello =>",route.params.key);
                    const newArray = [...data];
                    newArray[route.params.key] = newData;
                    setData(newArray);
                    console.log(data);
                    setIsData(true);
            }else{
                let newData = {
                        heading:route.params.heading,
                        note:route.params.note,
                        key:data.length
                    }
                    setData([...data,newData]);
                    setIsData(true);
                    
                    console.log("asasd => ",data);
            }
        }

        if(data.length!=0){
            setIsData(true);
        }
    },[route])

    const {height} = Dimensions.get("window");
    

    if(isData){
        return(
            <ScrollView contentContainerStyle={{backgroundColor:"#F0F0F3",padding:30,paddingTop:0,display:'flex',height:height}}>
            
                {data.map((item,index)=>(
                    <SingleNote props={{heading:item.heading,key:index,note:item.note,pressed:()=>{goAddNotes(item.heading,item.note,index)}}}/>
                ))}
            </ScrollView>
        )
    }else{
        return(
            <View style={{backgroundColor:"#F0F0F3",paddingTop:0,paddingBottom:50,display:'flex',alignItems:'center',justifyContent:"center",height:height}}>
                <Text style={{fontSize:18,fontWeight:400,marginBottom:20}}>Notes</Text>
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