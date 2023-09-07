import { Text } from "react-native";
import context from "./Context/ContextProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { useContext } from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import { ScrollView } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";




const Cards = ({navigation}) =>{
    const { cards, setCards, editCardIndex, setEditCardIndex } = useContext(context);

    const goEditCard=(index)=>{
        setEditCardIndex(index);
        navigation.navigate("AddCard");
    }
    return(
        <SafeAreaView style={{
            backgroundColor: "#F0F0F3",
            paddingBottom: 50,
            display: "flex",
            height: "100%",
        }}>
            {cards.length==0 && <View style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", }}>
                <TouchableOpacity
                    onPress={()=>{navigation.navigate("AddCard")}}
                    style={{
                        shadowColor: "#AEAEC0",
                        shadowOpacity: 0.25,
                        elevation: 5,
                        shadowRadius: 5,
                        shadowOffset: { width: 5, height: 5 },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#F0F0F3",
                        borderRadius: 100,
                        marginBottom: 40,
                    }}
                >
                    <View
                        style={{
                            shadowColor: "#FFFFFF",
                            shadowOpacity: 0.25,
                            elevation: 5,
                            margin: 10,
                            marginBottom: 5,
                            marginTop: 5,
                            shadowRadius: 5,
                            shadowOffset: { width: -5, height: -5 },
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            padding: 5,
                            paddingRight: 20,
                            paddingLeft: 20,
                            alignItems: "center",
                            backgroundColor: "#F0F0F3",
                            borderRadius: 100,
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: 400 }}>
                            Add a Card
                        </Text>
                    </View>
                </TouchableOpacity>
                <Text
                    style={{
                        color: "#A3ADB2",
                        fontWeight: 500,
                        fontSize: 14,
                        textAlign: "center"
                    }}
                >
                    Keep your insurance info here
                </Text>
                
            </View>}

            {cards.length != 0 && 
            <ScrollView contentContainerStyle={{padding: 30, paddingTop: useHeaderHeight() + 40, justifyContent: 'space-between', alignItems: 'flex-start' }}>
            
            {cards.map((data,index)=>(
                <TouchableOpacity onPress={()=>goEditCard(index)} key={index} style={{ padding: 20, backgroundColor: data.cardColor, borderRadius: 20, display: "flex", flexDirection: "row",width:"100%",marginBottom:20 }}>
                    <View style={{ width: "48%" }}>
                        <Text style={{ fontSize: 16, marginBottom: 10, color: data.cardColor == "#FFFFFF" ?"#34393A":"#FFFFFF" }}>{data.title1}</Text>
                        <Text style={{ fontSize: 12, marginBottom: 10, color: data.cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }}>{data.input1}</Text>
                        <Text style={{ fontSize: 16, marginBottom: 10, color: data.cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }}>{data.title2}</Text>
                        <Text style={{ fontSize: 12, marginBottom: 10, color: data.cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }}>{data.input2}</Text>
                        <Text style={{ fontSize: 16, marginBottom: 10, color: data.cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }}>{data.title3}</Text>
                        <Text style={{ fontSize: 12, marginBottom: 10, color: data.cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }}>{data.input3}</Text>

                    </View>
                    <View style={{ display: "flex", justifyContent: "center", width: "48%" }}>
                        <Text style={{ fontSize: 16, marginBottom: 10, color: data.cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }}>{data.title4}</Text>
                        <Text style={{ fontSize: 12, marginBottom: 10, color: data.cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }}>{data.input4}</Text>
                    </View>

                </TouchableOpacity>
            ))}
            
            </ScrollView>
            }

            
        </SafeAreaView>
    )

}


export default Cards;