import { Text, View } from "react-native";


const Label = ({props})=>{

    return(
        <View style={{paddingBottom:10,paddingTop:10,display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
            <Text style={{fontSize:14,fontWeight:500,color:"#A3ADB2"}}>{props.label}</Text>
            <Text style={{fontSize:13,fontWeight:500,color:"#A3ADB2"}}>{props.value}</Text>
        </View>
    )

}


export default Label;