import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Screens/HomeScreen';
import MapsScreen from './components/Screens/MapsScreen';
import { Provider } from 'react-redux'
import { Store } from './redux/Store'

const App = () => {
const Stack = createNativeStackNavigator();

  return (
    <Provider store={Store}>  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown:false
        }}/>
         <Stack.Screen name="MapsScreen" component={MapsScreen} options={{
          headerShown:false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

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
export default App