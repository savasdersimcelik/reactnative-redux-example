import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import { Provider } from "react-redux";
import { store } from './src/store/root.strore';
import ImagesScreen from './src/screens/ImagesScreen';

const Stack = createNativeStackNavigator();

const App = () => {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='HomeScreen'>
                    <Stack.Screen name='HomeScreen' component={HomeScreen} />
                    <Stack.Screen name='DetailScreen' component={DetailScreen} />
                    <Stack.Screen name='ImagesScreen' component={ImagesScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )

}

export default App;
