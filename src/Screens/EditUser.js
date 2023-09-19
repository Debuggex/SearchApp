import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import BackButton from "./BackButton";
import EditInputField from "./EditInputField";
import Input from "./Input";
import EditInput from "./EditInput";
import InsetButton from "./InsetButton";
import ConditionInput from "./ConditionInput";
import { useContext, useEffect, useState } from "react";
import Plus from './../../Icons/Plus';
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import context from './Context/ContextProvider';




const EditUser =({navigation})=>{

    const {datas,setDatas,conditions,setConditions} = useContext(context);
    const goBack = () =>{
        navigation.navigate('User');
    }
    const addCondition = ()=>{
        setConditions([...conditions,{id:conditions.length,value:''}]);
    }
    

    const goUser=()=>{
        navigation.navigate('User');
    }

    const updateText = (text,id) =>{
        const arr = datas.map((item)=>(

            item.id==id?{...item,value:text}:item
        ))
        setDatas(arr);
        
    }

    const updateConditionText = (text,id) =>{
        const arr = conditions.map((item)=>(

            item.id==id?{...item,value:text}:item
        ))
        setConditions(arr);
        
    }

    const headerHeight = useHeaderHeight();
    return(
        <SafeAreaView>
        <ScrollView automaticallyAdjustKeyboardInsets={true} contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{backgroundColor:"#F0F0F3",paddingTop:headerHeight,paddingBottom:30,display:'flex',justifyContent:"space-between"}}>
            <Text style={{color:"#898A8D",fontSize:16,fontWeight:400,padding:30,paddingBottom:10,paddingTop:10}}>About Me</Text>
            {datas.map((data)=>(<EditInputField props={{label:data.label,placeholder:data.placeholder,id:data.id,elevation:15-data.id,value:data.value,setValue:updateText}}/>))}
            <View style={{display:'flex',padding:30,paddingBottom:5,flexDirection:'row',justifyContent:'space-between',width:"100%",alignItems:'center'}}>
                <Text style={{color:"#898A8D",fontSize:16,fontWeight:400,paddingBottom:10}}>Conditions</Text>
                <InsetButton props={{pressed:addCondition}} SvgIcon={Plus}/>
            </View>
            {conditions.map((data)=>(
                <ConditionInput id={data.id} value={data.value} setValue={updateConditionText} placeholder="Type Here"/>
            ))}
            
        </ScrollView>
        </SafeAreaView>
    )


}

export default EditUser;