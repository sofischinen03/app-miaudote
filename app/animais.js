import { Text, View, Image, StyleSheet} from "react-native";

export default function Animais() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
      }}
    >
      <Text></Text>
      <Image style = {styles.icones} source = {'../assets/images/pereba.png'}/>
      <Image style = {styles.icones} source = {'../assets/images/dentuço.png'}/>
      <Image style = {styles.icones} source = {'../assets/images/carma.png'}/>
      <Image style = {styles.icones} source = {'../assets/images/pagodudo.png'}/>

      
    </View>
  );
}

const styles = StyleSheet.create({
icones: {
    width: 150,
    height: 150
}
})