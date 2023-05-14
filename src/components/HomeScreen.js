import * as React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screeqwn<Ionicons name="hand-right" color={'coral'} size={22}/>
  </Text>
      </View>
    );
  }