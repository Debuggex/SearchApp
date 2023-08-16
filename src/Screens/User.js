import { Button, Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import BackButton from "./BackButton";
import UserLabelHead from "./UserLabelHead";
import Label from './Label';
import InsetButton from "./InsetButton";
import InsetShadow from "react-native-inset-shadow";



const User = ({navigation})=>{

    const {height} = Dimensions.get("window");
    const goBack = () =>{
        navigation.navigate('Home');
    }
    const goEdit=()=>{
        navigation.navigate('EditUser');
    }

    const datas=[
        {label:"About Me",
        imageSrc: require('../../assets/Chart.png'),
        labels:[
            {label:"FirstName",
            value:"John"    
        },
        {label:"Last Name",
            value:"John"    
        },
        {label:"Phone Number",
            value:"John"    
        }
        ]
    }
    ,
    {label:"Conditions",
        imageSrc: require('../../assets/Document.png'),
         labels:[
            {label:"FirstName",
            value:"John"    
        },
        {label:"Last Name",
            value:"John"    
        },
        {label:"Phone Number",
            value:"John"    
        }
        ]
    }
    ]
    return(
        <ScrollView contentContainerStyle={{backgroundColor:"#F0F0F3",paddingTop:30,paddingBottom:30,display:'flex',justifyContent:"space-between"}}>
            <View style={{display:'flex',padding:30,flexDirection:'row',justifyContent:'space-between',width:"100%",alignItems:'center',marginBottom:30}}>
                <InsetButton props={{pressed:goBack,imgSrc:require('../../assets/Back.png')}}/>
                <Text style={{fontSize:18}}>Health ID</Text>
                <TouchableOpacity onPress={()=>goEdit()} style={{shadowColor:"#AEAEC0",shadowOpacity:0.25,elevation:20,shadowRadius:20,shadowOffset:{width:5,height:5},display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                    <View style={{shadowColor:"#FFFFFF",shadowOpacity:0.25,elevation:20,shadowRadius:20,shadowOffset:{width:-5,height:-5},display:"flex",flexDirection:"row",justifyContent:"center",padding:5,paddingRight:20,paddingLeft:20,alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                        <Text style={{fontSize:16,fontWeight:400,color:"#2684FF"}}>Edit</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{width:"100%",height:"40%",borderRadius:20,marginBottom:10}}>
            </View>
            
            <InsetShadow shadowColor="grey" elevation={8} shadowRadius={8} shadowOpacity={0.1} left={false} right={false} containerStyle={{paddingTop:30,height:height,borderRadius:20}}
            children={datas.map((data)=>(
                            <View style={{width:"100%",padding:30,paddingBottom:5,paddingTop:5,marginBottom:10}}>
                                <UserLabelHead props={{label:data.label,imageSrc:data.imageSrc,labels:data}}/>
                                {data.labels.map((data)=><Label props={{label:data.label,value:data.value}}/> )}
                            </View> 
                ))}
            >
                </InsetShadow>

            
            
            
        </ScrollView>
    )
}

export default User;