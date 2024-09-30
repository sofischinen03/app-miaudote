import { Tabs } from 'expo-router';
import { useFonts } from 'expo-font';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDog, faHome, faStar } from '@fortawesome/free-solid-svg-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    'Ubuntu-Bold': require("../assets/fonts/Ubuntu-Bold.ttf"),
  });

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="listaranimais"
        options={{
          title: "Animais",
          tabBarIcon: ({ tintColor }) => (
            <FontAwesomeIcon icon={faDog} color={tintColor} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ tintColor }) => (
            <FontAwesomeIcon icon={faHome} color={tintColor} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          title: "Sobre",
          tabBarIcon: ({ tintColor }) => (
            <FontAwesomeIcon icon={faStar} color={tintColor} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
