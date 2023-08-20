import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./Signup";
import Signin from "./Signin";
import Button from "./Button";
import Home from "./Home";
import User from "./User";
import HomeCard from "./HomeCard";
import EditUser from "./EditUser";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import InsetButton from "./InsetButton";
import Notes from "./Notes";
import SingleNote from "./SingleNote";
import { useEffect, useState } from "react";
import AddNote from "./AddNote";


const Stack = createNativeStackNavigator();
  

const Navigation = ({navigation})=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Signup">
                <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}}></Stack.Screen> 
                <Stack.Screen name="Home" component={Home} options={{
                    header:()=>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:"100%",alignItems:'center',padding:30,paddingTop:50,backgroundColor:"#F0F0F3"}}>
                        <TouchableOpacity style={{shadowColor:"#AEAEC0",shadowOpacity:0.5,elevation:5,shadowRadius:10,shadowOffset:{width:5,height:5},display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                            <View style={{shadowColor:"#FFFFFF",shadowOpacity:1,elevation:5,shadowRadius:10,shadowOffset:{width:-5,height:-5},display:"flex",flexDirection:"row",justifyContent:"center",padding:5,paddingRight:20,paddingLeft:20,alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                                <Text style={{fontSize:18,lineHeight:30}}>Health ID</Text>
                            </View>
                        </TouchableOpacity>
                        <InsetButton props={{imgSrc:require('../../assets/Setting.png')}}/>
                    </View>
                }}></Stack.Screen> 
                <Stack.Screen name="User" component={User} options={{
                    header:({navigation})=>
                    <View style={{display:'flex',padding:30,flexDirection:'row',justifyContent:'space-between',width:"100%",alignItems:'center',paddingTop:50,backgroundColor:"#F0F0F3"}}>
                        <InsetButton props={{pressed:()=>{navigation.navigate('Home')},imgSrc:require('../../assets/Back.png')}}/>
                        <Text style={{fontSize:18}}>Health ID</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('EditUser')} style={{shadowColor:"#AEAEC0",shadowOpacity:0.5,elevation:5,shadowRadius:20,shadowOffset:{width:5,height:5},display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                            <View style={{shadowColor:"#FFFFFF",shadowOpacity:1,elevation:5,shadowRadius:20,shadowOffset:{width:-5,height:-5},display:"flex",flexDirection:"row",justifyContent:"center",padding:5,paddingRight:20,paddingLeft:20,alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                                <Text style={{fontSize:16,fontWeight:400,color:"#2684FF"}}>Edit</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                }}></Stack.Screen>  
                <Stack.Screen name="HomeCard" component={HomeCard} options={{headerShown:false}}></Stack.Screen>  
                <Stack.Screen name="EditUser" component={EditUser} options={{
                    title:'',
                    headerStyle:{
                        backgroundColor:'#F0F0F3'
                    },
                    header:({navigation})=>
                        <View style={{display:'flex',padding:30,flexDirection:'row',justifyContent:'space-between',width:"100%",alignItems:'center',paddingTop:50,backgroundColor:"#F0F0F3"}}>
                            <InsetButton props={{pressed:()=>{navigation.navigate('User')},imgSrc:require('../../assets/Back.png')}}/>
                            <TouchableOpacity onPress={()=>{navigation.navigate('User')}} style={{shadowColor:"#AEAEC0",shadowOpacity:0.25,elevation:5,shadowRadius:5,shadowOffset:{width:5,height:5},display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                                <View style={{shadowColor:"#FFFFFF",shadowOpacity:0.25,elevation:5,shadowRadius:5,shadowOffset:{width:-5,height:-5},display:"flex",flexDirection:"row",justifyContent:"center",padding:5,paddingRight:20,paddingLeft:20,alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                                    <Text style={{fontSize:16,fontWeight:400,color:"#2684FF"}}>Save</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    
                    }}></Stack.Screen>  
                    <Stack.Screen name="Notes" component={Notes} options={{
                        headerStyle:{backgroundColor:"#F0F0F3"},
                        header:({navigation})=>
                        <View style={{display:'flex',padding:30,flexDirection:'row',justifyContent:'space-between',width:"100%",alignItems:'center',paddingTop:50,backgroundColor:"#F0F0F3"}}>
                            <InsetButton props={{pressed:()=>{navigation.navigate('Home')},imgSrc:require('../../assets/Back.png')}}/>
                            <Text style={{fontSize:18,fontWeight:400}}>Notes</Text>
                            <View style={{display:"flex",flexDirection:"row",alignItems:"center",width:"22%",justifyContent:"space-between"}}>
                                <InsetButton props={{pressed:()=>{navigation.navigate('AddNote')},imgSrc:require('../../assets/Plus.png')}}/>
                                <InsetButton props={{pressed:()=>{navigation.navigate('User')},imgSrc:require('../../assets/Search.png')}}/>
                            </View>
                        </View>
                    }}></Stack.Screen> 
                    <Stack.Screen name="AddNote" component={AddNote} options={{
                        headerStyle:{backgroundColor:"#F0F0F3"},
                        header:({navigation,route})=>
                        {
                            const [inputVal, setInputVal] = useState('');
                            const [index,setIndex] = useState(undefined);
                            useEffect(()=>{
                                console.log("on Add Note =>",route);
                                if(route.params!=undefined){
                                    setInputVal(route.params.heading);
                                }
                                if(route.params?.key!=undefined){
                                setIndex(route.params.key);
                                console.log("index =>",index+1);
                                }
                            },[route])

                            return(<View style={{display:'flex',padding:30,flexDirection:'row',justifyContent:'space-between',width:"100%",alignItems:'center',paddingTop:50,backgroundColor:"#F0F0F3"}}>
                            <InsetButton props={{pressed:()=>{navigation.navigate('Notes')},imgSrc:require('../../assets/Back.png')}}/>
                            <TextInput style={{fontSize:18}} placeholderTextColor="#898A8D" value={inputVal} onChangeText={(text)=>{setInputVal(text)}} placeholder="Title"/>
                            <TouchableOpacity onPress={()=>{
                                navigation.navigate('Notes',{
                                    key:index,
                                    heading:inputVal,
                                    note:global.note
                                });
                                
                            }}
                                 style={{shadowColor:"#AEAEC0",shadowOpacity:0.25,elevation:5,shadowRadius:5,shadowOffset:{width:5,height:5},display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                                <View style={{shadowColor:"#FFFFFF",shadowOpacity:0.25,elevation:5,shadowRadius:5,shadowOffset:{width:-5,height:-5},display:"flex",flexDirection:"row",justifyContent:"center",padding:5,paddingRight:20,paddingLeft:20,alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                                    <Text style={{fontSize:16,fontWeight:400,color:"#2684FF"}}>Done</Text>
                                </View>
                            </TouchableOpacity>
                        </View>)}
                    }}></Stack.Screen>  
                       
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;

