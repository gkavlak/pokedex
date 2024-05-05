import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen'
import { AppRegistry, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { FlatList, SafeAreaView, Image,TouchableOpacity} from 'react-native';
import Settings from './SettingsScreen';
import Search from './Search';
// @ts-ignore
import { AntDesign } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const App = () => {
    return (
      <NavigationContainer>
      <Tab.Navigator>
      
      <Tab.Screen 
      name="Home" component={HomeScreen}
      options={{
        tabBarLabel : "Anasayfa",
        tabBarIcon: ({color,size}) =>{
          return <Feather name="home" size={24} color="dodgerblue" />;
        }
      }
      }     
      />
      <Tab.Screen 
      name="Search" component={Search}
      options={{
        tabBarLabel : "Arama",
        tabBarIcon: ({color,size}) =>{
                            // @ts-ignore
          return <AntDesign name="search" size={24} color="dodgerblue" />;
        }
      }
      }     
      />
      <Tab.Screen name="Settings" component={Settings}
        options={{
        tabBarLabel : "Ayarlar",
          tabBarIcon: ({color,size}) =>{
          return <Feather name="settings" size={24} color="dodgerblue" />;
        }
      } 
      }
      />
    </Tab.Navigator>
      </NavigationContainer>   
  )
}
export default App

const styles = StyleSheet.create({})