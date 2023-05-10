import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import CustomButton from './components/CustomButton';

import GlobalContext, { defaultValue } from "./globals/context";

export default function App() {

  const [estadoIniciado, setEstadoIniciado] = useState(defaultValue)
  const [reset, setReset] = useState(false)
  const [nombre, setNombre] = useState("Damian")


  const cambioEstado = () => {
    setEstadoIniciado(!estadoIniciado)
  }

  return (
    <GlobalContext.Provider value={{
      estadoIniciado,
      setEstadoIniciado,
      reset,
      setReset
    }} >
      <View style={styles.container}>

        <Counter />

        <CustomButton />
        <Button
          title={'Reset'}
          onPress={() => setReset(true)}
        />
        <StatusBar style="auto" />
      </View>
    </GlobalContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
