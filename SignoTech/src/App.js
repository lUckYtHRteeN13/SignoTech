import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './screens/Splash'
import Search from './screens/Search';
import Home from './screens/Home';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="splash" 
          component={Splash} 
          options={{headerShown: false}}
          />

        <Stack.Screen 
          name="home" 
          component={Home}
          options={{headerShown: false}}
          />
        
        <Stack.Screen 
          name="search" 
          component={Search} 
          options={{headerShown: false}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;