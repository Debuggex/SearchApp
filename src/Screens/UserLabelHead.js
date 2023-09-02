import { Image, Text, View } from "react-native";



const UserLabelHead =({props, SvgIcon})=>{
    return(
        <View style={{width:"100%"}}>
            <View style={{width:"100%",display:"flex",flexDirection:"row"}}>
                <View style={{marginRight:10}}>
                <SvgIcon/>
                </View>
                <Text style={{fontSize:14,fontWeight:400}}>{props.label}</Text>
            </View>   
        </View>
    )
}


export default UserLabelHead;