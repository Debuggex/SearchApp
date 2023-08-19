import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import BackButton from "./BackButton";
import EditInputField from "./EditInputField";
import Input from "./Input";
import EditInput from "./EditInput";
import InsetButton from "./InsetButton";
import ConditionInput from "./ConditionInput";
import { useState } from "react";



const EditUser =({navigation})=>{

    const [conditions,setConditions] = useState([1,2]);
    const goBack = () =>{
        navigation.navigate('User');
    }
    const addCondition = ()=>{
        setConditions([...conditions,1])
    }
    const datas=[
        {   id:1,
            label:"First Name",
        placeholder:"-"
        },
        {
            id:2,label:"Last Name",
            placeholder:"-"
        },
        {
            id:3,label:"Number",
            placeholder:"-"
        },
        {id:4,label:"Birthday",
            placeholder:"-"
        },
        {id:5,label:"Height",
            placeholder:"-"
        },
        {id:6,label:"Weight",
            placeholder:"-"
        },
        {id:7,label:"Blood Type",
            placeholder:"-"
        }
    ];

    const goUser=()=>{
        navigation.navigate('User');
    }
    return(
        <ScrollView contentContainerStyle={{backgroundColor:"#F0F0F3",paddingTop:30,paddingBottom:30,display:'flex',justifyContent:"space-between"}}>
            <View style={{display:'flex',padding:30,flexDirection:'row',justifyContent:'space-between',width:"100%",alignItems:'center'}}>
                <InsetButton props={{pressed:goBack,imgSrc:require('../../assets/Back.png')}}/>
                <TouchableOpacity onPress={()=>{goUser()}} style={{shadowColor:"#AEAEC0",shadowOpacity:0.25,elevation:5,shadowRadius:5,shadowOffset:{width:5,height:5},display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                    <View style={{shadowColor:"#FFFFFF",shadowOpacity:0.25,elevation:5,shadowRadius:5,shadowOffset:{width:-5,height:-5},display:"flex",flexDirection:"row",justifyContent:"center",padding:5,paddingRight:20,paddingLeft:20,alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                        <Text style={{fontSize:16,fontWeight:400,color:"#2684FF"}}>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={{color:"#898A8D",fontSize:16,fontWeight:400,padding:30,paddingBottom:10,paddingTop:10}}>About Me</Text>
            {datas.map((data)=>(<EditInputField props={{label:data.label,placeholder:data.placeholder,id:data.id,elevation:15-data.id}}/>))}
            <View style={{display:'flex',padding:30,paddingBottom:5,flexDirection:'row',justifyContent:'space-between',width:"100%",alignItems:'center'}}>
                <Text style={{color:"#898A8D",fontSize:16,fontWeight:400,paddingBottom:10}}>Conditions</Text>
                <InsetButton props={{pressed:addCondition,imgSrc:require('../../assets/Plus.png')}} />
            </View>
            {conditions.map((data)=>(
                <ConditionInput placeholder="Type Here"/>
            ))}
            
        </ScrollView>
    )


}

export default EditUser;