import { Button, Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import BackButton from "./BackButton";
import UserLabelHead from "./UserLabelHead";
import Label from './Label';
import InsetButton from "./InsetButton";
import InsetShadow from "react-native-inset-shadow";
import Chart from './../../Icons/Chart';
import Condition from './../../Icons/Condition';
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";



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
        Svg: Chart,
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
        Svg: Condition,
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

    const headerHeight = useHeaderHeight();
    return(
        <SafeAreaView style={{height:"100%"}}>
        <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{backgroundColor:"#F0F0F3",paddingTop:headerHeight,paddingBottom:30,display:'flex',justifyContent:"space-between"}}>
            <View style={{width:"100%",height:"40%",borderRadius:20,marginBottom:10}}>
            </View>
            <View style={{paddingTop:30,height:height}}>
                {datas.map((data)=>(
                            <View style={{width:"100%",padding:30,paddingBottom:5,paddingTop:5,marginBottom:10}}>
                                <UserLabelHead props={{label:data.label,labels:data}} SvgIcon={data.Svg}/>
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
        </SafeAreaView>
    )
}

export default User;