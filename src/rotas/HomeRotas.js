import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Inicial from '../telas/inicial';
import Home from '../telas/home';
import Card from '../telas/card';


const Stack = createNativeStackNavigator();
export default function HomeRotas(){

    return(
        <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen name="Inicio" component={Inicial} options={{
            title: '',
            navigationBarColor: '#4f699c',
            headerStyle: {
                backgroundColor: '#4f699c'
            }
            }} />
       
          
            <Stack.Screen name="home" component={Home} options={{
           title: '',
           headerBackVisible: false,
           navigationBarColor: '#4f699c',
           headerStyle: { 
               backgroundColor: '#4f699c',
            }
            }}/>

<Stack.Screen name="card" component={Card} options={{
           title: '',
           navigationBarColor: '#4f699c',
           headerStyle: { 
               backgroundColor: '#4f699c',
            }
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
          
}