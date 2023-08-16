import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import InsetShadow from 'react-native-inset-shadow';



const ConditionInput = ({placeholder,isPass})=>{
    return(<View style={{backgroundColor:"#F0F0F3",width:"100%",marginBottom:20,padding:30,paddingBottom:5,paddingTop:5}}>
    <InsetShadow containerStyle={{borderRadius:25,height:60,backgroundColor:"#F0F0F3"}}
    bottom={false}
    right={false}
    shadowColor="grey"
    elevation={8}
    shadowRadius={8}
    shadowOffset={8}
    children={
      <InsetShadow containerStyle={{borderRadius:25,height:"100%",width:"100%",backgroundColor:"transparent",borderBottomWidth: 1,borderRightWidth: 1,borderBlockColor:"orange",borderBlockEndColor:"white",borderColor:"white",paddingLeft:20}}
      top={false}
      left={false}
      shadowColor="white"
      elevation={20}
      shadowRadius={20}
      >
        <View style={{ display:'flex',flexDirection:'row', justifyContent: 'flex-start', alignItems: 'center',height:"100%"}}>
        <TextInput secureTextEntry={isPass} autoCorrect={false} placeholder={placeholder} style={{width:"80%",color:"#A3ADB2",fontSize:16}}/>
      </View>
      </InsetShadow>
      
    }

    >
      
    </InsetShadow>
  </View>)
}

export default ConditionInput;