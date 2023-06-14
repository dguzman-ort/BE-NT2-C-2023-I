import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Details from './screens/details';
import Home from './screens/home';
import Login from './screens/login';
import { useEffect, useState } from 'react';
import AuthContext, { defaultAuth } from './globals/authContext';
import Settings from './screens/settings';
import Storage from './services/asynStorage';


export default function App() {

  const [userAuth, setUserAuth] = useState(defaultAuth)

  useEffect(() => {
    console.log("Busca AuthData....")
    Storage.getData('AuthData')
    .then(data => setUserAuth(data))
    .catch(error => console.log("Error", error))
    .finally(() => console.log("Si busco data"))
  }, [])

  // useEffect(() => {
  //   if (userAuth){
  //     console.log("Me acabo de loguear")
  //     Storage.storeData('AuthData', userAuth)
  //   }else{
  //     console.log("Me deslogueo")
  //     Storage.clearAll()
  //   }
    
  // }, [userAuth])


  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()
  return (
    <AuthContext.Provider value={{
      userAuth,
      setUserAuth
    }}>
      <NavigationContainer>

        {
          (userAuth) ?
            <Tab.Navigator>
              <Stack.Screen component={Home} name={'principal'} options={
                {
                  // headerShown: false,
                  headerBackVisible: false,
                  title: "test"
                }
              } />
              <Stack.Screen component={Details} name={'Details'} />
              <Stack.Screen component={Settings} name={'Settings'} />
            </Tab.Navigator>
            :
            <Stack.Navigator>
              <Stack.Screen component={Login} name={'Login'} options={
                {
                  headerShown: false
                }
              } />
            </Stack.Navigator>
        }




      </NavigationContainer>
    </AuthContext.Provider>

  );
}