import { TextInput } from "react-native";



const EditInput=({placeholder})=>{
    return(
        <TextInput style={{fontSize:16,color:"#898A8D",widht:"50%"}} textAlign="right" placeholder={placeholder}/>
    )
}

export default EditInput;