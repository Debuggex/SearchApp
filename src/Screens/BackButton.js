import { Image, TouchableOpacity, View } from "react-native";




const BackButton = ({props})=>{

    const goBack = () =>{
        props.pressed();
    }

    return(
        <TouchableOpacity onPress={goBack} style={{backgroundColor:"#E6E7E8",borderRadius:50,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',padding:8}}>
            {/* <Image source={require('../../assets/Vector.png')} style={{width:10,height:10}}/> */}
        </TouchableOpacity>
    )

}


export default BackButton;