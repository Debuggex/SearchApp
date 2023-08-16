import { Image, Text, View } from "react-native";



const UserLabelHead =({props})=>{
    return(
        <View style={{width:"100%"}}>
            <View style={{width:"100%",display:"flex",flexDirection:"row"}}>
                <Image source={props.imageSrc} style={{marginRight:10}}/>
                <Text style={{fontSize:14,fontWeight:400}}>{props.label}</Text>
            </View>   
        </View>
    )
}


export default UserLabelHead;