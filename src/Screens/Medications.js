
import { useHeaderHeight } from '@react-navigation/elements';
import context from './Context/ContextProvider';
import { useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import SingleNote from './SingleNote';
import { Entypo } from "@expo/vector-icons";



const Medications = ({navigation})=>{
    

    
    const {medicates,setMedicates,medicateId,setMedicateId,searctText, setSearchText} = useContext(context);
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
        let arr = [...medicates];
        arr[id] = null;
        setMedicates(arr);
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
            <SafeAreaView style={{height:"100%"}}>
            <FlatList style={{ backgroundColor: "#F0F0F3", padding: 30, display: 'flex',marginTop:headerHeight }}
                data={filteredMedicate}
                renderItem={({ item, index }) => {
                    return (
                        item!=null && (<View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                            <SingleNote props={{ heading: item.name, key: index, pressed: () => { updateMedicate(item.id) } }} />
                            <Entypo style={{width:"10%",paddingTop:10,paddingBottom:10}} name="trash" size={20} color="red" onPress={()=>{deleteMedicate(item.id)}}/>
                        </View>)
                    )
                }}
            />
            </SafeAreaView>
        )
    }

}

export default Medications;