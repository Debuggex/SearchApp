
import { useHeaderHeight } from '@react-navigation/elements';
import context from './Context/ContextProvider';
import { useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import SingleNote from './SingleNote';
import { Entypo } from "@expo/vector-icons";
import Modal from "react-native-modal";
import InsetShadow from 'react-native-inset-shadow';
import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from 'react-native-popup-menu';



const Medications = ({navigation})=>{
    

    
    const {medicates,setMedicates,medicateId,setMedicateId,searctText, setSearchText} = useContext(context);
    const [showDelete,setShowDelete] = useState(false);
    const [deleteIndex,setDeleteIndex] = useState(-1);

    useEffect(()=>{
        console.log("updating Medicate")
        setIsData(true);
        checkData();
    },[medicates])

    const [isData,setIsData] = useState(false);

    const headerHeight = useHeaderHeight();

    const updateMedicate = (index) =>{
        console.log("index =>",index)
        setMedicateId(index);
        navigation.navigate('AddMedications')
    }

    const deleteMedicate = (id) => {
        if(id<0){
            setShowDelete(false);
            return;
        }
        let arr = [...medicates];
        arr[id] = null;
        setDeleteIndex(-1);
        setMedicates(arr);
        setShowDelete(false)
    }
    
    

    const filteredMedicate = medicates.filter((note)=>{
        if(searctText == undefined || searctText == null || searctText == ''){
            return true;
        }
        let isHeading = note.name.indexOf(searctText)!=-1;
        
        return isHeading;
    });

    const checkData = ()=>{
        for(let i = 0;i<filteredMedicate.length;i++){
            if(filteredMedicate[i]!=null){
               setIsData(false);
               return;
            }  
        }
        setIsData(true)
    }
    

    if(isData){
        return(
            <View style={{ backgroundColor: "#F0F0F3", display: 'flex', alignItems: 'center', justifyContent: "center", height: "100%" }}>
                <Text style={{ fontSize: 18, fontWeight: 400, marginBottom: 20 }}>Medications</Text>
                <Text style={{ color: "#A3ADB2", fontWeight: 500, fontSize: 14, marginBottom: 40 }}>Add Your Medications here</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('AddMedications') }} style={{ shadowColor: "#AEAEC0", shadowOpacity: 0.25, elevation: 5, shadowRadius: 5, shadowOffset: { width: 5, height: 5 }, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#F0F0F3", borderRadius: 100 }}>
                    <View style={{ shadowColor: "#FFFFFF", shadowOpacity: 0.25, elevation: 5, margin: 10, marginBottom: 5, marginTop: 5, shadowRadius: 5, shadowOffset: { width: -5, height: -5 }, display: "flex", flexDirection: "row", justifyContent: "center", padding: 5, paddingRight: 20, paddingLeft: 20, alignItems: "center", backgroundColor: "#F0F0F3", borderRadius: 100 }}>
                        <Text style={{ fontSize: 16, fontWeight: 400, color: "#2684FF" }}>Add</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }else{
        return(
            <SafeAreaView style={{height:"100%",backgroundColor: "#F0F0F3",display: 'flex'}}>
                
                <Modal
                    animationIn="slideInUp"
                    animationOut="slideOutDown"
                    coverScreen={true}
                    isVisible={showDelete}
                >
                    <View
                        style={{
                            width: "100%",
                            height: "30%",
                            padding: 30,
                            backgroundColor: "#F0F0F3",
                            borderRadius:20,
                            position: "absolute",
                            margin:"auto",
                            bottom: 0,
                            top:0
                        }}
                    >

                        {deleteIndex!=-1 && 
                        
                            <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginBottom:5}}>
                                 <Text>Are you sure you want to delete <b>{medicates[deleteIndex].name}</b> ?</Text>
                            </View>
                            }
                        <TouchableOpacity
                            onPress={() => {
                                deleteMedicate(deleteIndex);
                            }}
                            style={{
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
                                                setDeleteIndex(-1);
                                                setShowDelete(false);
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
                </Modal>

            <FlatList style={{ backgroundColor: "#F0F0F3", padding: 30,marginTop:headerHeight*0.6 }}
                data={filteredMedicate}
                renderItem={({ item, index }) => {
                    return (
                        item!=null && (<View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between",position:"relative"}}>
                            <SingleNote props={{ heading: item.name, key: index, pressed: () => { updateMedicate(item.id) } }} />
                                <MenuProvider style={{marginTop:15,marginBottom:15}}>
                                    <Menu>
                                        <MenuTrigger customStyles={{ triggerWrapper: { display: "flex", alignItems: "flex-end" } }}>
                                            <Entypo name="dots-three-vertical" size={20} color="black" />
                                        </MenuTrigger>
                                        <MenuOptions optionsContainerStyle={{ marginTop: 5 }}>
                                        <MenuOption text="Delete" onSelect={() => {
                                            setDeleteIndex(item.id);
                                            setShowDelete(true); }} />
                                        </MenuOptions>
                                    </Menu>
                                </MenuProvider>
                            
                            {/* <Entypo style={{width:"10%",paddingTop:10,paddingBottom:10}} name="trash" size={20} color="red" onPress={()=>{
                                setDeleteIndex(item.id);
                                setShowDelete(true);
                                }}/> */}
                        </View>)
                    )
                }}
            />
            </SafeAreaView>
        )
    }

}

export default Medications;