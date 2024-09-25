import { Text, View, Image, StyleSheet, Button} from "react-native";

export default function Animais() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <Text style={styles.text}>Qual você quer adotar hoje?</Text>
      
    <View
    style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
      }}
    >
      <View style = {{marginHorizontal: 10}}>
      <Image style = {styles.icones} source = {'../assets/images/pereba.png'}/>
      <Button style = {styles.button} color= "#d6408e" title= "Cachorros"></Button>
      </View>
      <View
      >
      <Image style = {styles.icones} source = {'../assets/images/dentuço.png'}/>
      <Button style = {styles.button} color= "#d6408e" title= "Gatos"></Button>
      </View>
    </View>

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
      }}
     >
      <View style = {{marginHorizontal: 10}}
      >
      <Image style = {styles.icones} source = {'../assets/images/carma.png'}/>
      <Button style = {styles.button} color= "#d6408e" title= "Coelhos"></Button>
      </View>
      
      <View>
      <Image style = {styles.icones} source = {'../assets/images/pagodudo.png'}/>
      <Button style = {styles.button}  color= "#d6408e" title= "Pássaros"></Button>
      </View>
     

    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
icones: {
    width: 150,
    height: 150,
    marginBottom: 10
},

button: {
  color: '#d6408e',
  flex: 1, 
  justifyContent: 'center', 
  marginHorizontal: 10
},
text: {
  fontSize: 25,
  fontFamily: 'Ubuntu-Bold',
  margin: 10
}
})