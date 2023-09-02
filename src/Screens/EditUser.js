import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import BackButton from "./BackButton";
import EditInputField from "./EditInputField";
import Input from "./Input";
import EditInput from "./EditInput";
import InsetButton from "./InsetButton";
import ConditionInput from "./ConditionInput";
import { useState } from "react";
import Plus from './../../Icons/Plus';



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
        placeholder:"Enter First Name"
        },
        {
            id:2,label:"Last Name",
            placeholder:"Enter Last Name"
        },
        {
            id:3,label:"Number",
            placeholder:"Enter Number"
        },
        {id:4,label:"Birthday",
            placeholder:"Enter Birthday"
        },
        {id:5,label:"Height",
            placeholder:"Enter Height"
        },
        {id:6,label:"Weight",
            placeholder:"Enter Weight"
        },
        {id:7,label:"Blood Type",
            placeholder:"Enter Blood Type"
        }
    ];

    const goUser=()=>{
        navigation.navigate('User');
    }
    return(
        <ScrollView contentContainerStyle={{backgroundColor:"#F0F0F3",paddingTop:30,paddingBottom:30,display:'flex',justifyContent:"space-between"}}>
            <Text style={{color:"#898A8D",fontSize:16,fontWeight:400,padding:30,paddingBottom:10,paddingTop:10}}>About Me</Text>
            {datas.map((data)=>(<EditInputField props={{label:data.label,placeholder:data.placeholder,id:data.id,elevation:15-data.id}}/>))}
            <View style={{display:'flex',padding:30,paddingBottom:5,flexDirection:'row',justifyContent:'space-between',width:"100%",alignItems:'center'}}>
                <Text style={{color:"#898A8D",fontSize:16,fontWeight:400,paddingBottom:10}}>Conditions</Text>
                <InsetButton props={{pressed:addCondition}} SvgIcon={Plus}/>
            </View>
            {conditions.map((data)=>(
                <ConditionInput placeholder="Type Here"/>
            ))}
            
        </ScrollView>
    )


}

export default EditUser;