import { Text } from "react-native";
import context from "./Context/ContextProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import { ScrollView } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { Camera, CameraType } from "expo-camera";
import InsetShadow from "react-native-inset-shadow";
import { Image } from "react-native";




const Cards = ({navigation}) =>{
    const { cards, setCards, editCardIndex, setEditCardIndex, modalButton, setModalButtons } = useContext(context);
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [addCard, setAddCard] = useState(false);
    const [showCameraView, setShowCamera] = useState(false);
    const [cardHead,setCardHead] = useState("");
    const [cardText, setCardText] = useState("");


    useEffect(()=>{
        requestPermission((response) => {
            permission = response;
        });

    },[])
    
    const onPictureSaved = async (photo) => {
        setShowCamera(false);
        let base64 = "data:image/png;base64," + photo.base64.toString();
        // const base64Img = await FileSystem.readAsStringAsync(photo.uri, { encoding: FileSystem?.EncodingType?.Base64 });
        // console.log("uri-64 => ",base64Img);
        let arr = [...cards];
        arr.push(base64);
        setCards(arr);
        setShowCamera(false);

    };

    const flipCamera = () => {
        if (type == CameraType.back) {
            setType(CameraType.front);
        } else {
            setType(CameraType.back);
        }
    };

    const hideCamera = () => {
        setShowCamera(!showCameraView)
    }

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
            <Modal isVisible={modalButton || addCard || showCameraView}>
                {modalButton && <View
                    style={{ backgroundColor: "#F0F0F3", borderRadius: 20, position: "absolute", bottom: 0, width: "100%" }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            setCardHead("Add Insurance Cards")
                            setCardText("Position your insurance card in the frame to take a picture")
                            setModalButtons(false);
                            setAddCard(true);
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
                            <Text style={{ fontSize: 16, fontWeight: 400 }}>Insurance card</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setCardHead("Add Drivers license ")
                            setCardText("Position your Drivers license in the frame to take a picture")
                            setModalButtons(false);
                            setAddCard(true);
                        }}
                        style={{
                            margin: 30,
                            marginBottom: 15,
                            marginTop: 5,
                            height: 60,
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
                        }}
                    >
                        <View
                            style={{
                                shadowColor: "#FFFFFF",
                                width: "100%",
                                shadowOpacity: 0.25,
                                elevation: 5,
                                height: 60,
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
                                drivers license
                            </Text>
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
                                        onPress={() => {
                                            setModalButtons(!modalButton);
                                        }}
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
                </View>}
                {addCard && <View
                    style={{ backgroundColor: "#F0F0F3", borderRadius: 20, position: "absolute", bottom: 0, width: "100%" }}
                >
                    <View style={{ display: "flex", alignItems: "center", width: "100%" }}>
                        <Text style={{ fontSize: 18, margin: 30, marginBottom: 5 }}>{cardHead}</Text>
                        <Text style={{ fontSize: 12, color: "#A3ADB2", margin: 30, textAlign: "center" }}>{cardText}</Text>

                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            setAddCard(false);
                            setShowCamera(true)
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
                            // width:"85%"
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
                            <Text style={{ fontSize: 16, fontWeight: 400 }}>Take Photo</Text>
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
                                        onPress={() => {
                                            setAddCard(false);
                                        }}
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
                </View>}
                {showCameraView && <View style={{ width: "100%", height: "100%" }}>
                    <Camera
                        style={{ width: "100%", height: "100%", flex: 1 }}
                        type={type}
                        ref={(ref) => {
                            this.camera = ref;
                        }}
                    ></Camera>
                    <View
                        style={{
                            padding: 30,
                            paddingTop: 100,
                            paddingBottom: 100,
                            backgroundColor: "black",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                setShowCamera(false);
                            }}
                            style={{ backgroundColor: "white", borderRadius: 20 }}
                        >
                            <Text style={{ margin: 10, marginRight: 15, marginLeft: 15 }}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.camera.takePictureAsync(options = { base64: true, skipProcessing: true, onPictureSaved: onPictureSaved, });
                            }}
                            style={{ backgroundColor: "white", borderRadius: 20 }}
                        >
                            <Text style={{ margin: 10, marginRight: 15, marginLeft: 15 }}>
                                Capture
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                flipCamera();
                            }}
                            style={{ backgroundColor: "white", borderRadius: 20 }}
                        >
                            <Text style={{ margin: 10, marginRight: 15, marginLeft: 15 }}>
                                Flip
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>}            
            </Modal>

            {/* <Modal isVisible={addCard}>
                <View
                    style={{ backgroundColor: "#F0F0F3", borderRadius: 20, position: "absolute", bottom: 0, width: "100%" }}
                >
                    <View style={{display:"flex",alignItems:"center",width:"100%"}}>
                        <Text style={{ fontSize: 18, margin: 30,marginBottom:5 }}>{cardHead}</Text>
                        <Text style={{ fontSize: 12, color:"#A3ADB2",margin: 30,textAlign:"center"}}>{cardText}</Text>

                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            setAddCard(false);
                            setShowCamera(true)
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
                            // width:"85%"
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
                            <Text style={{ fontSize: 16, fontWeight: 400 }}>Take Photo</Text>
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
                                        onPress={() => {
                                            setAddCard(false);
                                        }}
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
            </Modal> */}

            {/* <Modal isVisible={showCameraView}>
                <View style={{ width: "100%", height: "100%" }}>
                    <Camera
                        style={{ width: "100%", height: "100%", flex: 1 }}
                        type={type}
                        ref={(ref) => {
                            this.camera = ref;
                        }}
                    ></Camera>
                    <View
                        style={{
                            padding: 30,
                            paddingTop: 100,
                            paddingBottom: 100,
                            backgroundColor: "black",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                setShowCamera(false);
                            }}
                            style={{ backgroundColor: "white", borderRadius: 20 }}
                        >
                            <Text style={{ margin: 10, marginRight: 15, marginLeft: 15 }}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.camera.takePictureAsync(options = { base64: true, skipProcessing: true, onPictureSaved: onPictureSaved, });
                            }}
                            style={{ backgroundColor: "white", borderRadius: 20 }}
                        >
                            <Text style={{ margin: 10, marginRight: 15, marginLeft: 15 }}>
                                Capture
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                flipCamera();
                            }}
                            style={{ backgroundColor: "white", borderRadius: 20 }}
                        >
                            <Text style={{ margin: 10, marginRight: 15, marginLeft: 15 }}>
                                Flip
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal> */}
            {cards.length==0 && <View style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", }}>
                <TouchableOpacity
                    onPress={()=>{
                        setModalButtons(!modalButton);
                    }}
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
                // <TouchableOpacity onPress={()=>goEditCard(index)} key={index} style={{ padding: 20, backgroundColor: data.cardColor, borderRadius: 20, display: "flex", flexDirection: "row",width:"100%",marginBottom:20 }}>
                //     <View style={{ width: "48%" }}>
                //         <Text style={{ fontSize: 16, marginBottom: 10, color: data.cardColor == "#FFFFFF" ?"#34393A":"#FFFFFF" }}>{data.title1}</Text>
                //         <Text style={{ fontSize: 12, marginBottom: 10, color: data.cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }}>{data.input1}</Text>
                //         <Text style={{ fontSize: 16, marginBottom: 10, color: data.cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }}>{data.title2}</Text>
                //         <Text style={{ fontSize: 12, marginBottom: 10, color: data.cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }}>{data.input2}</Text>
                //         <Text style={{ fontSize: 16, marginBottom: 10, color: data.cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }}>{data.title3}</Text>
                //         <Text style={{ fontSize: 12, marginBottom: 10, color: data.cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }}>{data.input3}</Text>

                //     </View>
                //     <View style={{ display: "flex", justifyContent: "center", width: "48%" }}>
                //         <Text style={{ fontSize: 16, marginBottom: 10, color: data.cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }}>{data.title4}</Text>
                //         <Text style={{ fontSize: 12, marginBottom: 10, color: data.cardColor == "#FFFFFF" ? "#34393A" : "#FFFFFF" }}>{data.input4}</Text>
                //     </View>

                // </TouchableOpacity>
                <Image key={index} style={{ height: 490, marginBottom: 10, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%",borderRadius:20 }} source={{ uri: data }} />
            ))}
            
            </ScrollView>
            }

            
        </SafeAreaView>
    )

}


export default Cards;