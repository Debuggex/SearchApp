import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import HomeCard from './HomeCard';
import InsetButton from './InsetButton';



const Home=({navigation})=>{

    const {height} = Dimensions.get("screen");
    const goUser = () => {
        navigation.navigate('User');
    }
    const handlePress = async()=>{
        try{
        navigation.navigate('EditUser');
        setMessageText('How are you feeling today?');
        setGetStarted(false);
        
        }catch(err){
            console.log(err);
        }
        
    }
    const [messageText,setMessageText] = useState("Let’s get started!");
    const [getStarted,setGetStarted] = useState(true);

    
    useEffect(async()=>{
    },[])
    return(
        <ScrollView contentContainerStyle={{ padding:30,height:"135%",backgroundColor:"#F0F0F3",paddingTop:50,paddingBottom:50,display:'flex',justifyContent:"space-between"}}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:"100%",alignItems:'center',padding:5}}>
                <TouchableOpacity style={{shadowColor:"#AEAEC0",shadowOpacity:0.5,elevation:5,shadowRadius:10,shadowOffset:{width:5,height:5},display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                    <View style={{shadowColor:"#FFFFFF",shadowOpacity:1,elevation:5,shadowRadius:10,shadowOffset:{width:-5,height:-5},display:"flex",flexDirection:"row",justifyContent:"center",padding:5,paddingRight:20,paddingLeft:20,alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                        <Text style={{fontSize:18,lineHeight:30}}>Health ID</Text>
                    </View>
                </TouchableOpacity>
                <InsetButton props={{imgSrc:require('../../assets/Setting.png')}}/>
            </View>
            <View style={{width:"100%",padding:30,paddingTop:0,paddingBottom:0,height:"30%",borderRadius:20,display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'column'}}>
                    <View style={{width:"100%"}}>
                        <Text style={{fontSize:24,lineHeight:30,marginBottom:20,width:"80%",fontWeight:600}}>{messageText}</Text>
                        {getStarted && <Text style={{color:"#A3ADB2",fontWeight:500,fontSize:14}}>We need to grab some info from you.</Text>}
                    </View>
                         {getStarted && <TouchableOpacity onPress={()=>{handlePress()}} style={{shadowColor:"#AEAEC0",width:"40%",shadowOpacity:0.25,elevation:5,shadowRadius:5,shadowOffset:{width:5,height:5},display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                            <View style={{shadowColor:"#FFFFFF",shadowOpacity:0.25,elevation:5,shadowRadius:5,shadowOffset:{width:-5,height:-5},display:"flex",flexDirection:"row",justifyContent:"center",padding:5,paddingRight:20,paddingLeft:20,alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                                <Text style={{fontSize:16,fontWeight:400,color:"#2684FF"}}>Okay</Text>
                            </View>
                        </TouchableOpacity>}
                    
            </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap',alignItems:'flex-start'}}>
                    <HomeCard props={{imagePath:require("../../assets/Capsule.png")}}/>
                    <HomeCard props={{imagePath:require("../../assets/User.png"),pressed:goUser}}/>
                    <HomeCard props={{imagePath:require("../../assets/Folder.png")}}/>
                    <HomeCard props={{imagePath:require("../../assets/Edit.png"),style:{width:50,height:50}}}/>
                    <HomeCard props={{imagePath:require("../../assets/Folder2.png")}}/>
                </View>
            

        </ScrollView>
    )

}

export default Home;