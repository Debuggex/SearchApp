import { TextInput } from "react-native";



const EditInput=({placeholder,value,setValue,id})=>{
    return(
        <TextInput style={{fontSize:16,color:"#898A8D",widht:"50%",height:50}} value={value}  textAlign="right" placeholder={placeholder} onChangeText={(text)=>{
            if(id !=undefined && id !=null){
                setValue(text,id);
            }else {setValue(text)}
        }}/>
    )
}

export default EditInput;