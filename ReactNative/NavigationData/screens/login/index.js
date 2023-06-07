import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('')

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
        <Button title='Submit' onPress={() => navigation.navigate('principal', {
          email
          // email: email
        })} />
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
