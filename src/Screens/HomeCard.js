import { Image, Text, TouchableOpacity, View } from "react-native";



const HomeCard=({props})=>{

    const handlePress=()=>{
        props.pressed();
    }

    return(
        <TouchableOpacity onPress={handlePress} style={{borderRadius:20,height:"40%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"48%",margin:1,marginBottom:15,backgroundColor:"#F0F0F3",shadowColor:"#AEAEC0",shadowOpacity:0.25,elevation:20,shadowRadius:20,shadowOffset:{width:5,height:5}}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#F0F0F3",width:"100%",shadowColor:"#FFFFFF",shadowOpacity:0.25,elevation:20,shadowRadius:20,shadowOffset:{width:-5,height:-5}}}>
                <Image source={props.imagePath} style={props.style}/>
            </View>
        </TouchableOpacity>
    )

}

export default HomeCard;