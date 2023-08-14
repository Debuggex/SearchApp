import { Image, Text, TouchableOpacity, View } from "react-native";



const HomeCard=({props})=>{

    return(
        <TouchableOpacity onPress={props.pressed} style={{borderRadius:20,height:"40%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"48%",margin:1,marginBottom:15,backgroundColor:"#FFF",shadowColor:"#806767",shadowOpacity:0.6,shadowRadius:14,shadowOffset:{width:0,height:4},elevation:4}}>
            <Image source={props.imagePath} style={props.style}/>
        </TouchableOpacity>
    )

}

export default HomeCard;