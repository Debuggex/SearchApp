import { Image, Text, TouchableOpacity, View } from "react-native";



const HomeCard=({props})=>{

    const handlePress=()=>{
        props.pressed();
    }

    return(
        <TouchableOpacity onPress={handlePress} style={{borderRadius:20,height:155,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"48%",margin:1,marginBottom:15,backgroundColor:"#F0F0F3",shadowColor:"#AEAEC0",shadowOpacity:0.25,elevation:5,shadowRadius:5,shadowOffset:{width:5,height:5}}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#F0F0F3",width:"100%",height:"100%",shadowColor:"#FBFFFF",shadowOpacity:0.5,elevation:5,shadowRadius:5,shadowOffset:{width:-5,height:-5},borderRadius:20}}>
                <Image source={props.imagePath} style={props.style}/>
            </View>
        </TouchableOpacity>
    )

}

export default HomeCard;