import { useLocalSearchParams } from 'expo-router';
import bichosData from '../../../json/Bichos.json';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function AnimalDetails() {
  const { id, tipo } = useLocalSearchParams(); 
  const animal = bichosData[tipo].find(animal => animal.idf == id);

  if (!animal) {
    return <Text>Animal não encontrado!</Text>;
  }

  return (
    <View style={styles.container}>
      {/* Utiliza Image com a propriedade source dinâmica */}
      <Image source={animal.image} style={styles.image} />
      <Text style={styles.title}>{animal.title}</Text>
      <Text style={styles.description}>
        <Text style={styles.bold}>Raça:</Text> {animal.raça}{"\n"}
        <Text style={styles.bold}>Idade:</Text> {animal.idade}{"\n"}
        <Text style={styles.bold}>Porte:</Text> {animal.porte}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Me Adote</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4CAF50', // Cor verde
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

