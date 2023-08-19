import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import InsetShadow from 'react-native-inset-shadow';


const Input = ({imagePath,placeholder,isPass})=>{


    return(<View style={{backgroundColor:"#F0F0F3",width:"100%",marginBottom:20}}>
    <InsetShadow containerStyle={{borderRadius:25,height:60,backgroundColor:"#F0F0F3"}}
    bottom={false}
        right={false}
        shadowColor="grey"
        shadowOpacity={0.3}
        elevation={10}
        shadowRadius={15}
        shadowOffset={20}
        
    children={
      <InsetShadow containerStyle={{borderRadius:25,height:"100%",width:"100%",backgroundColor:"transparent",paddingLeft:20}}
      top={false}
                left={false}
                shadowOffset={-15}
                shadowOpacity={1}
                shadowRadius={15}
                elevation={20}
                shadowColor="white"
      >
        <View style={{ display:'flex',flexDirection:'row', justifyContent: 'flex-start', alignItems: 'center',height:"100%",width:"100%"}}>
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