import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { FlatList, SafeAreaView, Image,TouchableOpacity} from 'react-native';
import Settings from './SettingsScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const App = () => {
  
    return (
      <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen 
      name="Home" component={HomeScreen}
      options={{
        tabBarLabel : "AnaSayfa",
         tabBarIcon: ({color,size}) =>{
          return <Entypo name="home" size={size} color={color} />;
        }
      }
        
      }     
      />
      <Tab.Screen name="Settings" component={Settings}
       options={{
        tabBarLabel : "AYARLAR",
         tabBarIcon: ({color,size}) =>{
          return <Ionicons name="settings" size={size} color={color} />;
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