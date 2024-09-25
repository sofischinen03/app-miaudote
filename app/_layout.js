import { Tabs } from "expo-router";
import React from "react";
import { useFonts } from 'expo-font';



import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDog, faHome, faStar } from '@fortawesome/free-solid-svg-icons';



export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
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
        name="animais"
        options={{
          title: "animais",
          tabBarIcon: ({ tintColor }) => (
            <FontAwesomeIcon icon={faDog} color={tintColor} size={24} />
          ),

        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "animais",
          tabBarIcon: ({ tintColor }) => (
            <FontAwesomeIcon icon={faHome} color={tintColor} size={24} />
          ),

        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          title: "animais",
          tabBarIcon: ({ tintColor }) => (
            <FontAwesomeIcon icon={faStar} color={tintColor} size={24} />
          ),

        }}
      />
    </Tabs>
  );
}