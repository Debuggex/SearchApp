import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import HomeCard from './HomeCard';
import InsetButton from './InsetButton';
import context from "./Context/ContextProvider";
import Modal from "react-native-modal";
import InsetShadow from 'react-native-inset-shadow';
import Input from './Input';




const Home=({navigation})=>{
    
    const [messageText,setMessageText] = useState("Let’s get started!");
    const [getStarted,setGetStarted] = useState(true);
    const [modalButtons,setModalButtons] = useState(true);
    const [writeEmail,setWriteEmail] = useState(false);
    const [emailSent,setEmailSent] = useState(false);
    const [email,setEmail] = useState('');

    const {isHealthModal,setIsHealthModal,emailList,setEmailList} = useContext(context);

    const {height} = Dimensions.get("screen");
    const goUser = () => {
        navigation.navigate('User');
    }
    const goNotes = () => {
        navigation.navigate('Notes');
    }

    const goSharing = () =>{
        setIsHealthModal(!isHealthModal);
        navigation.navigate('Sharing');
    }

    const goDocuments = () => {
        navigation.navigate('Documents');
    }

    const showModal = () => {
        setIsHealthModal(!isHealthModal);
    }
    
    const handlePress = async()=>{
        try{
        navigation.navigate('EditUser');
        setMessageText('How are you feeling today?');
        setGetStarted(false);
        
        }catch(err){
            console.log(err);
        }
        
    }

    const shareEmail = () =>{
        setModalButtons(false);
        setWriteEmail(true);
        setEmailSent(false);
    }

    const cancelEmailWritting = () =>{
        setModalButtons(true);
        setWriteEmail(false);
        setEmailSent(false);
        setEmail("");
    }

    const reset=()=>{
        showModal();
        cancelEmailWritting();
    }

    const addToEmailList = (email) =>{
        if(email==null || email == undefined || email == ""){
            return;
        }
        setEmailList([...emailList,email]);
        setWriteEmail(false);
        setEmailSent(true);
    }

    const emailAdded = () =>{
        reset();
    }

    return(
        <ScrollView contentContainerStyle={{ padding:30,height:'auto',backgroundColor:"#F0F0F3",paddingTop:0,paddingBottom:50,display:'flex',justifyContent:"space-between"}}>
            
            <Modal isVisible={isHealthModal} style={{ flex: 1 }} backdropOpacity={0.4}>
                
                {modalButtons && <View
                style={{ backgroundColor: "#F0F0F3", borderRadius: 20, top: 150 }}
                >
                    <TouchableOpacity
                        onPress={() => {
                          shareEmail();
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
                        <Text style={{ fontSize: 16, fontWeight: 400 }}>Share Health id </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                          goSharing();
                        }}
                        style={{
                        margin: 30,
                        marginBottom: 60,
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
                            Manage Shares
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
                </View>}

                {writeEmail && <View
                style={{ backgroundColor: "#F0F0F3", borderRadius: 20,paddingTop:40,paddingBottom:40 }}
                >
                    <View style={{width:"90%",margin: 15,marginTop:0}}>
                        <Input textAlign="center" placeholder="Email your profile to" value={email} setValue={setEmail}/> 
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                          addToEmailList(email);
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
                        <Text style={{ fontSize: 16, fontWeight: 400 }}>Share Email </Text>
                        </View>
                    </TouchableOpacity>
                    
                    <InsetShadow
                        containerStyle={{
                        borderRadius: 25,
                        height: 60,
                        backgroundColor: "#F0F0F3",
                        margin: 30,
                        marginTop: 5,
                        marginBottom:0
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
                                onPress={() => cancelEmailWritting()}
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

                {emailSent && <View
                style={{ backgroundColor: "#F0F0F3", borderRadius: 20,paddingTop:40,paddingBottom:40 }}
                >
                    
                    <InsetShadow
                        containerStyle={{
                        borderRadius: 25,
                        height: 60,
                        backgroundColor: "#F0F0F3",
                        margin: 30,
                        marginTop: 0,
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
                                onPress={() => cancelEmailWritting()}
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
                                    color: "#898A8D",
                                }}
                                >
                                Your Health ID was Sharred 
                                </Text>
                            </TouchableOpacity>
                            </View>
                        </InsetShadow>
                        }
                    ></InsetShadow>   
                    
                    <TouchableOpacity
                        onPress={() => {
                          emailAdded();
                        }}
                        style={{
                        margin: 30,
                        marginBottom: 0,
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
                        <Text style={{ fontSize: 16, fontWeight: 400 }}>OK</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>}

            </Modal>

            <View style={{width:"100%",padding:30,height:"25%",paddingTop:0,paddingBottom:0,marginBottom:20,marginTop:20,borderRadius:20,display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'column'}}>
                    <View style={{width:"100%",marginBottom:40}}>
                        <Text style={{fontSize:24,marginBottom:5,width:"80%",fontWeight:600}}>{messageText}</Text>
                        {getStarted && <Text style={{color:"#A3ADB2",fontWeight:500,fontSize:14}}>We need to grab some info from you.</Text>}
                    </View>
                         {getStarted && <TouchableOpacity onPress={()=>{handlePress()}} style={{shadowColor:"#AEAEC0",width:"40%",shadowOpacity:0.25,elevation:5,shadowRadius:5,shadowOffset:{width:5,height:5},display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                            <View style={{shadowColor:"#FFFFFF",width:"100%",shadowOpacity:0.25,elevation:5,shadowRadius:5,shadowOffset:{width:-5,height:-5},display:"flex",flexDirection:"row",justifyContent:"center",padding:5,paddingRight:20,paddingLeft:20,alignItems:"center",backgroundColor:"#F0F0F3",borderRadius:100}}>
                                <Text style={{fontSize:16,fontWeight:400,color:"#2684FF"}}>Okay</Text>
                            </View>
                        </TouchableOpacity>}
                    
            </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap',alignItems:'flex-start'}}>
                    <HomeCard props={{imagePath:require("../../assets/Capsule.png")}}/>
                    <HomeCard props={{imagePath:require("../../assets/User.png"),pressed:goUser}}/>
                    <HomeCard props={{imagePath:require("../../assets/Folder.png"),pressed:goDocuments}}/>
                    <HomeCard props={{imagePath:require("../../assets/Edit.png"),pressed:goNotes,style:{width:50,height:50}}}/>
                    <HomeCard props={{imagePath:require("../../assets/Folder2.png")}}/>
                </View>
            

        </ScrollView>
    )

}

export default Home;