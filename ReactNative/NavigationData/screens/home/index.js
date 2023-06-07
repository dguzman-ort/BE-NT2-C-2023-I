import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@rneui/themed';

import vehiculosService from "../../services/vehiculos";

export default function Home({navigation, route}) {
  
  const params = route.params || {}

  const [vehiculos, setVehiculos] = useState([])

  useEffect(() => {
    // Aqui hacemos el llamado
    console.log("***** Entramos al home y llamamos al servicio de vehiculos")
    vehiculosService.getAll()
    .then(data => {
      //console.log("Vehiculos", data)
      setVehiculos(data)
    })
    .catch(error => {
      //TODO: 
    })
  }, [])

  return (
    <View style={styles.container}>
      
      <View>
        {vehiculos.map(vehiculo => {
          return(
            <Card key={vehiculo.id}>
              <Card.Title>{vehiculo.marca}</Card.Title>
              <Card.Divider />
                <View>
                  <Text>{vehiculo.modelo}</Text>
                </View>
            </Card>
          )
        })}
        
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
