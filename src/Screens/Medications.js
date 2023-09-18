
import { useHeaderHeight } from '@react-navigation/elements';
import context from './Context/ContextProvider';
import { useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import SingleNote from './SingleNote';




const Medications = ({navigation})=>{
    
    useEffect(()=>{
        console.log("updating Medicate")
        setIsData(true);
    },[medicates])
    const {medicates,setMedicates,medicateId,setMedicateId,searctText, setSearchText} = useContext(context);

    const [isData,setIsData] = useState(false);

    const headerHeight = useHeaderHeight();

    const updateMedicate = (index) =>{
        console.log("index =>",index)
        setMedicateId(index);
        navigation.navigate('AddMedications')
    }

    

    const filteredMedicate = medicates.filter((note)=>{
        if(searctText == undefined || searctText == null || searctText == ''){
            return true;
        }
        let isHeading = note.name.indexOf(searctText)!=-1;
        
        return isHeading;
    });

    if(medicates.length == 0){
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
                        <SingleNote props={{ heading: item.name, key: index, pressed: () => { updateMedicate(item.id) } }} />
                    )
                }}
            />
            </SafeAreaView>
        )
    }

}

export default Medications;