import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import InsetShadow from 'react-native-inset-shadow';


const Input = ({imagePath,placeholder,isPass})=>{


    return(<View style={{backgroundColor:"#F0F0F3",width:"100%",marginBottom:20}}>
    <InsetShadow containerStyle={{borderRadius:25,height:60,backgroundColor:"#F0F0F3"}}
    bottom={false}
    right={false}
    shadowRadius={20}
    elevation={20}
    shadowColor="black"
    shadowOpacity={0.1}
    children={
      <InsetShadow containerStyle={{borderRadius:25,height:"100%",width:"100%",backgroundColor:"transparent",borderBottomWidth: 1,borderRightWidth: 1,borderBlockColor:"orange",borderBlockEndColor:"white",borderColor:"white",paddingLeft:20}}
      top={false}
      left={false}
      shadowColor="white"
      elevation={20}
      shadowRadius={20}
      >
        <View style={{ display:'flex',flexDirection:'row', justifyContent: 'flex-start', alignItems: 'center',height:"100%"}}>
        <Image style={{marginRight:10}} source={imagePath}/>
        <TextInput secureTextEntry={isPass} autoCorrect={false} placeholder={placeholder} style={{width:"80%",color:"#A3ADB2"}}/>
      </View>
      </InsetShadow>
      
    }

    >
      
    </InsetShadow>
  </View>)
}

export default Input;