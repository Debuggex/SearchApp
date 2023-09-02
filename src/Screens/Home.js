import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View,Modal as RNMODAL } from 'react-native';
import HomeCard from './HomeCard';
import InsetButton from './InsetButton';
import context from "./Context/ContextProvider";
import Modal from "react-native-modal";
import InsetShadow from 'react-native-inset-shadow';
import Input from './Input';

import Svg,{ Path } from 'react-native-svg';
import Setting from '../../Icons/Setting';
import Cross from '../../Icons/Cross';
import Back from './../../Icons/Back';
import EditInputField from './EditInputField';
import Next from './../../Icons/Next';
import Logout from '../../Icons/Logout';
import InsetSwitch from './InsetSwitch';
import Capsule from '../../Icons/Capsule';
import UserIcon from '../../Icons/UserIcon';
import Wallet from '../../Icons/Wallet';
import Edit from '../../Icons/Edit';




const Home=({navigation})=>{
    
    const [messageText,setMessageText] = useState("Let’s get started!");
    const [getStarted,setGetStarted] = useState(true);
    const [modalButtons,setModalButtons] = useState(true);
    const [writeEmail,setWriteEmail] = useState(false);
    const [emailSent,setEmailSent] = useState(false);
    const [email,setEmail] = useState('');
    const [settingMenu, setSettingMenu] = useState(true);
    const [accounts,setAccounts] = useState(false);
    const [notification,setNotification] = useState(false);
    const [security,setSecurity] = useState(false);
    const [notEnable,setNotEnable] = useState(false);
    const [settingEnable, setSettingEnable] = useState(false);
    
    

    const {isHealthModal,setIsHealthModal,emailList,setEmailList,settings,setSettings} = useContext(context);

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

    const resetSettings = ()=>{
        setSettings(false);
        setSettingMenu(true);
        setAccounts(false);
        setNotification(false);
        setSecurity(false);
    }

    const switchIt = () =>{
        setNotEnable(!notEnable);
    }

    const switchSetting = () =>{
        setSettingEnable(!settingEnable);
    }

    return (
      <ScrollView
        contentContainerStyle={{
          padding: 30,
          height: "auto",
          backgroundColor: "#F0F0F3",
          paddingTop: 0,
          paddingBottom: 50,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Modal
          isVisible={isHealthModal}
          style={{ flex: 1 }}
          backdropOpacity={0.4}
        >
          {modalButtons && (
            <View
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
                  <Text style={{ fontSize: 16, fontWeight: 400 }}>
                    Share Health id{" "}
                  </Text>
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
            </View>
          )}

          {writeEmail && (
            <View
              style={{
                backgroundColor: "#F0F0F3",
                borderRadius: 20,
                paddingTop: 40,
                paddingBottom: 40,
              }}
            >
              <View style={{ width: "90%", margin: 15, marginTop: 0 }}>
                <Input
                  textAlign="center"
                  placeholder="Email your profile to"
                  value={email}
                  setValue={setEmail}
                />
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
                  <Text style={{ fontSize: 16, fontWeight: 400 }}>
                    Share Email{" "}
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
                  marginBottom: 0,
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
            </View>
          )}

          {emailSent && (
            <View
              style={{
                backgroundColor: "#F0F0F3",
                borderRadius: 20,
                paddingTop: 40,
                paddingBottom: 40,
              }}
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
            </View>
          )}
        </Modal>

        <Modal
          animationIn="slideInUp"
          animationOut="slideOutDown"
          coverScreen={true}
          isVisible={settings}
          style={{ margin: 0 }}
        >
          {settingMenu && (
            <View
              style={{
                width: "100%",
                height: "90%",
                padding: 30,
                backgroundColor: "#F0F0F3",
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                position: "absolute",
                bottom: 0,
              }}
            >
              <View
                style={{
                  display: "flex",
                  marginBottom: 40,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                  backgroundColor: "#F0F0F3",
                }}
              >
                <View style={{ width: "30%" }}></View>
                <View style={{ width: "40%" }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    Settings
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    width: "30%",
                  }}
                >
                  <InsetButton
                    SvgIcon={Cross}
                    props={{
                      
                      pressed: resetSettings,
                    }}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={{
                  shadowColor: "#AEAEC0",
                  shadowOpacity: 0.25,
                  elevation: 5,
                  shadowRadius: 5,
                  shadowOffset: { width: 5, height: 5 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  backgroundColor: "#FFF",
                  borderRadius: 20,
                  marginBottom: 20,
                }}
                onPress={() => {
                  setSettingMenu(false);
                  setAccounts(true);
                }}
              >
                <View
                  style={{
                    shadowColor: "#FFFFFF",
                    shadowOpacity: 0.5,
                    elevation: 5,
                    shadowRadius: 5,
                    shadowOffset: { width: -5, height: -5 },
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    backgroundColor: "#F0F0F3",
                    borderRadius: 20,
                    padding: 13,
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <View
                      style={{
                        backgroundColor: "#D7D7D7",
                        width: 24,
                        height: 24,
                        borderRadius: 50,
                        padding: 6,
                        marginRight: 12,
                      }}
                    >
                      <Svg
                        width={13}
                        height={13}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <Path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.0955 4.91946C10.0955 6.63272 8.72184 8.00649 7.00737 8.00649C5.29347 8.00649 3.91921 6.63272 3.91921 4.91946C3.91921 3.20619 5.29347 1.83301 7.00737 1.83301C8.72184 1.83301 10.0955 3.20619 10.0955 4.91946ZM7.00737 13.4997C4.47708 13.4997 2.3407 13.0884 2.3407 11.5017C2.3407 9.91447 4.4905 9.5178 7.00737 9.5178C9.53823 9.5178 11.674 9.92906 11.674 11.5157C11.674 13.103 9.52423 13.4997 7.00737 13.4997Z"
                          fill="black"
                        />
                      </Svg>
                    </View>
                    <Text style={{ fontWeight: 600, fontSize: 16 }}>
                      Account
                    </Text>
                  </View>
                  <Next />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  shadowColor: "#AEAEC0",
                  shadowOpacity: 0.25,
                  elevation: 5,
                  shadowRadius: 5,
                  shadowOffset: { width: 5, height: 5 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  backgroundColor: "#FFF",
                  borderRadius: 20,
                  marginBottom: 20,
                }}
                onPress={() => {
                  setNotification(true);
                  setSettingMenu(false);
                }}
              >
                <View
                  style={{
                    shadowColor: "#FFFFFF",
                    shadowOpacity: 0.5,
                    elevation: 5,
                    shadowRadius: 5,
                    shadowOffset: { width: -5, height: -5 },
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    backgroundColor: "#F0F0F3",
                    borderRadius: 20,
                    padding: 13,
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <View
                      style={{
                        backgroundColor: "#FFE2B7",
                        width: 24,
                        height: 24,
                        borderRadius: 50,
                        padding: 6,
                        marginRight: 12,
                      }}
                    >
                      {/* Notification SVG */}
                      <Svg
                        width={13}
                        height={13}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <Path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.9197 5.79753C10.9197 6.53016 11.1134 6.96198 11.5395 7.4596C11.8624 7.82621 11.9656 8.29681 11.9656 8.80735C11.9656 9.31731 11.7981 9.80142 11.4624 10.1945C11.0229 10.6657 10.4032 10.9665 9.77067 11.0187C8.85408 11.0969 7.93692 11.1627 7.00757 11.1627C6.07765 11.1627 5.16106 11.1233 4.24447 11.0187C3.61138 10.9665 2.99163 10.6657 2.55276 10.1945C2.21708 9.80142 2.04895 9.31731 2.04895 8.80735C2.04895 8.29681 2.15273 7.82621 2.47507 7.4596C2.91452 6.96198 3.0954 6.53016 3.0954 5.79753V5.54902C3.0954 4.56787 3.34006 3.92631 3.84386 3.29826C4.5929 2.38233 5.79357 1.83301 6.98148 1.83301H7.03366C8.24708 1.83301 9.48659 2.40877 10.2229 3.36406C10.7006 3.97919 10.9197 4.59372 10.9197 5.54902V5.79753ZM5.30026 12.3685C5.30026 12.0747 5.56984 11.9402 5.81914 11.8826C6.11075 11.8209 7.8877 11.8209 8.17931 11.8826C8.4286 11.9402 8.69819 12.0747 8.69819 12.3685C8.6837 12.6482 8.51963 12.8961 8.29294 13.0535C7.99901 13.2827 7.65406 13.4278 7.29345 13.4801C7.09401 13.5059 6.89806 13.5065 6.70558 13.4801C6.34439 13.4278 5.99944 13.2827 5.70609 13.0529C5.47882 12.8961 5.31475 12.6482 5.30026 12.3685Z"
                          fill="#F7C345"
                        />
                      </Svg>
                    </View>
                    <Text style={{ fontWeight: 600, fontSize: 16 }}>
                      Notifications
                    </Text>
                  </View>
                  <Next />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  shadowColor: "#AEAEC0",
                  shadowOpacity: 0.25,
                  elevation: 5,
                  shadowRadius: 5,
                  shadowOffset: { width: 5, height: 5 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  backgroundColor: "#FFF",
                  borderRadius: 20,
                  marginBottom: 20,
                }}
                onPress={() => {
                  setSecurity(true);
                  setSettingMenu(false);
                }}
              >
                <View
                  style={{
                    shadowColor: "#FFFFFF",
                    shadowOpacity: 0.5,
                    elevation: 5,
                    shadowRadius: 5,
                    shadowOffset: { width: -5, height: -5 },
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    backgroundColor: "#F0F0F3",
                    borderRadius: 20,
                    padding: 13,
                  }}
                >
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <View
                      style={{
                        backgroundColor: "#F2D2C4",
                        width: 24,
                        height: 24,
                        borderRadius: 50,
                        padding: 6,
                        paddingTop:4,
                        paddingLeft:5,
                        marginRight: 12,
                      }}
                    >
                      <Svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <Path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.2289 4.98068V5.87513C11.2336 6.18873 11.9656 7.09825 11.9656 8.18458V11.0644C11.9656 12.4093 10.8507 13.4997 9.47608 13.4997H4.53908C3.16391 13.4997 2.04895 12.4093 2.04895 11.0644V8.18458C2.04895 7.09825 2.78159 6.18873 3.7857 5.87513V4.98068C3.79163 3.24163 5.232 1.83301 6.99839 1.83301C8.78849 1.83301 10.2289 3.24163 10.2289 4.98068ZM7.01025 2.84745C8.21352 2.84745 9.19156 3.80392 9.19156 4.98068V5.74933H4.82301V4.96908C4.82894 3.79813 5.80697 2.84745 7.01025 2.84745ZM7.52594 10.2651C7.52594 10.5491 7.29477 10.7752 7.00432 10.7752C6.7198 10.7752 6.48863 10.5491 6.48863 10.2651V8.97816C6.48863 8.69991 6.7198 8.47384 7.00432 8.47384C7.29477 8.47384 7.52594 8.69991 7.52594 8.97816V10.2651Z"
                          fill="#B35656"
                        />
                      </Svg>
                    </View>
                    <Text style={{ fontWeight: 600, fontSize: 16 }}>
                      Security & Privacy
                    </Text>
                  </View>
                  <Next />
                </View>
              </TouchableOpacity>
            </View>
          )}

          {accounts && (
            <View
              style={{
                width: "100%",
                height: "90%",
                // padding: 30,
                backgroundColor: "#F0F0F3",
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                position: "absolute",
                bottom: 0,
              }}
            >
              <View
                style={{
                  display: "flex",
                  marginBottom: 20,
                  padding: 30,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                  backgroundColor: "#F0F0F3",
                }}
              >
                <View style={{ width: "30%" }}>
                  <InsetButton
                    SvgIcon={Back}
                    props={{
                      pressed: () => {
                        setSettingMenu(true);
                        setAccounts(false);
                      },
                    }}
                  />
                </View>
                <View style={{ width: "40%" }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    Accounts
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    width: "30%",
                  }}
                >
                  <InsetButton
                    SvgIcon={Cross}
                    props={{
                      pressed: resetSettings,
                    }}
                  />
                </View>
              </View>
              <View>
                <View style={{ paddingLeft: 30 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      marginBottom: 5,
                      textAlign: "left",
                      color: "#898A8D",
                    }}
                  >
                    ACCOUNT
                  </Text>
                </View>
                <EditInputField
                  props={{
                    label: "Email",
                    placeholder: "Enter your Email",
                  }}
                />
                <EditInputField
                  props={{
                    label: "Password",
                    placeholder: "Enter your Password",
                  }}
                />
                <View style={{ padding: 30 }}>
                  <TouchableOpacity
                    style={{
                      shadowColor: "#AEAEC0",
                      shadowOpacity: 0.25,
                      elevation: 5,
                      shadowRadius: 5,
                      shadowOffset: { width: 5, height: 5 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      backgroundColor: "#FFF",
                      borderRadius: 20,
                      marginBottom: 20,
                    }}
                    onPress={() => {
                      navigation.navigate("Signup");
                      resetSettings();
                    }}
                  >
                    <View
                      style={{
                        shadowColor: "#FFFFFF",
                        shadowOpacity: 0.5,
                        elevation: 5,
                        shadowRadius: 5,
                        shadowOffset: { width: -5, height: -5 },
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: "#F0F0F3",
                        borderRadius: 20,
                        padding: 13,
                      }}
                    >
                      <View style={{ display: "flex", flexDirection: "row" }}>
                        <View
                          style={{
                            backgroundColor: "#FFD4D4",
                            width: 24,
                            height: 24,
                            borderRadius: 50,
                            padding: 6,
                            paddingLeft: 4,
                            paddingTop:5,
                            marginRight: 12,
                          }}
                        >
                          <Logout />
                        </View>
                        <Text style={{ fontWeight: 600, fontSize: 16 }}>
                          Log out
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    textAlign: "center",
                    color: "#E30F0F",
                  }}
                  onPress={() => {
                    navigation.navigate("Signup");
                    resetSettings();
                  }}
                >
                  Delete Account
                </Text>
              </View>
            </View>
          )}

          {notification && (
            <View
              style={{
                width: "100%",
                height: "90%",
                // padding: 30,
                backgroundColor: "#F0F0F3",
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                position: "absolute",
                bottom: 0,
              }}
            >
              <View
                style={{
                  display: "flex",
                  marginBottom: 20,
                  padding: 30,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                  backgroundColor: "#F0F0F3",
                }}
              >
                <View style={{ width: "30%" }}>
                  <InsetButton
                    SvgIcon={Back}
                    props={{
                      pressed: () => {
                        setSettingMenu(true);
                        setNotification(false);
                      },
                    }}
                  />
                </View>
                <View style={{ width: "40%" }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    Notification
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    width: "30%",
                  }}
                >
                  <InsetButton
                    SvgIcon={Cross}
                    props={{
                      pressed: resetSettings,
                    }}
                  />
                </View>
              </View>
              <View>
                <View style={{ paddingLeft: 30 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      marginBottom: 5,
                      textAlign: "left",
                      color: "#898A8D",
                    }}
                  >
                    NOTIFICATIONS
                  </Text>
                </View>
                <InsetSwitch
                  props={{
                    isEnable: notEnable,
                    switch: switchIt,
                    label: "Enable Notifications",
                  }}
                />
              </View>
            </View>
          )}

          {security && (
            <View
              style={{
                width: "100%",
                height: "90%",
                // padding: 30,
                backgroundColor: "#F0F0F3",
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                position: "absolute",
                bottom: 0,
              }}
            >
              <View
                style={{
                  display: "flex",
                  marginBottom: 20,
                  padding: 30,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                  backgroundColor: "#F0F0F3",
                }}
              >
                <View style={{ width: "20%" }}>
                  <InsetButton
                    SvgIcon={Back}
                    props={{
                      pressed: () => {
                        setSettingMenu(true);
                        setSecurity(false);
                      },
                    }}
                  />
                </View>
                <View style={{ width: "60%" }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    Security & Privacy
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    width: "20%",
                  }}
                >
                  <InsetButton
                    SvgIcon={Cross}
                    props={{
                      pressed: resetSettings,
                    }}
                  />
                </View>
              </View>
              <View>
                <View style={{ paddingLeft: 30 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      marginBottom: 5,
                      textAlign: "left",
                      color: "#898A8D",
                    }}
                  >
                    SECURITY
                  </Text>
                </View>
                <InsetSwitch
                  props={{
                    isEnable: settingEnable,
                    switch: switchSetting,
                    label: "Enable Face ID",
                  }}
                />
                <View style={{ padding: 30 }}>
                  <TouchableOpacity
                    style={{
                      shadowColor: "#AEAEC0",
                      shadowOpacity: 0.25,
                      elevation: 5,
                      shadowRadius: 5,
                      shadowOffset: { width: 5, height: 5 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      backgroundColor: "#FFF",
                      borderRadius: 20,
                      marginBottom: 20,
                    }}
                    onPress={() => {
                      resetSettings();
                    }}
                  >
                    <View
                      style={{
                        shadowColor: "#FFFFFF",
                        shadowOpacity: 0.5,
                        elevation: 5,
                        shadowRadius: 5,
                        shadowOffset: { width: -5, height: -5 },
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: "#F0F0F3",
                        borderRadius: 20,
                        padding: 13,
                      }}
                    >
                      <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={{ fontWeight: 600, fontSize: 16 }}>
                          Request Data Deletion
                        </Text>
                      </View>
                      <Next />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Modal>

        <View
          style={{
            width: "100%",
            padding: 30,
            height: "25%",
            paddingTop: 0,
            paddingBottom: 0,
            marginBottom: 20,
            marginTop: 20,
            borderRadius: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <View style={{ width: "100%", marginBottom: 40 }}>
            <Text
              style={{
                fontSize: 24,
                marginBottom: 5,
                width: "80%",
                fontWeight: 600,
              }}
            >
              {messageText}
            </Text>
            {getStarted && (
              <Text style={{ color: "#A3ADB2", fontWeight: 500, fontSize: 14 }}>
                We need to grab some info from you.
              </Text>
            )}
          </View>
          {getStarted && (
            <TouchableOpacity
              onPress={() => {
                handlePress();
              }}
              style={{
                shadowColor: "#AEAEC0",
                width: "40%",
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
                <Text
                  style={{ fontSize: 16, fontWeight: 400, color: "#2684FF" }}
                >
                  Okay
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <HomeCard
            SvgIcon={Capsule}
          />
          <HomeCard
            props={{
              pressed: goUser,
            }}
            SvgIcon={UserIcon}
          />
          <HomeCard
            props={{
              pressed: goDocuments,
            }}
            SvgIcon={Wallet}
          />
          <HomeCard
            props={{
              pressed: goNotes,
              style: { width: 50, height: 50 },
            }}
            SvgIcon={Edit}
          />
          <HomeCard
            SvgIcon={Wallet}
          />
        </View>
      </ScrollView>
    );

}

export default Home;