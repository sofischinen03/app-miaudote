import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ title: "Lista de Animais" }} 
      />
      <Stack.Screen 
        name="bichossingle/[id]" 
        options={{ title: "Sobre o Animal" }} 
      />
    </Stack>
  );
}
