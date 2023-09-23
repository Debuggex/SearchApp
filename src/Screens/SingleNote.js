import { Text, TouchableOpacity, View } from "react-native";



const SingleNote = ({props,navigation}) => {
    const handlePress = () =>{
        props.pressed();
    }
    return(
        <TouchableOpacity style={{width:"50%",paddingTop:10,paddingBottom:10,backgroundColor:"#F0F0F3"}} onPress={handlePress}>
            <Text numberOfLines={1} style={{fontSize:20,fontWeight:400,marginBottom:10}}>{props.heading}</Text>
            {props.note != null && props.note!=undefined && props.note!="" &&<Text style={{color:"#A3ADB2",fontWeight:500,fontSize:14,marginBottom:40}} numberOfLines={1}>{props.note}</Text>}
        </TouchableOpacity>
    )
}

export default SingleNote;