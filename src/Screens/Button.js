import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"




const Button = ({BtText,imgPath})=>{
    return(
        <TouchableOpacity style={{shadowColor:"#AEAEC0",shadowOpacity:0.25,elevation:20,shadowRadius:20,shadowOffset:{width:5,height:5},display:"flex",justifyContent:"center",alignItems:"center",width:"100%",backgroundColor:"#FFF",borderRadius:100,marginBottom:20}}>
            <View style={{shadowColor:"#FFFFFF",shadowOpacity:0.25,elevation:20,shadowRadius:20,shadowOffset:{width:-5,height:-5},display:"flex",flexDirection:"row",justifyContent:"center",height:60,alignItems:"center",width:"100%",backgroundColor:"#F0F0F3",borderRadius:100}}>
                    {imgPath!=null && <Image source={imgPath} style={{width:20,height:20,marginRight:10}}/>}
                    <Text style={{fontWeight:600,fontSize:16}}>{BtText}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;