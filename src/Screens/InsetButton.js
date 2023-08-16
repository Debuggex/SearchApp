import { Image, TouchableOpacity } from 'react-native';
import InsetShadow from 'react-native-inset-shadow';



const InsetButton=({props})=>{

    const goBack = () =>{
        props.pressed();
    }

    return(
        <TouchableOpacity onPress={goBack} style={{borderRadius:50,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:30,width:30}}>
                    <InsetShadow containerStyle={{borderRadius:25,backgroundColor:"#F0F0F3",height:"100%",width:"100%"}}
                    bottom={false}
                    right={false}
                    shadowRadius={20}
                    elevation={20}
                    shadowColor="black"
                    shadowOpacity={0.1}
                    children={
                        <InsetShadow containerStyle={{borderRadius:25,height:"100%",width:"100%",backgroundColor:"transparent",borderBottomWidth: 1,borderRightWidth: 1,borderBlockColor:"orange",borderBlockEndColor:"white",borderColor:"white",padding:3,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}
                        top={false}
                        left={false}
                        shadowColor="white"
                        elevation={20}
                        shadowRadius={20}
                        children={
                            <Image source={props.imgSrc} style={{width:20,height:20}}/>
                        }/>
                    }/>
        </TouchableOpacity>
    )

}


export default InsetButton;