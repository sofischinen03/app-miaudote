import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import bichos from '../../json/Bichos.json';

export default function Lista() {
  const { tipo } = useLocalSearchParams();
  const router = useRouter(); 


  const animais = bichos[tipo] || [];

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push({ pathname: 'listaranimais/bixossingle/[id]', params: { id: item.idf, tipo: tipo } })}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.details}>Raça: {item.raça}</Text>
        <Text style={styles.details}>Idade: {item.idade}</Text>
        <Text style={styles.details}>Porte: {item.porte}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={animais}
        keyExtractor={(item) => item.idf.toString()}
        renderItem={renderCard}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row', 
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: 100, 
    height: 100, 
    borderRadius: 8,
  },
  infoContainer: {
    marginLeft: 10,
    justifyContent: 'center', 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
});