import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SingleNote from "./SingleNote";
import { useContext, useEffect, useState } from "react";
import context from "./Context/ContextProvider";
import Modal from "react-native-modal";
import InsetShadow from "react-native-inset-shadow";
import { Camera, CameraType } from "expo-camera";
import Input from "./Input";
import Button from "./Button";
import InsetButton from "./InsetButton";
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';

const Documents = ({ navigation, route }) => {
  const {
    isModal,
    isData,
    showModal,
    documents,
    setDocuments,
    isDocument,
    setIsDocuments,
    selectedFolder,
    setSelectedFolder
  } = useContext(context);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [tempImg, setTempImg] = useState("");
  const [showCameraView, setShowCamera] = useState(false);
  const [modalButton, setModalButtons] = useState(true);
  const [imagePreview, setImagePreview] = useState(false);
  const [newFolder, setNewFolder] = useState(false);
  const [folderName, setFolderName] = useState("");

  const { height } = Dimensions.get("window");

  useEffect(() => {
    requestPermission((response) => {
      permission = response;
    });
    if(documents.length!=0){
      setIsDocuments(true);
    }else{
      setIsDocuments(false);
    }
  },[documents]);

  onPictureSaved = async(photo) => {
    setShowCamera(false);
    let base64 = "data:image/png;base64,"+photo.base64.toString();
    // const base64Img = await FileSystem.readAsStringAsync(photo.uri, { encoding: FileSystem?.EncodingType?.Base64 });
    // console.log("uri-64 => ",base64Img);
    setTempImg(base64);
    setImagePreview(true);
    
  };

  
  showFolder=()=>{
    setImagePreview(false);
    setModalButtons(false);
    setNewFolder(true);
  }

  selectFolder = (data)=>{
    // console.log(data);
    setSelectedFolder(data);
    navigation.navigate('Folder');
  }

  flipCamera = () => {
    if (type == CameraType.back) {
      setType(CameraType.front);
    } else {
      setType(CameraType.back);
    }
  };

  uploadFile = () =>{
    DocumentPicker.getDocumentAsync({copyToCacheDirectory:true,type:'image/*',multiple:false}).then(async(response)=>{
      if(response.canceled==false){
        
        let uri = response.assets[0].uri;
        await FileSystem.readAsStringAsync(uri, { encoding: FileSystem?.EncodingType?.Base64 }).then((response)=>{
        
        let base64 = "data:image/png;base64,"+response;
        setTempImg(base64);
        showFolder();
      });
      }
    })
  }
  
  hideModal = ()=>{
    showModal();
    setNewFolder(false);
    setModalButtons(true);
  }

  createFolder = () =>{
    if(folderName=="" || folderName==null || folderName==undefined){
      return;
    }
    let arr = [];
    arr.push(tempImg);
    let obj = {
      folderName:folderName,
      id:documents.length,
      images:arr
    }
    setDocuments([...documents,obj]);
    
    // console.log("OBJ=>",documents);
    setFolderName("");
    hideModal();
  }

  showCamera = () => {
    setShowCamera(true);
    setModalButtons(false);
  };


  hideCamera = () => {
    setShowCamera(false);
    setModalButtons(true);
  };

  reCapture = () => {
    setShowCamera(true);
    setImagePreview(false);
    setTempImg("");
  };

    return (
      <View
        style={{
          backgroundColor: "#F0F0F3",
          paddingTop: 0,
          paddingBottom: 50,
          display: "flex",
          height: height,
        }}
      >
        <Modal isVisible={isModal} style={{ flex: 1 }} backdropOpacity={0.4}>
          {modalButton && (
            <View
              style={{ backgroundColor: "#F0F0F3", borderRadius: 20, top: 100 }}
            >
              <TouchableOpacity
                onPress={() => {
                  showCamera();
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
                  <Text style={{ fontSize: 16, fontWeight: 400 }}>Camera</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  uploadFile();
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
                    Choose a photo
                  </Text>
                </View>
              </TouchableOpacity>
              {/* <TouchableOpacity
                onPress={() => {
                  goAddNotes();
                }}
                style={{
                  margin: 30,
                  marginBottom: 15,
                  marginTop: 5,
                  shadowColor: "#AEAEC0",
                  shadowOpacity: 0.25,
                  height: 60,
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
                    iCloud Files
                  </Text>
                </View>
              </TouchableOpacity> */}
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
          {showCameraView && (
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
                    hideCamera();
                  }}
                  style={{ backgroundColor: "white", borderRadius: 20 }}
                >
                  <Text style={{ margin: 10, marginRight: 15, marginLeft: 15 }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.camera.takePictureAsync(options={base64:true,skipProcessing: true,onPictureSaved: this.onPictureSaved,});
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
          )}
          {imagePreview && (
            <View
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
              }}
            >
              <Image
                style={{ width: "100%", height: "77%" }}
                source={{ uri: tempImg }}
              />
              <InsetShadow
                containerStyle={{
                  borderRadius: 25,
                  height: 60,
                  backgroundColor: "#F0F0F3",
                  margin: 30,
                  marginBottom: 5,
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
                        onPress={() => showFolder()}
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
                          Continue
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </InsetShadow>
                }
              ></InsetShadow>
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
                        onPress={() => reCapture()}
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
          {newFolder && (
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#F0F0F3",
                borderRadius: 20,
                padding: 30,
              }}
            >
              <Text style={{ fontSize: 16, margin: 5 }}>Folder Name</Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#A3ADB2",
                  margin: 5,
                  marginBottom: 10,
                }}
              >
                Enter a folder name{" "}
              </Text>
              <InsetShadow
                containerStyle={{
                  borderRadius: 25,
                  height: 60,
                  width:"100%",
                  backgroundColor: "#F0F0F3",
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
                        justifyContent: "flex-start",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <TextInput
                        autoCorrect={false}
                        placeholder="Folder Name"
                        value={folderName}
                        onChangeText={(text)=>{setFolderName(text)}}
                        style={{ width: "80%", color: "#A3ADB2" }}
                      />
                    </View>
                  </InsetShadow>
                }
              ></InsetShadow>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <InsetShadow
                  containerStyle={{
                    borderRadius: 25,
                    height: 60,
                    backgroundColor: "#F0F0F3",
                    marginTop: 5,
                    width: "48%",
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
                          onPress={() => hideModal()}
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
                <TouchableOpacity
                onPress={()=>createFolder()}
                  style={{
                    shadowColor: "#AEAEC0",
                    shadowOpacity: 0.25,
                    elevation: 5,
                    shadowRadius: 5,
                    shadowOffset: { width: 5, height: 5 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "48%",
                    backgroundColor: "#FFF",
                    borderRadius: 100,
                    marginBottom: 20,
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
                      justifyContent: "center",
                      height: 60,
                      alignItems: "center",
                      width: "100%",
                      backgroundColor: "#F0F0F3",
                      borderRadius: 100,
                    }}
                  >
                    <Text style={{ fontWeight: 600, fontSize: 16 }}>OK</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Modal>

        {!isDocument && <View style={{width:"100%",height:"100%",padding:30,display: "flex",alignItems: "center",justifyContent: "center",}}>
          <Text style={{ fontSize: 18, fontWeight: 400, marginBottom: 20 }}>
            Documents
          </Text>
          <Text
            style={{
              color: "#A3ADB2",
              fontWeight: 500,
              fontSize: 14,
              marginBottom: 40,
              textAlign:"center"
            }}
          >
            Create folders to store your medical documents.
          </Text>
          <TouchableOpacity
            onPress={() => showModal()}
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
              <Text style={{ fontSize: 16, fontWeight: 400, color: "#2684FF" }}>
                Add
              </Text>
            </View>
          </TouchableOpacity>
        </View>}
        {isDocument && 
          <View style={{ flexDirection:'row',padding:30,justifyContent:'space-between',flexWrap:'wrap',alignItems:'flex-start'}}>
            {documents.map((data,index)=>(
              <TouchableOpacity onPress={()=>{selectFolder(data.id)}} key={index} style={{borderRadius:20,height:155,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"48%",margin:1,marginBottom:15,backgroundColor:"#F0F0F3",shadowColor:"#AEAEC0",shadowOpacity:0.25,elevation:5,shadowRadius:5,shadowOffset:{width:5,height:5}}} ><Text style={{fontSize:16}}>{data.folderName}</Text></TouchableOpacity>
            ))}
          </View>
        }
      </View>
    );
  
};

export default Documents;
