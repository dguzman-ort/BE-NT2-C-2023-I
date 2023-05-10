import { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import styles from "./styles";

import GlobalContext from "../../globals/context";

const interval = 1000
let idInterval
export default () => {
  const {
    estadoIniciado, 
    setEstadoIniciado,
    reset, 
    setReset
  } = useContext(GlobalContext)

  
  // const [nombre, setNombre] = useState("Damian")

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("Esto hago cuando se incializa mi componente")

    return () => {
      console.log("Mi componente deja de estar disponible")
      setReset(false)
      setEstadoIniciado(false)
      clearInterval(idInterval)
    }
  },[])

  useEffect(() => {
    if (reset){
      console.log("Limpiar todo")
      setCounter(0)
      setEstadoIniciado(false)
      clearInterval(idInterval)
    }
    
  }, [reset])


  useEffect(() => {
    console.log("Esta iniciado?", estadoIniciado);



    if (estadoIniciado){
      //tengo que detener mi contador
      idInterval = setInterval(() => {
        console.log(counter)
        setCounter((prev) => prev + 1)
      }, interval);
      console.log("idInterval => ", idInterval)
    }else{
      // Limpiar el contador? el estado?
      clearInterval(idInterval)
    }


  }, [estadoIniciado]) 



  return (
    <Text style={styles.contador}>{counter}</Text>
  )
}