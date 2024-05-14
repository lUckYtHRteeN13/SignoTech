import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import store from './store'
import { Provider } from 'react-redux'

import Splash from './screens/Splash'
import Search from './screens/Search';
import Home from './screens/Home';
import Quiz from './screens/Quiz'
import Sign from './screens/Sign';
import About from './screens/About';
import Header from './components/SearchComponent';
import { HIGHLIGHT, BACKGROUND_COLOR, FOREGROUND_COLOR, MIDDLEGROUND_COLOR, TEXT_COLOR } from './constants/Constants';
import Alphabets from './screens/Alphabets';
import Favourites from './screens/Favorites';
import Phrases from './screens/Phrases';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" 
          component={Home} 
          options={({navigation}) => ({
            title:"SignoTech",
            headerTintColor: HIGHLIGHT,
            drawerLabel:"Home",
            headerTitleAllowFontScaling: true,
            headerLeft: () => <Icon name='menu-outline' style={{paddingLeft:5}} size={40} color={HIGHLIGHT} onPress={() => {navigation.openDrawer()}}/>,

            drawerLabelStyle : {
              color: TEXT_COLOR,
              fontSize: 16,
              fontFamily:'Arial Bold',
            },

            drawerStyle:{
              backgroundColor:MIDDLEGROUND_COLOR,
              justifyContent:'center',
              alignContent: 'center',
            },

            headerStyle:{
              backgroundColor:MIDDLEGROUND_COLOR,
              height: 60,
            }, 
            
            headerTitleStyle: {
              fontSize: 24,
              fontFamily:'Arial Bold',
              color: HIGHLIGHT,
            },

            headerLeftContainerStyle: {
              marginLeft: 10,
            }

          })}
        />

        <Drawer.Screen name="Alphabets" 
          component={Alphabets} 
          options={({navigation}) => ({
            title:"Alphabets",
            headerTintColor: HIGHLIGHT,
            drawerLabel:"Alphabets",
            headerTitleAllowFontScaling: true,
            headerLeft: () => <Icon name='menu-outline' style={{paddingLeft:5}} size={40} color={HIGHLIGHT} onPress={() => {navigation.openDrawer()}}/>,

            drawerLabelStyle : {
              color: TEXT_COLOR,
              fontSize: 16,
              fontFamily:'Arial Bold',
            },

            drawerStyle:{
              backgroundColor:MIDDLEGROUND_COLOR,
              justifyContent:'center',
              alignContent: 'center',
            },

            headerStyle:{
              backgroundColor:MIDDLEGROUND_COLOR,
              height: 60,
            }, 
            
            headerTitleStyle: {
              fontSize: 24,
              fontFamily:'Arial Bold',
              color: HIGHLIGHT,
            },

            headerLeftContainerStyle: {
              marginLeft: 10,
            }

          })}
        />

        <Drawer.Screen name="Favourites" 
          component={Favourites} 
          options={({navigation}) => ({
            title:"Favourites",
            headerTintColor: HIGHLIGHT,
            drawerLabel:"Favourites",
            headerTitleAllowFontScaling: true,
            headerLeft: () => <Icon name='menu-outline' style={{paddingLeft:5}} size={40} color={HIGHLIGHT} onPress={() => {navigation.openDrawer()}}/>,

            drawerLabelStyle : {
              color: TEXT_COLOR,
              fontSize: 16,
              fontFamily:'Arial Bold',
            },

            drawerStyle:{
              backgroundColor:MIDDLEGROUND_COLOR,
              justifyContent:'center',
              alignContent: 'center',
            },

            headerStyle:{
              backgroundColor:MIDDLEGROUND_COLOR,
              height: 60,
            }, 
            
            headerTitleStyle: {
              fontSize: 24,
              fontFamily:'Arial Bold',
              color: HIGHLIGHT,
            },

            headerLeftContainerStyle: {
              marginLeft: 10,
            }

          })}
        />

        <Drawer.Screen name="Phrases" 
          component={Phrases} 
          options={({navigation}) => ({
            title:"Available Phrases",
            headerTintColor: HIGHLIGHT,
            drawerLabel:"Available Phrases",
            headerTitleAllowFontScaling: true,
            headerLeft: () => <Icon name='menu-outline' style={{paddingLeft:5}} size={40} color={HIGHLIGHT} onPress={() => {navigation.openDrawer()}}/>,

            drawerLabelStyle : {
              color: TEXT_COLOR,
              fontSize: 16,
              fontFamily:'Arial Bold',
            },

            drawerStyle:{
              backgroundColor:MIDDLEGROUND_COLOR,
              justifyContent:'center',
              alignContent: 'center',
            },

            headerStyle:{
              backgroundColor:MIDDLEGROUND_COLOR,
              height: 60,
            }, 
            
            headerTitleStyle: {
              fontSize: 24,
              fontFamily:'Arial Bold',
              color: HIGHLIGHT,
            },

            headerLeftContainerStyle: {
              marginLeft: 10,
            }

          })}
        />

        <Drawer.Screen name="About Us" 
          component={About} 
          options={({navigation}) => ({
            title:"About Us",
            headerTintColor: HIGHLIGHT,
            drawerLabel:"About Us",
            headerTitleAllowFontScaling: true,
            headerLeft: () => <Icon name='menu-outline' style={{paddingLeft:5}} size={40} color={HIGHLIGHT} onPress={() => {navigation.openDrawer()}}/>,

            drawerLabelStyle : {
              color: TEXT_COLOR,
              fontSize: 16,
              fontFamily:'Arial Bold',
            },

            drawerStyle:{
              backgroundColor:MIDDLEGROUND_COLOR,
              justifyContent:'center',
              alignContent: 'center',
            },

            headerStyle:{
              backgroundColor:MIDDLEGROUND_COLOR,
              height: 60,
            }, 
            
            headerTitleStyle: {
              fontSize: 24,
              fontFamily:'Arial Bold',
              color: HIGHLIGHT,
            },

            headerLeftContainerStyle: {
              marginLeft: 10,
            }

          })}
        />
    </Drawer.Navigator>
  )
}

function App() {
  
  return (
    <Provider store={store}>

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

          <Stack.Screen
            name='quiz'
            component={Quiz}
            options={{headerShown: false}}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;