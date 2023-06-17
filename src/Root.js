import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const Root = () => {

    const Stack = createNativeStackNavigator();

    return (
            <Stack.Navigator initialRouteName='LoginScreen'>
                <Stack.Screen name='LoginScreen'
                    component={LoginScreen}
                    options={{ headerStyle: false }}/>

                    <Stack.Screen name='HomeScreen'
                        component={HomeScreen}
                        options={{ headerStyle: false }}/>
            </Stack.Navigator>
       
    )
}

export default Root
// const Stack = createNativeStackNavigator();
    // return (
    //     <NavigationContainer independent={true}>
    //         <Stack.Navigator initialRouteName='SplashScreen'>
    //             <Stack.Screen name='SplashScreen'
    //                 component={SplashScreen}
    //                 options={{ headerShown: false }} />