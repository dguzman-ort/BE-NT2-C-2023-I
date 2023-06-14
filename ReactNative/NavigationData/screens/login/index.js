import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import AuthContext from '../../globals/authContext';
import Storage from '../../services/asynStorage';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('')
  const { userAuth, setUserAuth } = useContext(AuthContext)

  const login = () => {

    // Se supone que aqui me logue contra el backend (API y/o IdP)
    const accessToken = "sd123e312dwef23iud3gqchb13vuycewbfi"
    setUserAuth(accessToken)
    Storage.storeData('AuthData', accessToken)
  }

  return (
    <View style={styles.container}>
      <Text>LOGIN</Text>
      <TextInput 
        placeholder='Email' 
        keyboardType='email-address' 
        value={email} onChangeText={(text) => 
        setEmail(text)} 
      />
      <TextInput placeholder='Password' keyboardType='visible-password' />

      <View>
        <Button title='Submit' onPress={login} />
      </View>
      <StatusBar style="auto" />
    </View>
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
