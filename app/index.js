import { Text, View, Pressable, StyleSheet, Image, ScrollView } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>App de Adoção</Text>

      <Link href="/sistema" asChild>
        <Pressable>Conheça o nosso sistema de adoção
        </Pressable>
      </Link>
      <Link href="/bichinhos" asChild>
        <Pressable>Bichinhos
        </Pressable>
      </Link>
    </View>
  );
}
