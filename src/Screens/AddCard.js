import context from "./Context/ContextProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import { Text } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { TextInput } from "react-native";


const AddCard = ({ navigation }) =>{

    const { cards, setCards,editCardIndex,setEditCardIndex,title1, setTitle1, title2, setTitle2, title3, setTitle3, title4, setTitle4, input1, setInput1, input2, setInput2, input3, setInput3, input4, setInput4, cardColor, setCardColor } = useContext(context);

    const [isBlack,setIsBlack] = useState(true);
    const [isWhite,setIsWhite] = useState(true);
    const [selectBlack,setSelectBlack] = useState(false);
    const [selectWhite, setSelectWhite] = useState(false);
    
    const showBlack = ()=>{
        setIsBlack(false);
        setIsWhite(true);
        setSelectBlack(true);
        setSelectWhite(false);
        setCardColor('#34393A')
    }

    const showWhite = () => {
        setIsBlack(true);
        setIsWhite(false);
        setSelectBlack(false);
        setSelectWhite(true);
        setCardColor("#FFFFFF")
    }

    let obj = {};

    useEffect(()=>{
        if(editCardIndex!=undefined && editCardIndex!=null){
            obj = cards[editCardIndex];
            setTitle1(obj.title1);
            setTitle2(obj.title2);
            setTitle3(obj.title3);
            setTitle4(obj.title4);
            setInput1(obj.input1);
            setInput2(obj.input2);
            setInput3(obj.input3);
            setInput4(obj.input4);
            setCardColor(obj.cardColor);
        }
    },[editCardIndex])


    return(
        <SafeAreaView style={{ height: "100%", backgroundColor:"#F0F0F3"}}>
            <View style={{ padding: 30, height: "100%", backgroundColor: "#F0F0F3", paddingTop: useHeaderHeight() + 40 }}>
                {selectWhite &&<View style={{ padding: 20, backgroundColor: "#FFFFFF", borderRadius: 20,display:"flex",flexDirection:"row" }}>
                    <View style={{ width: "48%" }}>
                        <TextInput style={{ fontSize: 16, marginBottom: 10 }} value={title1} onChangeText={(text)=>{setTitle1(text)}} placeholder="Title Goes Here" placeholderTextColor="#000000" />
                        <TextInput style={{ fontSize: 12, marginBottom: 10 }} value={input1} onChangeText={(text) => { setInput1(text) }} placeholder="Input Goes Here" placeholderTextColor="#A3ADB2"  />
                        <TextInput style={{ fontSize: 16, marginBottom: 10 }} value={title2} onChangeText={(text) => { setTitle2(text) }} placeholder="Title Goes Here" placeholderTextColor="#000000" />
                        <TextInput style={{ fontSize: 12, marginBottom: 10 }} value={input2} onChangeText={(text) => { setInput2(text) }} placeholder="Input Goes Here" placeholderTextColor="#A3ADB2" />
                        <TextInput style={{ fontSize: 16, marginBottom: 10 }} value={title3} onChangeText={(text) => { setTitle3(text) }} placeholder="Title Goes Here" placeholderTextColor="#000000" />
                        <TextInput style={{ fontSize: 12, marginBottom: 10 }} value={input3} onChangeText={(text) => { setInput3(text) }} placeholder="Input Goes Here" placeholderTextColor="#A3ADB2" />

                    </View>
                    <View style={{display:"flex",justifyContent:"center",width:"48%"}}>
                        <TextInput style={{ fontSize: 16, marginBottom: 10 }} value={title4} onChangeText={(text) => { setTitle4(text) }} placeholder="Title Goes Here" placeholderTextColor="#000000" />
                        <TextInput style={{ fontSize: 12, marginBottom: 10 }} value={input4} onChangeText={(text) => { setInput4(text) }} placeholder="Input Goes Here" placeholderTextColor="#A3ADB2" />
                    </View>
                    
                </View>}

                {selectBlack && <View style={{ padding: 20, backgroundColor: "#34393A", borderRadius: 20, display: "flex", flexDirection: "row" }}>
                    <View style={{width:"48%"}}>
                        <TextInput style={{ fontSize: 16, marginBottom: 10, color:"#FFFFFF" }} value={title1} onChangeText={(text) => { setTitle1(text) }} placeholder="Title Goes Here" placeholderTextColor="#FFFFFF" />
                        <TextInput style={{ fontSize: 12, marginBottom: 10, color: "#FFFFFF" }} value={input1} onChangeText={(text) => { setInput1(text) }} placeholder="Input Goes Here" placeholderTextColor="#A3ADB2" />
                        <TextInput style={{ fontSize: 16, marginBottom: 10, color: "#FFFFFF" }} value={title2} onChangeText={(text) => { setTitle2(text) }} placeholder="Title Goes Here" placeholderTextColor="#FFFFFF" />
                        <TextInput style={{ fontSize: 12, marginBottom: 10, color: "#FFFFFF" }} value={input2} onChangeText={(text) => { setInput2(text) }} placeholder="Input Goes Here" placeholderTextColor="#A3ADB2" />
                        <TextInput style={{ fontSize: 16, marginBottom: 10, color: "#FFFFFF" }} value={title3} onChangeText={(text) => { setTitle3(text) }} placeholder="Title Goes Here" placeholderTextColor="#FFFFFF" />
                        <TextInput style={{ fontSize: 12, marginBottom: 10, color: "#FFFFFF" }} value={input3} onChangeText={(text) => { setInput3(text) }} placeholder="Input Goes Here" placeholderTextColor="#A3ADB2" />

                    </View>
                    <View style={{ display: "flex", justifyContent: "center", width:"48%" }}>
                        <TextInput style={{ fontSize: 16, marginBottom: 10, color: "#FFFFFF" }} value={title4} onChangeText={(text) => { setTitle4(text) }} placeholder="Title Goes Here" placeholderTextColor="#FFFFFF" />
                        <TextInput style={{ fontSize: 12, marginBottom: 10, color: "#FFFFFF" }} value={input4} onChangeText={(text) => { setInput4(text) }} placeholder="Input Goes Here" placeholderTextColor="#A3ADB2" />
                    </View>

                </View>}

                {editCardIndex != undefined && editCardIndex != null && <View style={{ padding: 20, backgroundColor: cardColor, borderRadius: 20, display: "flex", flexDirection: "row" }}>
                    <View style={{ width: "48%" }}>
                        <TextInput style={{ fontSize: 16, marginBottom: 10, color: cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }} value={title1} onChangeText={(text) => { setTitle1(text) }} placeholder="Title Goes Here" placeholderTextColor={cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF"} />
                        <TextInput style={{ fontSize: 12, marginBottom: 10, color: cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }} value={input1} onChangeText={(text) => { setInput1(text) }} placeholder="Input Goes Here" placeholderTextColor="#A3ADB2" />
                        <TextInput style={{ fontSize: 16, marginBottom: 10, color: cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }} value={title2} onChangeText={(text) => { setTitle2(text) }} placeholder="Title Goes Here" placeholderTextColor={cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF"} />
                        <TextInput style={{ fontSize: 12, marginBottom: 10, color: cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }} value={input2} onChangeText={(text) => { setInput2(text) }} placeholder="Input Goes Here" placeholderTextColor="#A3ADB2" />
                        <TextInput style={{ fontSize: 16, marginBottom: 10, color: cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }} value={title3} onChangeText={(text) => { setTitle3(text) }} placeholder="Title Goes Here" placeholderTextColor={cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF"} />
                        <TextInput style={{ fontSize: 12, marginBottom: 10, color: cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }} value={input3} onChangeText={(text) => { setInput3(text) }} placeholder="Input Goes Here" placeholderTextColor="#A3ADB2" />

                    </View>
                    <View style={{ display: "flex", justifyContent: "center", width: "48%" }}>
                        <TextInput style={{ fontSize: 16, marginBottom: 10, color: cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }} value={title4} onChangeText={(text) => { setTitle4(text) }} placeholder="Title Goes Here" placeholderTextColor={cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF"} />
                        <TextInput style={{ fontSize: 12, marginBottom: 10, color: cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }} value={input4} onChangeText={(text) => { setInput4(text) }} placeholder="Input Goes Here" placeholderTextColor="#A3ADB2" />
                    </View>

                </View>}
            </View>

            
            <Modal isVisible={true} hasBackdrop={false} coverScreen={false} style={{ margin: 0, marginRight: 20, marginLeft: 20 }}>
                {(editCardIndex==undefined || editCardIndex == null) && <TouchableOpacity onPress={showWhite} style={{ backgroundColor: "#FFFFFF", width: "100%", position: "absolute", bottom: 45, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, height: 80 }}><Text style={{ fontSize: 18 }}>Insurance</Text></TouchableOpacity>}
                {(editCardIndex == undefined || editCardIndex == null) && <TouchableOpacity onPress={showBlack} style={{ backgroundColor: "#34393A", width: "100%", position: "absolute", bottom: -15, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, height: 80 }}><Text style={{ color: "#FFFFFF", fontSize: 18 }}>Insurance</Text></TouchableOpacity>}
            </Modal>
        </SafeAreaView>
    )
}


export default AddCard;