import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Card } from '@rneui/themed';
import AuthContext, { defaultAuth } from '../../globals/authContext';
import Storage from '../../services/asynStorage';

export default function Settings({route}) {
  
  const { setUserAuth } = useContext(AuthContext)

  const logout = () => {
    setUserAuth(defaultAuth)
    Storage.clearAll()
  }
  
  return (
    <View style={styles.container}>
          <Card>
            <Button
            title='Logout'
            onPress={logout}
             />
          </Card>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
