import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Input from './Input';
import Button from './Button';


const Signup = ({navigation})=>{

    const emailPH = 'Email Address';
    const passPH = 'Password';
    const nav = ()=>{
        navigation.navigate('Home');
    }
    const {height} = Dimensions.get("screen")
    return (
        <View style={{ padding:30,backgroundColor:"#F0F0F3",paddingTop:60,paddingBottom:60,display:'flex',alignItems:'center',justifyContent:"space-between",height:height}}>
            <View style={{ display:'flex',alignItems:'center',width:"100%"}}>
                <Text style={{fontSize:20,fontWeight:600,marginBottom:40}}>Sign In</Text>
                <Input placeholder={emailPH} />
                <Input placeholder={passPH} isPass={true} />
                <View style={{marginTop:20,width:"100%"}}>
                <Button BtText="Sign In" pressed={nav}/>
                <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:20,marginBottom:20,width:"100%"}}>
                    <View style={{ borderBottomColor: '#DADADA',borderBottomWidth: StyleSheet.hairlineWidth,width:"45%"}}></View>
                    <Text style={{margin:10,color:"#A3ADB2",fontWeight:500,fontSize:13}}>OR</Text>
                    <View style={{ borderBottomColor: '#DADADA',borderBottomWidth: StyleSheet.hairlineWidth,width:"45%"}}></View>
                </View>
                <Button BtText="Continue with Google" />
                </View>
            </View>

            <View style={{display:'flex',alignItems:'center'}}>
                <Text style={{margin:10,color:"#A3ADB2",fontWeight:500,fontSize:13}}>Have an account?</Text>
                <TouchableOpacity onPress={()=>nav()}>
                    <Text style={{fontSize:20,fontWeight:600}}>Create Account</Text>
                </TouchableOpacity>
            </View>
            
        </View>
      );

}

export default Signup;