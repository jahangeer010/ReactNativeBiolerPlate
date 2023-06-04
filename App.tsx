import * as React from 'react';
import { View, Text,KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Screens/HomeScreen';
import MapsScreen from './components/Screens/MapsScreen';
import RideOptionsCard from './components/Screens/RideOptionsCard'
import NavigateCard from './components/Screens/NavigateCard';
import { Provider } from 'react-redux'
import { Store } from './redux/Store'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FetchApiCall from './components/APIs/fetchApiCall';
import { setDestination,setOrigin,SetDestination } from '../AwesomeProject/redux/Slices/NavSlice'

const App = () => {
const Stack = createNativeStackNavigator();


  return (
<>
<Provider store={Store}>  
    <SafeAreaProvider>
    <NavigationContainer>
      <KeyboardAvoidingView 
      behavior={Platform.OS==="ios"?"padding":"height"}
      style={{flex:1}}>
      <Stack.Navigator>

      {/* <Stack.Screen name="FetchApiCall" component={FetchApiCall} options={{
          headerShown:false
        }}/> */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="MapsScreen" component={MapsScreen} options={{
          headerShown:false
        }}/>
         <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{
          headerShown:false
        }}/>
        <Stack.Screen name="NavigateCard" component={NavigateCard} options={{
          headerShown:false
        }}/>
        
      </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
    </SafeAreaProvider>
    </Provider>

    </>
  )
}
//for google maps goto https://github.com/FaridSafi/react-native-google-places-autocomplete
//npm install react-native-maps
//npm install react-native-maps-directions
// Commands to Install for navigation
//npm install react-native-screens react-native-safe-area-context
//npm install @react-navigation/native
//npm install @react-navigation/native-stack
//npm install react-native-gesture-handler
//npm install @react-native-masked-view/masked-view
//to run application
//npx react-native run-android
//for installing icons
//npm install react-native-vector-icons
//paste the following line in app src gradle file
//apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
//FOR ENV FILES 
//npm i react-native-dotenv
//after install of dotenv goto file babelconfig
// if you want fresh install all Delete Node modules by command  rm -rf node_modules
// to use gep location in react native
// npm install geolib --save
export default App