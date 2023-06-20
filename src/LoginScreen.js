import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-windows'
import Logo from '../src/asset/logo.png'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Realm from 'realm'
// import { CERT_TABLE_PATH, UserTableSchema } from './LocalDB/AllSchema'

const LoginScreen = () => {
    const navigation = useNavigation();
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');

    const storeData = async (data) => {
        try {
          const jsonValue = JSON.stringify(data)
          await AsyncStorage.setItem('@value', jsonValue)
          navigation.navigate('HomeScreen');
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
            await storeData(data);
            // storeToRealmDb(mobileNumber,password);

        }
    }

    // const storeToRealmDb = async (mobile,pass) =>{
    //     const realm =await Realm.open({
    //         path:CERT_TABLE_PATH,
    //         schema:[UserTableSchema]
    //     })

    //     let task;
    //     realm.write(()=>{
    //         task=realm.create('Users',{
    //             _id: 1,
    //             mobile_number:mobile,
    //             password: pass,
    //         })
    //     })
    //     Alert.alert('Data stored sucessfully')
    //     navigation.navigate('HomeScreen')
    // }

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