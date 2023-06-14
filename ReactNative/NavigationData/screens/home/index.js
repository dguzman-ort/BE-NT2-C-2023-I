import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Card, Icon } from '@rneui/themed';


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
        <Text>Lista de Vehiculos</Text>
      </View>
      <ScrollView>
        <View>
          {vehiculos.map(vehiculo => {
            return(
              <TouchableOpacity 
              key={vehiculo.id}
              onPress={() => navigation.navigate('Details', {
                id: vehiculo.id
              })}
              
              >
                <Card>
                  <Card.Title>{vehiculo.marca}</Card.Title>
                  <Card.Divider />
                    <View>
                      <Text>{vehiculo.modelo}</Text>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <Icon name='delete' />
                      </TouchableOpacity>
                      
                    </View>
                </Card>
              </TouchableOpacity>
              
            )
          })}
          
        </View>
      </ScrollView>
      
      
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
