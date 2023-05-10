import { Button } from "react-native";
import { useContext } from "react";

import GlobalContext from "../../globals/context";

export default () => {

  const {estadoIniciado, setEstadoIniciado} = useContext(GlobalContext)

  return (
    <Button
      title={estadoIniciado ? 'Pausar' : 'Iniciar'}
      onPress={() => setEstadoIniciado(!estadoIniciado)}
    />
  )
}