import { View } from "react-native";
import { Switch } from "react-native";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import InsetShadow from "react-native-inset-shadow";



const InsetSwitch = ({props}) =>{

    const switchIt=()=>{
      props.switch();
    }

    return (
      <ScrollView
        id={props.id}
        contentContainerStyle={{
          backgroundColor: "#F0F0F3",
          width: "100%",
          padding: 30,
          paddingBottom: 5,
          paddingTop: 5,
        }}
      >
        <InsetShadow
          containerStyle={{
            borderRadius: 25,
            height: 60,
            backgroundColor: "#F0F0F3",
          }}
          bottom={false}
          right={false}
          shadowColor="#AEAEC0"
          shadowOpacity={0.5}
          elevation={25}
          shadowRadius={15}
          shadowOffset={8}
        >
          <View
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "transparent",
            }}
          >
            <InsetShadow
              containerStyle={{
                borderRadius: 25,
                height: "100%",
                width: "100%",
                backgroundColor: "transparent",
                paddingLeft: 20,
                paddingRight: 20,
              }}
              top={false}
              left={false}
              shadowOffset={10}
              shadowOpacity={1}
              shadowRadius={15}
              elevation={10}
              shadowColor="white"
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: 600 }}>
                  {props.label}
                </Text>
                <Switch
                  value={props.isEnable}
                  ios_backgroundColor="#191C1E"
                  trackColor={{ true: "#191C1E", false: "#898A8D" }}
                  thumbColor={props.isEnable ? "#FFFFFF" : "#FFFFFF"}
                  onValueChange={switchIt}
                />
              </View>
            </InsetShadow>
          </View>
        </InsetShadow>
      </ScrollView>
    );

}


export default InsetSwitch;