import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-windows'
import Logo from '../src/asset/logo.png'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');

    const storeData = async (data) => {
        try {
          const jsonValue = JSON.stringify(data)
          await AsyncStorage.setItem('@value', jsonValue)
        } catch (e) {
         console.log('e', e)
        }
      }

    const login = async () => {
        // const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (mobileNumber === '') {
            Alert.alert('Enter the mobile number');
        } else if (mobileNumber.length !== 10) {
            Alert.alert('Enter valid mobile number');
        } else if (password == '') {
            Alert.alert('Please Enter the password');
        } else if (password.length != 8) {
            Alert.alert('Password length is to short');
        } else {

            const data ={
                mobileNumber:mobileNumber,
                password:password
            }
            await storeData(data)
            navigation.navigate('HomeScreen')
        }
    }

    return (
        <SafeAreaView>
            <Image
                source={Logo}
                style={styles.image} />
            <View>
                <TextInput placeholder='Enter your phone number'
                    style={styles.input}
                    onChangeText={number => setMobileNumber(number)}
                    defaultValue={mobileNumber}
                    maxLength={10}
                    keyboardType='numeric' />
            </View>
            <View>
                <TextInput placeholder='Enter your password'
                    style={styles.input}
                    onChangeText={pass => setPassword(pass)}
                    defaultValue={password} />
            </View>
            <TouchableOpacity style={styles.onpress} onPress={login}>
                <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView >
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    login: {
        color: 'black'
    },
    onpress: {
        width: '80%',
        alignSelf: 'center',
        backgroundColor: 'pink',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30
    },
    input: {
        width: '80%',
        alignSelf: 'center',
        marginVertical: 10,
        borderWidth: 1
    }, image: {
        height: 100,
        width: 100,
        alignSelf: 'center'
    },
})