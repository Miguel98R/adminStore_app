import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

//IMportar componentes
import ListProducts from "./screens/ListProducts";
import CreateProducts from "./screens/CreateProducts";
import ShowProduct from "./screens/ShowProduct";

export default function App() {

    const Stack = createStackNavigator()

    function MyStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen name={"Productos"} component={ListProducts}/>
                <Stack.Screen name={"Create"} component={CreateProducts}/>
                <Stack.Screen name={"Show"} component={ShowProduct}/>
            </Stack.Navigator>
        )
    }


    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
