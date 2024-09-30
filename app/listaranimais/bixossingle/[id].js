import { useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import bichos from "../../../json/Bichos.json"; // Certifique-se de que o caminho está correto

export default function AnimalList() {
  const { id } = useLocalSearchParams(); // Recebe o tipo de animal da URL
  
  // Acessa a lista correta com base no parâmetro da URL
  const animalList = bichos[id] || []; // Garante que não quebre caso o id não exista
  
  return (
    <ScrollView>
      {animalList.map((animal) => (
        <View key={animal.idf} style={{ marginBottom: 20 }}>
          <Text>{animal.title}</Text>
          <Text>{animal.raça}</Text>
          <Text>{animal.idade}</Text>
          <Text>{animal.porte}</Text>
          <Image source={{ uri: animal.image }} style={{ width: 100, height: 100 }} />
        </View>
      ))}
    </ScrollView>
  );
}
