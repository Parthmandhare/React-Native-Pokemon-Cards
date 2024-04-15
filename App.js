import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { PokemonCards } from './Components/PokemonCards';

export default function App() {

  const charmander = {
    name: "Charmander",
    image: require("./assets/Charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"]
  }

  const Charizard = {
    name: "Charizard",
    image: require("./assets/Dragon.png"),
    type: "Fire",
    hp: 55,
    moves: ["Fire", "Flying"],
    weaknesses: ["Water", "Electric", "Rock"]
  }
  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/Square.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/Pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };
  return (
    
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.text}>Hello Saheb!</Text> */}

      <ScrollView >
        <PokemonCards {...Charizard} />
        <PokemonCards {...pikachuData} />
        <PokemonCards {...squirtleData} />
        <PokemonCards {...bulbasaurData} />
      </ScrollView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop:StatusBar.currentHeight,
    alignItems: "center"
  },



  text: {
    backgroundColor: Platform.OS === "ios" ? "red" : "lightpink"
  }
});
