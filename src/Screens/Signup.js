import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Input from "./Input";
import Button from "./Button";
import React, { useEffect, useState } from "react";
import InsetShadow from "react-native-inset-shadow";
import SVG,{ Path } from "react-native-svg";

const Signup = ({ navigation }) => {
  // const emailPath = require("");
  const emailPH = "Email Address";
  // const passPath = require("");
  const passPH = "Password";
  // const googlePath = require("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = function () {
    navigation.navigate("Home");
  };

  const { height } = Dimensions.get("screen");
  return (
    <View
      style={{
        padding: 30,
        backgroundColor: "#F0F0F3",
        paddingBottom: 60,
        paddingTop: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: height,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 600, marginBottom: 40 }}>
        Create Account
      </Text>
      <View style={{ display: "flex", alignItems: "center", width: "100%" }}>
        {/* Email Input Start */}

        <View
          style={{
            backgroundColor: "#F0F0F3",
            width: "100%",
            marginBottom: 20,
          }}
        >
          <InsetShadow
            containerStyle={{
              borderRadius: 20,
              height: 50,
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
                  borderRadius: 20,
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
                  <SVG
                    style={{ marginRight: 5 }}
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M11.9347 6.40088L8.97255 8.80957C8.41288 9.25357 7.62547 9.25357 7.0658 8.80957L4.07861 6.40088"
                      stroke="#A3ADB2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.2723 14.5C13.2998 14.5056 14.6663 12.8397 14.6663 10.7922V6.21334C14.6663 4.16588 13.2998 2.5 11.2723 2.5H4.7271C2.69953 2.5 1.33301 4.16588 1.33301 6.21334V10.7922C1.33301 12.8397 2.69953 14.5056 4.7271 14.5H11.2723Z"
                      stroke="#A3ADB2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </SVG>

                  <TextInput
                    value={email}
                    onChangeText={(text) => {
                      setEmail(text);
                    }}
                    placeholder={emailPH}
                    style={{ width: "80%", color: "#A3ADB2" }}
                  />
                </View>
              </InsetShadow>
            }
          ></InsetShadow>
        </View>

        {/* Email Input End */}

        {/* Password Input Start */}

        <View
          style={{
            backgroundColor: "#F0F0F3",
            width: "100%",
            marginBottom: 20,
          }}
        >
          <InsetShadow
            containerStyle={{
              borderRadius: 20,
              height: 50,
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
                  borderRadius: 20,
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
                  <SVG
                    style={{ marginRight: 5 }}
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M10.9488 7.22903V5.7977C10.9488 4.12237 9.59016 2.7637 7.91483 2.7637C6.2395 2.75637 4.8755 4.10837 4.86816 5.78437V5.7977V7.22903"
                      stroke="#A3ADB2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.4553 15.097H5.36125C3.96525 15.097 2.83325 13.9656 2.83325 12.569V9.70964C2.83325 8.31297 3.96525 7.18164 5.36125 7.18164H10.4553C11.8513 7.18164 12.9833 8.31297 12.9833 9.70964V12.569C12.9833 13.9656 11.8513 15.097 10.4553 15.097Z"
                      stroke="#A3ADB2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M7.90828 10.3989V11.8796"
                      stroke="#A3ADB2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </SVG>

                  <TextInput
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => {
                      setPassword(text);
                    }}
                    placeholder={passPH}
                    style={{ width: "80%", color: "#A3ADB2" }}
                  />
                </View>
              </InsetShadow>
            }
          ></InsetShadow>
        </View>

        {/* Password Input End */}

        <View style={{ marginTop: 20, width: "100%" }}>
          <Button BtText="Sign up" pressed={nav} />
        </View>
      </View>

      <View style={{ display: "flex", alignItems: "center" }}>
        <Text
          style={{
            margin: 10,
            color: "#A3ADB2",
            fontWeight: 500,
            fontSize: 13,
          }}
        >
          Have an account?
        </Text>
        <TouchableOpacity onPress={() => nav()}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
