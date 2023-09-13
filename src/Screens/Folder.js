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
import { useHeaderHeight } from "@react-navigation/elements";
import Spinner from "react-native-loading-spinner-overlay";
import BarcodeMask from "react-native-barcode-mask";
import * as ImageManipulator from 'expo-image-manipulator';


const Folder=({navigation})=>{
    const {isModal,
        isData,
        showModal,
        documents,
        setDocuments,
        isDocument,
        setIsDocuments,
        selectedFolder,
        setSelectedFolder} = useContext(context);


    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [tempImg, setTempImg] = useState("");
    const [showCameraView, setShowCamera] = useState(false);
    const [modalButton, setModalButtons] = useState(true);
    const [imagePreview, setImagePreview] = useState(false);
    const [newFolder, setNewFolder] = useState(false);
    const [folderName, setFolderName] = useState("");
    const [modalMargin, setModalMargin] = useState(19.5);
    const [loader,setLoader] = useState(false);
  
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
    setTempImg(base64);
    setImagePreview(true);
    setLoader(false)
  };

  

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
  
  hideModal = ()=>{
    showModal();
    setNewFolder(false);
    setModalButtons(true);
  }

  createFolder = () =>{
    
    selectedFolder.images.push(tempImg);
    let doc = documents;
    doc[selectedFolder.index] = selectedFolder;
    setDocuments(doc);
    // setDocuments([...documents[selectedFolder].images,tempImg]);
    
    hideCamera();
    setImagePreview(false);
    hideModal();
      setModalMargin(19.5);
  }
  

  
  showFolder=()=>{
      setModalMargin(19.5);
    createFolder();
  }

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

  showCamera = () => {
    setShowCamera(true);
    setModalButtons(false);
      setModalMargin(0);
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

  const takePicture = async () =>{
    if(this.camera){
        // this.camera.takePictureAsync(options = { base64: true, skipProcessing: true});
        const screenWidth = Dimensions.get("window").width;
        const screenHeight = Dimensions.get("window").height*0.56;
        
        const maskWidth = 219/screenWidth;
        const maskHeight = 326/screenHeight;

        const options = {
            quality: 0,
            skipProcessing: true, // Set to true to skip processing the image
            fixOrientation: true,
            forceUpOrientation: true,
            base64: true, // Capture in base64 format
            exif: false,
          };
          const data = await this.camera.takePictureAsync(options);
          setLoader(true);
              
          const maskX = (data.width - (data.width*maskWidth))/2;
            const maskY = (data.height - (data.height* maskHeight))/2;
       
            setShowCamera(false);
            const compressedImageData = await ImageManipulator.manipulateAsync(
              data.uri,
              [],
              { format: 'jpeg', compress: 0.5 } // Adjust the compression level as needed
            );
            const croppedImageData = await ImageManipulator.manipulateAsync(
            compressedImageData.uri,
            [
              {
                crop: {
                  originX: maskX,
                  originY: maskY,
                  width: compressedImageData.width*maskWidth,
                  height:compressedImageData.height*maskHeight
                },
              }
            ],
            { format: ImageManipulator.SaveFormat.JPEG,
            base64:true } // You can specify the desired format here
          );

        onPictureSaved(croppedImageData);
          
    }
    
}

    return(
        <View style={{ flexDirection:'row',padding:30,paddingTop:useHeaderHeight()+30,justifyContent:'space-between',flexWrap:'wrap',alignItems:'flex-start',height:"100%",backgroundColor:"#F0F0F3"}}>
            {selectedFolder.images.map((data,index)=>(
              <Image key={index} resizeMode="stretch" style={{height:200,marginBottom:10,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"48%"}} source={{ uri: data }}/>
            ))}

            <Modal isVisible={isModal} style={{ flex: 1, margin: modalMargin }} backdropOpacity={0.4}>
            <Spinner
                visible={loader}
                textContent="Processing Image"
                textStyle={{fontSize:16,fontWeight:600}}
                overlayColor="rgba(0,0,0,0.75)"
                />
            {modalButton && (
                <View
                style={{ backgroundColor: "#F0F0F3", borderRadius: 20, position:"absolute",bottom:0 }}
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
                        <View style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "56%" }}>
                            {/* <View style={{ width: 219, height: 326 }}> */}
                                <Camera
                                style={{ width: 219, height: 326 }}
                                    type={type}
                                    ref={(ref) => {
                                        this.camera = ref;
                                    }}
                                ><BarcodeMask width={219} height={326} showAnimatedLine={false}/></Camera>
                            {/* </View> */}
                        </View>
                        <View
                            style={{ backgroundColor: "#F0F0F3", position: "absolute", bottom: 0, width: "100%", height: "44%" }}
                        >
                            <View style={{ display: "flex", alignItems: "center", width: "100%" }}>
                                <Text style={{ fontSize: 18, margin: 30, marginBottom: 5 }}>Add Document</Text>
                                <Text style={{ fontSize: 12, color: "#A3ADB2", margin: 30, textAlign: "center" }}>Position your Document in the frame to take a picture</Text>

                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    // setAddCard(false);
                                    // setShowCamera(true)
                                    this.camera.takePictureAsync(options = { base64: true, skipProcessing: true, onPictureSaved: onPictureSaved, });
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
                                                    hideCamera();
                                                    setModalMargin(19.5);
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
                {/* <View
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
                </View> */}
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
                        <View style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "56%" }}>
                            <View style={{ width: 219, height: 326 }}>
                                <Image
                                    style={{ width: "100%", height: "100%" }}
                                    source={{ uri: tempImg }}
                                />
                            </View>
                        </View>
                        <View
                            style={{ backgroundColor: "#F0F0F3", position: "absolute", bottom: 0, width: "100%", height: "44%" }}
                        >
                            <View style={{ display: "flex", alignItems: "center", width: "100%" }}>
                                <Text style={{ fontSize: 18, margin: 30 }}>Add Document</Text>

                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    showFolder();
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
                                    <Text style={{ fontSize: 16, fontWeight: 400 }}>Continue</Text>
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
                                                    reCapture();
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
                {/* <InsetShadow
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
                ></InsetShadow> */}
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
        </View>
    )
}

export default Folder;