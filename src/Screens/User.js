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
            <View style={{width:"100%",height:"40%",borderRadius:20,marginBottom:10}}>
            </View>
            <View style={{paddingTop:30,height:height}}>
                {datas.map((data)=>(
                            <View style={{width:"100%",padding:30,paddingBottom:5,paddingTop:5,marginBottom:10}}>
                                <UserLabelHead props={{label:data.label,imageSrc:data.imageSrc,labels:data}}/>
                                {data.labels.map((data)=><Label props={{label:data.label,value:data.value}}/> )}
                            </View> 
                ))}
            </View>
            {/* <InsetShadow shadowColor="#AEAEC0" elevation={8} shadowRadius={15} shadowOpacity={0.5} left={false} right={false} containerStyle={{paddingTop:30,height:height}}
            children={datas.map((data)=>(
                            <View style={{width:"100%",padding:30,paddingBottom:5,paddingTop:5,marginBottom:10}}>
                                <UserLabelHead props={{label:data.label,imageSrc:data.imageSrc,labels:data}}/>
                                {data.labels.map((data)=><Label props={{label:data.label,value:data.value}}/> )}
                            </View> 
                ))}
            >
                </InsetShadow> */}

            
            
            
        </ScrollView>
    )
}

export default User;