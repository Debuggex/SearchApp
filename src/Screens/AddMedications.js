import { View } from "react-native";
import { Text } from "react-native";
import EditInputField from "./EditInputField";
import { TouchableOpacity } from "react-native";
import Logout from "../../Icons/Logout";
import Attach from "../../Icons/Attach";
import { useContext, useEffect, useState } from "react";
import Alarm from "../../Icons/Alarm";
import context from './Context/ContextProvider';


const AddMedications = ()=>{

    const {medicates,setMedicates,medicateId,setMedicateId,name,SetName,dosage,setDosage,frequency,setFrequency,Mnotes,setMnotes } = useContext(context);

    useEffect(()=>{

        if(medicateId!=-1){
            let obj = medicates[medicateId];
            SetName(obj.name);
            setDosage(obj.dosage);
            setFrequency(obj.frequency);
            setMnotes(obj.notes);
        }else{
            SetName('');
            setDosage('');
            setFrequency('');
            setMnotes('');
        }

    },[medicateId])

    return(
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
                      label: "Medication",
                      placeholder: "Enter Name",
                      value:name,
                      setValue:SetName
                    }}
                  />
                  <EditInputField
                    props={{
                      label: "Dosage",
                      placeholder: "Enter Dosage",
                      value:dosage,
                      setValue:setDosage
                    }}
                  />
                  <EditInputField
                    props={{
                      label: "Frequency",
                      placeholder: "Enter Frequency",
                      value:frequency,
                      setValue:setFrequency
                    }}
                  />
                  <EditInputField
                    props={{
                      label: "Notes",
                      placeholder: "Enter Notes",
                      value:Mnotes,
                      setValue:setMnotes
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
                        // navigation.navigate("Signup");
                        // resetSettings();
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
                          alignItems: "center",
                          width: "100%",
                          backgroundColor: "#F0F0F3",
                          borderRadius: 20,
                          padding: 13,
                        }}
                      >
                        <View style={{ display: "flex", flexDirection: "row",alignItems:"center",justifyContent:"center" }}>
                          <View
                            style={{
                              marginRight: 12,
                            }}
                          >
                            <Alarm />
                          </View>
                          <Text style={{ fontWeight: 600, fontSize: 16 }}>
                          Create Reminder
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
    )

}

export default AddMedications;