// @ts-nocheck
import { NavigationContext, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Settings } from 'react-native';
import { FlatList, SafeAreaView, StyleSheet, Text, View , Image,TouchableOpacity} from 'react-native';
import Search from './Search';


 const BASE_URL ="https://my-json-server.typicode.com/gkavlak/pokedex";
 const BASE_IMAGE_URL ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home";

export default function HomeScreen() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/pokemons`)
    .then(res => res.json())
    .then(data =>setPokemons(data))  

  }, []);
      const navigation = useNavigation();
     const detailsWarMode = () => {
      navigation.navigate("Settings")
    } 
    

  return (
    
    <SafeAreaView style={styles.container}>
     
      <FlatList
      data={pokemons}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            gap: 16,
            }}
    >       
          
            <Image
              style={{ width: 64, height: 64 }}
              source={{ uri: `${BASE_IMAGE_URL}/${item.pokemonId}.png` }}
            />
            <TouchableOpacity
            onPress={()=> detailsWarMode()} 
            
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {item.name}
            </Text>  
            
            </TouchableOpacity>
            
          </View>
        )}
      />
      
    </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
