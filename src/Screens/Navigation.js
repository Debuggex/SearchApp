import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./Signup";
import Signin from "./Signin";
import Button from "./Button";
import Home from "./Home";
import User from "./User";
import HomeCard from "./HomeCard";
import EditUser from "./EditUser";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import InsetButton from "./InsetButton";
import Notes from "./Notes";
import SingleNote from "./SingleNote";
import { useContext, useEffect, useState } from "react";
import AddNote from "./AddNote";
import { ContextProvider } from "./Context/ContextProvider";
import context from "./Context/ContextProvider";
import Input from "./Input";
import SearchInput from "./SearchInput";
import Documents from "./Documents";
import Folder from "./Folder";
import Sharing from "./Sharing";
import InsetShadow from "react-native-inset-shadow";
import { Circle, Path, Svg } from "react-native-svg";
import Setting from "../../Icons/Setting";
import Back from "../../Icons/Back";
import Plus from "../../Icons/Plus";
import Search from "./../../Icons/Search";
import { SafeAreaView } from "react-native";
import { BlurView } from "expo-blur";
import Cards from "./Cards";
import AddCard from "./AddCard";
import Medications from "./Medications";
import AddMedications from "./AddMedications";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Medications">
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent:true,
            header: () => {
              const { isHealthModal, setIsHealthModal, settings, setSettings } =
                useContext(context);
              return (
                <SafeAreaView>
                  <BlurView style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                    padding: 30,
                    paddingTop:25,
                    // backgroundColor: "#F0F0F3",
                  }}>

                    <TouchableOpacity
                      onPress={() => {
                        setIsHealthModal(!isHealthModal);
                      }}
                      style={{
                        shadowColor: "#AEAEC0",
                        shadowOpacity: 0.5,
                        elevation: 5,
                        shadowRadius: 10,
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
                          shadowOpacity: 1,
                          elevation: 5,
                          // height:34,
                          shadowRadius: 10,
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
                        <Text style={{ fontSize: 18, lineHeight: 30 }}>
                          Health ID
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <InsetButton
                      SvgIcon={Setting}
                      props={{
                        pressed: () => {
                          setSettings(!settings);
                        },
                      }}
                    />

                  </BlurView>
                </SafeAreaView>
              );
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="User"
          component={User}
          options={{
            headerTransparent:true,
            header: ({ navigation }) => (
              <SafeAreaView>
                <BlurView
                  style={{
                    display: "flex",
                    padding: 30,
                    // paddingTop: 25,

                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                    //   paddingTop: 80,
                    backgroundColor: "#F0F0F3",
                  }}>


                  <View style={{ width: "26%" }}>
                    <InsetButton
                      props={{
                        pressed: () => {
                          navigation.navigate("Home");
                        },
                        width: 8,
                        height: 8,
                      }}
                      SvgIcon={Back}
                    />
                  </View>
                  <Text style={{ fontSize: 18, textAlign: "center" }}>
                    My Info
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("EditUser")}
                    style={{
                      shadowColor: "#AEAEC0",
                      shadowOpacity: 0.5,
                      elevation: 5,
                      shadowRadius: 20,
                      shadowOffset: { width: 5, height: 5 },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#F0F0F3",
                      borderRadius: 100,
                      width: "26%",
                    }}
                  >
                    <View
                      style={{
                        shadowColor: "#FFFFFF",
                        shadowOpacity: 1,
                        elevation: 5,
                        width: "100%",
                        shadowRadius: 20,
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
                        style={{
                          fontSize: 16,
                          fontWeight: 400,
                          color: "#2684FF",
                        }}
                      >
                        Edit
                      </Text>
                    </View>
                  </TouchableOpacity>
                </BlurView>
              </SafeAreaView>
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="HomeCard"
          component={HomeCard}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="EditUser"
          component={EditUser}
          options={{
            title: "",
            headerTransparent:true,
            headerStyle: {
              backgroundColor: "#F0F0F3",
            },
            header: ({ navigation }) => (
              <SafeAreaView>
                <BlurView
                  style={{
                    display: "flex",
                    padding: 30,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    // paddingTop: 25,
                    width: "100%",
                    alignItems: "center",
                    //   paddingTop: 80,
                    backgroundColor: "#F0F0F3",
                  }}>
                  <InsetButton
                    props={{
                      pressed: () => {
                        navigation.navigate("User");
                      },

                      width: 8,
                      height: 8,
                    }}
                    SvgIcon={Back}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("User");
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
                    }}
                  >
                    <View
                      style={{
                        shadowColor: "#FFFFFF",
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
                        style={{
                          fontSize: 16,
                          fontWeight: 400,
                          color: "#2684FF",
                        }}
                      >
                        Save
                      </Text>
                    </View>
                  </TouchableOpacity>
                </BlurView>
              </SafeAreaView>
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Notes"
          component={Notes}
          options={{
            headerTransparent:true,
            header: ({ navigation }) => {
              const {  setNotesAction, searctText, setSearchText } =
                useContext(context);
              const [showSearch, setShowSearch] = useState(false);
              return (
                <SafeAreaView
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <BlurView
                    style={{
                      display: "flex",
                      padding: 30,
                      // paddingTop: 25,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                      //   paddingTop: 80,
                      backgroundColor: "#F0F0F3",
                    }}
                  >
                    <View style={{ width: "25%" }}>
                      <InsetButton
                        props={{
                          pressed: () => {
                            navigation.navigate("Home");
                          },

                          width: 8,
                          height: 8,
                        }}
                        SvgIcon={Back}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 400,
                        textAlign: "center",
                      }}
                    >
                      Journal
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "25%",
                        justifyContent: "space-between",
                      }}
                    >
                      <InsetButton
                        props={{
                          pressed: () => {
                            setNotesAction("NEW");
                            navigation.navigate("AddNote");
                          },
                        }}
                        SvgIcon={Plus}
                      />
                      <InsetButton
                        props={{
                          pressed: () => {
                            setShowSearch(!showSearch);
                            setSearchText("");
                          },
                        }}
                        SvgIcon={Search}
                      />
                    </View>
                  </BlurView>
                  {showSearch && (
                    <View
                      style={{
                        width: "100%",
                        padding: 30,
                        paddingLeft: 60,
                        paddingRight: 60,
                        backgroundColor: "#F0F0F3",
                      }}
                    >
                      <SearchInput
                        value={searctText}
                        setValue={setSearchText}
                        placeholder="Search"
                      />
                    </View>
                  )}
                </SafeAreaView>
              );
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="AddNote"
          component={AddNote}
          options={{
            headerStyle: { backgroundColor: "#F0F0F3" },
            header: ({ navigation }) => {
              const {
                note,
                notesAction,
                notes,
                setNotes,
                noteHeading,
                setNoteHeading,
                noteText,
                noteIndex,
              } = useContext(context);
              useEffect(() => {
                if (notesAction == "NEW") {
                  setNoteHeading("");
                } else {
                  setNoteHeading(notes[noteIndex].heading);
                }
              }, [note]);

              return (
                <SafeAreaView>
                  <BlurView
                    style={{
                      display: "flex",
                      padding: 30,
                      // paddingTop: 25,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                      // paddingTop: 80,
                      backgroundColor: "#F0F0F3",
                    }}>


                    <View style={{ width: "26%" }}>
                      <InsetButton
                        props={{
                          pressed: () => {
                            navigation.navigate("Notes");
                          },

                          width: 8,
                          height: 8,
                        }}
                        SvgIcon={Back}
                      />
                    </View>
                    <TextInput
                      style={{
                        fontSize: 18,
                        textAlign: "center",
                        width: "45%",
                      }}
                      placeholderTextColor="#898A8D"
                      value={noteHeading}
                      onChangeText={(text) => {
                        setNoteHeading(text);
                      }}
                      placeholder="Title"
                    />
                    <TouchableOpacity
                      onPress={() => {
                        if (noteHeading.length == 0 && noteText.length == 0) {
                          navigation.navigate("Notes");
                        } else {
                          if (notesAction == "NEW") {
                            let obj = {
                              heading: noteHeading,
                              note: noteText,
                            };
                            setNotes([...notes, obj]);
                          } else {
                            let obj = {
                              heading: noteHeading,
                              note: noteText,
                            };
                            let tempNotes = [...notes];
                            tempNotes[noteIndex] = obj;
                            setNotes(tempNotes);
                          }
                          navigation.navigate("Notes");
                        }
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
                        width: "26%",
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
                          style={{
                            fontSize: 16,
                            fontWeight: 400,
                            color: "#2684FF",
                          }}
                        >
                          Done
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </BlurView>
                </SafeAreaView>
              );
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Documents"
          component={Documents}
          options={{
           headerTransparent:true,
            header: ({ navigation }) => {
              const { showModal, searchDocument, setSearchDocument } =
                useContext(context);
              const [showSearch, setShowSearch] = useState(false);
              return (
                <SafeAreaView
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <BlurView
                    style={{
                      display: "flex",
                      padding: 30,
                      // paddingTop: 25,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                      //   paddingTop: 80,
                      backgroundColor: "#F0F0F3",
                    }}
                  >
                    <View style={{ width: "25%" }}>
                      <InsetButton
                        props={{
                          pressed: () => {
                            navigation.navigate("Home");
                          },

                          width: 8,
                          height: 8,
                        }}
                        SvgIcon={Back}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 400,
                        textAlign: "center",
                      }}
                    >
                      Documents
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "25%",
                        justifyContent: "space-between",
                      }}
                    >
                      <InsetButton
                        props={{
                          pressed: () => {
                            showModal();
                          },
                        }}
                        SvgIcon={Plus}
                      />
                      <InsetButton
                        props={{
                          pressed: () => {
                            setShowSearch(!showSearch);
                            setSearchDocument("");
                          },
                        }}
                        SvgIcon={Search}
                      />
                    </View>
                  </BlurView>
                  {showSearch && (
                    <View
                      style={{
                        width: "100%",
                        padding: 30,
                        paddingLeft: 60,
                        paddingRight: 60,
                        backgroundColor: "#F0F0F3",
                      }}
                    >
                      <SearchInput
                        value={searchDocument}
                        setValue={setSearchDocument}
                        placeholder="Search"
                      />
                    </View>
                  )}
                </SafeAreaView>
              );
            },
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="Folder"
          component={Folder}
          options={{
            headerTransparent:true,
            header: ({ navigation }) => {
              const {
                selectedFolder,
                showModal,
              } = useContext(context);
              const [showSearch, setShowSearch] = useState(false);
              return (
                <SafeAreaView
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <BlurView
                    style={{
                      display: "flex",
                      padding: 30,
                      // paddingTop: 25,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                      //   paddingTop: 80,
                      backgroundColor: "#F0F0F3",
                    }}
                  >
                    <View style={{ width: "25%" }}>
                      <InsetButton
                        props={{
                          pressed: () => {
                            navigation.navigate("Documents");
                          },

                          width: 8,
                          height: 8,
                        }}
                        SvgIcon={Back}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 400,
                        textAlign: "center",
                      }}
                    >
                      {selectedFolder.folderName}
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "25%",
                        justifyContent: "space-between",
                      }}
                    >
                      <InsetButton
                        props={{
                          pressed: () => {
                            showModal();
                          },
                        }}
                        SvgIcon={Plus}
                      />
                      <InsetButton
                        props={{
                          pressed: () => {
                            setShowSearch(!showSearch);
                          },
                        }}
                        SvgIcon={Search}
                      />
                    </View>
                  </BlurView>
                  {showSearch && (
                    <View
                      style={{
                        width: "100%",
                        padding: 30,
                        paddingLeft: 60,
                        paddingRight: 60,
                        backgroundColor: "#F0F0F3",
                      }}
                    >
                      <SearchInput placeholder="Search" />
                    </View>
                  )}
                </SafeAreaView>
              );
            },
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="Sharing"
          component={Sharing}
          options={{
            headerTransparent:true,
            header: ({ navigation }) => {
              return (
                <SafeAreaView
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <BlurView
                    style={{
                      display: "flex",
                      padding: 30,
                      flexDirection: "row",
                      width: "100%",
                      alignItems: "center",
                      // paddingTop: 25,
                      backgroundColor: "#F0F0F3",
                      justifyContent:"space-between"
                    }}
                  >
                    <View style={{}}>
                      <InsetButton
                        props={{
                          pressed: () => {
                            navigation.navigate("Home");
                          },

                          width: 8,
                          height: 8,
                        }}
                        SvgIcon={Back}
                      />
                    </View>

                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 400,
                        textAlign: "center",
                      }}
                    >
                      Sharing
                    </Text>
                    <View style={{opacity:0}}>
                      <InsetButton
                        props={{
                          pressed: () => {
                            console.log("Home")
                          },

                          width: 8,
                          height: 8,
                        }}
                        SvgIcon={Back}
                      />
                    </View>
                  </BlurView>
                </SafeAreaView>
              );
            },
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="Cards"
          component={Cards}
          options={{
            headerTransparent: true,
            header: ({ navigation }) => {
              const {
                cards,
                setCards,
                modalButton, setModalButtons
              } = useContext(context);
              const [showSearch, setShowSearch] = useState(false);
              return (
                <SafeAreaView
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <BlurView
                    style={{
                      display: "flex",
                      padding: 30,
                      // paddingTop: 25,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                      //   paddingTop: 80,
                      backgroundColor: "#F0F0F3",
                    }}
                  >
                      <InsetButton
                        props={{
                          pressed: () => {
                            navigation.navigate("Home");
                          },

                          width: 8,
                          height: 8,
                        }}
                        SvgIcon={Back}
                      />
                    
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 400,
                        textAlign: "center",
                      }}
                    >
                      Cards
                    </Text>
                    
                      <InsetButton
                        props={{
                          pressed: () => {
                            setModalButtons(true);
                          },
                        }}
                        SvgIcon={Plus}
                      />
                    
                  </BlurView>
                  {showSearch && (
                    <View
                      style={{
                        width: "100%",
                        padding: 30,
                        paddingLeft: 60,
                        paddingRight: 60,
                        backgroundColor: "#F0F0F3",
                      }}
                    >
                      <SearchInput placeholder="Search" />
                    </View>
                  )}
                </SafeAreaView>
              );
            },
          }}
        ></Stack.Screen>


        <Stack.Screen
          name="AddCard"
          component={AddCard}
          options={{
            headerTransparent: true,
            header: ({ navigation }) => {
              const { editCardIndex, setEditCardIndex,setTitle1,title1, cardColor, setCardColor, title2, setTitle2, title3, setTitle3, title4, setTitle4, input1, setInput1, input2, setInput2, input3, setInput3, input4, setInput4,cards,setCards } = useContext(context);
              const reset = ()=>{
                setTitle1("");
                setTitle2("");
                setTitle3("");
                setTitle4("");
                setInput1("");
                setInput2("");
                setInput3("");
                setInput4("");
                setCardColor("");
                setEditCardIndex(null);
                navigation.navigate("Cards");
              }

              return (
                <SafeAreaView
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <BlurView
                    style={{
                      display: "flex",
                      padding: 30,
                      // paddingTop: 25,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                      //   paddingTop: 80,
                      backgroundColor: "#F0F0F3",
                    }}
                  >
                    <InsetButton
                      props={{
                        pressed: () => {
                          reset();
                        },

                        width: 8,
                        height: 8,
                      }}
                      SvgIcon={Back}
                    />

                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 400,
                        textAlign: "center",
                      }}
                    >
                      Add Card
                    </Text>

                    <TouchableOpacity
                      onPress={() => {
                        let arr = [...cards];
                        let obj = {
                          title1,
                          title2,
                          title3,
                          title4,
                          input1,
                          input2,
                          input3,
                          input4,
                          cardColor
                        };
                        if(editCardIndex==undefined || editCardIndex == null){
                          arr.push(obj);
                        }else{
                          arr[editCardIndex] = obj;
                          setEditCardIndex(null);
                        }
                        setCards(arr);
                        reset();
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
                      }}
                    >
                      <View
                        style={{
                          shadowColor: "#FFFFFF",
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
                          style={{
                            fontSize: 16,
                            fontWeight: 400,
                            color: "#2684FF",
                          }}
                        >
                          Save
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </BlurView>
                </SafeAreaView>
              );
            },
          }}
        ></Stack.Screen>


        <Stack.Screen
          name="Medications"
          component={Medications}
          options={{
            headerTransparent:true,
            header: ({ navigation }) => {
              const {  setNotesAction, searctText, setSearchText } =
                useContext(context);
              const [showSearch, setShowSearch] = useState(false);
              return (
                <SafeAreaView
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      padding: 30,
                      // paddingTop: 25,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                      //   paddingTop: 80,
                      backgroundColor: "#F0F0F3",
                    }}
                  >
                    <View style={{ width: "25%" }}>
                      <InsetButton
                        props={{
                          pressed: () => {
                            navigation.navigate("Home");
                          },

                          width: 8,
                          height: 8,
                        }}
                        SvgIcon={Back}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 400,
                        textAlign: "center",
                      }}
                    >
                      Medications
                    </Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "25%",
                        justifyContent: "space-between",
                      }}
                    >
                      <InsetButton
                        props={{
                          pressed: () => {
                            setNotesAction("NEW");
                            navigation.navigate("AddMedications");
                          },
                        }}
                        SvgIcon={Plus}
                      />
                      <InsetButton
                        props={{
                          pressed: () => {
                            setShowSearch(!showSearch);
                            setSearchText("");
                          },
                        }}
                        SvgIcon={Search}
                      />
                    </View>
                  </View>
                  {showSearch && (
                    <View
                      style={{
                        width: "100%",
                        padding: 30,
                        paddingLeft: 60,
                        paddingRight: 60,
                        backgroundColor: "#F0F0F3",
                      }}
                    >
                      <SearchInput
                        value={searctText}
                        setValue={setSearchText}
                        placeholder="Search"
                      />
                    </View>
                  )}
                </SafeAreaView>
              );
            },
          }}
        ></Stack.Screen>

        <Stack.Screen
          name="AddMedications"
          component={AddMedications}
          options={{
            headerStyle: { backgroundColor: "#F0F0F3" },
            header: ({ navigation }) => {
              const {medicates,setMedicates,medicateId,setMedicateId,name,SetName,dosage,setDosage,frequency,setFrequency,Mnotes,setMnotes } = useContext(context);
              return (
                <SafeAreaView>
                  <BlurView
                    style={{
                      display: "flex",
                      padding: 30,
                      // paddingTop: 25,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                      // paddingTop: 80,
                      backgroundColor: "#F0F0F3",
                    }}>


                    <View style={{ width: "26%" }}>
                      <InsetButton
                        props={{
                          pressed: () => {
                            navigation.navigate("Medications");
                            setMedicateId(-1);
                          },

                          width: 8,
                          height: 8,
                        }}
                        SvgIcon={Back}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 400,
                        textAlign: "center",
                      }}
                    >
                      {medicateId == -1?'Medicate':name}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        let obj = {
                          name:name,
                          dosage:dosage,
                          frequency:frequency,
                          notes:Mnotes
                        }
                        let arr = medicates;
                        if(medicateId==-1){
                          console.log("pushing");
                          obj.id = arr.length;
                          setMedicates([...medicates,obj])
                         
                        }else{
                          obj.id = medicateId;
                          arr[medicateId] = obj;
                          setMedicates(arr); 
                        }
                        
                          navigation.navigate("Medications");
                            setMedicateId(-1);
                            // console.log(medicates)
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
                        width: "26%",
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
                          style={{
                            fontSize: 16,
                            fontWeight: 400,
                            color: "#2684FF",
                          }}
                        >
                          Save
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </BlurView>
                </SafeAreaView>
              );
            },
          }}
        ></Stack.Screen>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

const final = () => {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  );
};

export default final;
