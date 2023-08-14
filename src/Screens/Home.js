import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import HomeCard from './HomeCard';


const Home=()=>{

    const {height} = Dimensions.get("screen");
    const handlePress =()=>{
        console.log("Handle Pressed");
    }
    return(
        <View style={{ padding:30,backgroundColor:"#F0F0F3",paddingTop:50,paddingBottom:50,display:'flex',justifyContent:"space-between",height:height}}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:"100%",alignItems:'center',marginBottom:30,padding:5}}>
                <Text style={{fontSize:18}}>Health ID</Text>
                <TouchableOpacity style={{backgroundColor:"#E6E7E8",borderRadius:50,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',padding:5}}>
                    <Image source={require('../../assets/Setting.png')} style={{width:25,height:25,marginTop:4}}/>
                </TouchableOpacity>
            </View>
            <View style={{width:"100%",height:"40%",backgroundColor:"#FFF",shadowColor:"#806767",shadowOpacity:0.6,shadowRadius:14,shadowOffset:{width:0,height:4},elevation:4,borderRadius:20,marginBottom:10}}>
                    <Text style={{fontSize:20,lineHeight:30,padding:30,marginBottom:20}}>Hello There</Text>
                    <Image source={require('../../assets/VideoImage.png')} style={{width:"100%"}}/>    
            </View>
            <View style={{height:"50%",flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap',alignItems:'flex-start'}}>
                <HomeCard props={{imagePath:require("../../assets/Capsule.png")}}/>
                <HomeCard props={{imagePath:require("../../assets/User.png")}}/>
                <HomeCard props={{imagePath:require("../../assets/Folder.png")}}/>
                <HomeCard props={{imagePath:require("../../assets/Edit.png"),style:{width:50,height:50},pressed:handlePress()}}/>
            </View>

        </View>
    )

}

export default Home;