import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screen/splash";
import Login from "../screen/login";
import Create from "../screen/create";

const Stack = createStackNavigator();

export default function NavigationStack() {
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Create account" component={Create}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}