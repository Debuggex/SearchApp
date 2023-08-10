import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./Signup";
import Signin from "./Signin";
import Button from "./Button";


const Stack = createNativeStackNavigator();

const Navigation = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Signup">
                <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}}></Stack.Screen>               
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;

