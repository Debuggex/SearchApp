import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import InsetShadow from 'react-native-inset-shadow';



const ConditionInput = ({placeholder,isPass,value,setValue,id})=>{
    return(<View style={{backgroundColor:"#F0F0F3",width:"100%",marginBottom:20,padding:30,paddingBottom:5,paddingTop:5}}>
    <InsetShadow containerStyle={{borderRadius:20,height:50,backgroundColor:"#F0F0F3"}}
   bottom={false}
        right={false}
        shadowColor="#AEAEC0"
        shadowOpacity={0.5}
        elevation={25}
        shadowRadius={15}
        shadowOffset={8}
    children={
      <InsetShadow containerStyle={{ borderRadius: 20,height:"100%",width:"100%",backgroundColor:"transparent",paddingLeft:20}}
      top={false}
                left={false}
                shadowOffset={10}
                shadowOpacity={1}
                shadowRadius={15}
                elevation={10}
                shadowColor="white"
      >
        <View style={{ display:'flex',flexDirection:'row', justifyContent: 'flex-start', alignItems: 'center',height:"100%"}}>
        <TextInput secureTextEntry={isPass} autoCorrect={false} value={value} onChangeText={(text)=>{setValue(text,id)}} placeholder={placeholder} style={{width:"80%",color:"#A3ADB2",fontSize:16}}/>
      </View>
      </InsetShadow>
      
    }

    >
      
    </InsetShadow>
  </View>)
}

export default ConditionInput;