import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

 const BASE_URL ="https://my-json-server.typicode.com/gkavlak/pokedex";

export default function App() {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    fetch('${BASE_URL}/pokemons')
    .then(res => res.json())
    .then(data =>setPokemons(data));

  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={pokemons}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => <Text>{item.name} </Text>}
      />

      
      <StatusBar style="auto" />
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
