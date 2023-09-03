import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { Dimensions } from "react-native";
import { Text } from "react-native"
import context from "./Context/ContextProvider";
import { useContext, useState } from "react";
import SingleNote from "./SingleNote";
import Modal from "react-native-modal";
import InsetShadow from "react-native-inset-shadow";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";



const Sharing = ({navigation}) =>{

    const {height} = Dimensions.get("window");
    const {isHealthModal,setIsHealthModal,emailList,setEmailList} = useContext(context);
    const [isDelete,setIsDelete] = useState(false);
    const [deleteIndex,setDeleteIndex] = useState(0);

    const showModal = () =>{
        setIsDelete(!isDelete);
    }

    const deleteEmail = () =>{
        let arr = emailList;
        arr.splice(deleteIndex,1);
        setEmailList(arr);
        showModal();
    }

    const selectEmail = (index) =>{
        showModal();
        setDeleteIndex(index);
    }

    return(
        <ScrollView contentContainerStyle={{ backgroundColor:"#F0F0F3",padding:30,paddingTop:0,display:'flex',height:height}}>
                <Modal isVisible={isDelete} style={{ flex: 1 }} backdropOpacity={0.4}>
                <View style={{ backgroundColor: "#F0F0F3", borderRadius: 20, position:"absolute",bottom:0,width:"100%" }}>
                    <TouchableOpacity
                        onPress={() => {
                          deleteEmail();
                        }}
                        style={{
                        margin: 30,
                        marginBottom: 5,
                        shadowColor: "#AEAEC0",
                        shadowOpacity: 0.25,
                        elevation: 5,
                        height: 60,
                        shadowRadius: 5,
                        shadowOffset: { width: 5, height: 5 },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#F0F0F3",
                        borderRadius: 100,
                        }}
                    >
                        <View
                        style={{
                            shadowColor: "#FFFFFF",
                            width: "100%",
                            height: 60,
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
                        <Text style={{ fontSize: 16, fontWeight: 400,color:"#F14336" }}>Delete Shared Link</Text>
                        </View>
                    </TouchableOpacity>
                    <InsetShadow
                        containerStyle={{
                        borderRadius: 25,
                        height: 60,
                        backgroundColor: "#F0F0F3",
                        margin: 30,
                        marginTop: 5,
                        }}
                        bottom={false}
                        right={false}
                        shadowColor="#AEAEC0"
                        shadowOpacity={0.5}
                        elevation={10}
                        shadowRadius={15}
                        shadowOffset={20}
                        children={
                        <InsetShadow
                            containerStyle={{
                            borderRadius: 25,
                            height: "100%",
                            width: "100%",
                            backgroundColor: "transparent",
                            paddingLeft: 20,
                            }}
                            top={false}
                            left={false}
                            shadowOffset={15}
                            shadowOpacity={1}
                            shadowRadius={15}
                            elevation={20}
                            shadowColor="white"
                        >
                            <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                                width: "100%",
                            }}
                            >
                            <TouchableOpacity
                                onPress={() => showModal()}
                                style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                }}
                            >
                                <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: 400,
                                    color: "#2684FF",
                                }}
                                >
                                Cancel
                                </Text>
                            </TouchableOpacity>
                            </View>
                        </InsetShadow>
                        }
                    ></InsetShadow>
                </View>
                </Modal>
                <FlatList data={emailList}
                    renderItem={({item,index})=>{
                            let text = "Shared with "+item;
                        return(
                            <SingleNote props={{heading:"Tatum",key:index,note:text,pressed:()=>{selectEmail(index)}}}/>
                        )
                    }}
                />
        </ScrollView>
    )
}

export default Sharing;