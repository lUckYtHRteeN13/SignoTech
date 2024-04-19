import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import Splash from './screens/Splash'
import Search from './screens/Search';
import Home from './screens/Home';
import { StatusBar, Text } from 'react-native';
import Sign from './screens/Sign';
import Header from './components/Header';
import { BACKGROUND_COLOR, FOREGROUND_COLOR, MIDDLEGROUND_COLOR } from './constants/Constants';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" 
          component={Home} 
          options={({navigation}) => ({
            title:"SignoTech",
            headerTintColor: FOREGROUND_COLOR,
            drawerLabel:"Home",
            headerTitleAllowFontScaling: true,
            headerLeft: () => <Icon name='menu-outline' size={40} color={FOREGROUND_COLOR} onPress={() => {navigation.openDrawer()}}/>,

            headerStyle:{
              backgroundColor:MIDDLEGROUND_COLOR,
              height: 60,
            }, 
            headerTitleStyle: {
              fontSize: 24,
              fontFamily:'Arial Bold',
              color: FOREGROUND_COLOR,
            },
            headerLeftContainerStyle: {
              marginLeft: 10
            }
          })}
        />
    </Drawer.Navigator>
  )
}

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: ({ navigation, route, options, back }) => (
      <Header navigation={navigation} route={route} options={options} back={back} autoFocus={true}/>
      )}}>
        <Stack.Screen 
        name="splash" 
        component={Splash} 
        options={{headerShown: false}}
        />
        
        <Stack.Screen 
        name="drawer" 
        component={MyDrawer} 
        options={{headerShown: false}}
        />

      <Stack.Screen 
        name="search" 
        component={Search}
        options={{}}
        />
      
      <Stack.Screen
        name='sign'
        component={Sign}
        options={{}}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;