import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@value')
      if (value !== null) {
        const data = JSON.parse(value)
        console.log('....', data)
        setMobileNumber(data.mobileNumber);
        setPassword(data.password);
      }
    } catch (e) {
      console.log('error', e)
    }
  }
  return (
    <View>
      <View>
        <Text>Mobile: {mobileNumber}</Text>
        <Text>Password: {password}</Text>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})