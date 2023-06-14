import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@rneui/themed';

import vehiculosService from "../../services/vehiculos";

export default function Details({route}) {
  
  const {id} = route.params || {}

  const [vehiculo, setVehiculo] = useState([])

  useEffect(() => {
    // Aqui hacemos el llamado
    console.log("***** Entramos al home y llamamos al servicio de vehiculo", id)
    vehiculosService.getById(id)
    .then(data => {
      console.log("Vehiculo", data)
      setVehiculo(data)
    })
    .catch(error => {
      //TODO: 
      console.log()
    })
  }, [])

  return (
    <View style={styles.container}>
          <Card>
            <Card.Title>{vehiculo.marca}</Card.Title>
            <Card.Divider />
              <View>
                <Text>ID: {vehiculo.id}</Text>
              </View>
              <View>
                <Text>Marca: {vehiculo.marca}</Text>
              </View>
              <View>
                <Text>Modelo: {vehiculo.modelo}</Text>
              </View>
              <View>
                <Text>Version: {vehiculo.version}</Text>
              </View>
              
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
