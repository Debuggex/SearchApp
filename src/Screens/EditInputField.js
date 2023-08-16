import { ScrollView, Text, TextInput, View } from "react-native";
import EditInput from "./EditInput";
import InsetShadow from "react-native-inset-shadow";



const EditInputField=({props})=>{

    return(
    <ScrollView id={props.id} contentContainerStyle={{backgroundColor:"#F0F0F3",width:"100%",padding:30,paddingBottom:5,paddingTop:5}}>
        <InsetShadow containerStyle={{borderRadius:25,height:60,backgroundColor:"#F0F0F3"}}
        bottom={false}
        right={false}
        shadowColor="grey"
        
        elevation={8}
        shadowRadius={8}
        shadowOffset={8}
        >
            <View style={{height:"100%",width:"100%",backgroundColor:"transparent"}}>
                <InsetShadow containerStyle={{borderRadius:25,height:"100%",width:"100%",backgroundColor:"transparent",borderBottomWidth: 1,borderRightWidth: 1,borderBlockColor:"orange",borderBlockEndColor:"white",borderColor:"white",paddingLeft:20,paddingRight:20}}
                top={false}
                left={false}
                shadowOffset={10}
                shadowColor="white"
                >
                    <View style={{ display:'flex',flexDirection:'row', justifyContent: 'space-between', alignItems: 'center',height:"100%"}}>
                                <Text style={{fontSize:16,fontWeight:400}}>{props.label}</Text>
                                <EditInput placeholder={props.placeholder}/>
                    </View>
                </InsetShadow>
            </View>
      
        </InsetShadow>
    </ScrollView>
    )

}

export default EditInputField;