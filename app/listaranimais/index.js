import { Text, View, Image, StyleSheet, Button, SafeAreaView} from "react-native";
import { useRouter } from "expo-router";

export default function Animais() {
  const router = useRouter();

  const handleNavigate = (tipo) => {
    router.push({
      pathname: 'lista',
      params: { tipo },
    });
  };

  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
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
      <Image style = {styles.icones} source = {'../assets/images/cachorro.png'}/>
      <Button style = {styles.button} color= "#d6408e" title= "Cachorros"
      onPress={() => router.push('/listaranimais/lista?tipo=Cachorros')}  ></Button>
      </View>
      <View
      >
      <Image style = {styles.icones} source = {'../assets/images/gato.png'}/>
      <Button style = {styles.button} color= "#d6408e" title= "Gatos"
      onPress={() => router.push('/listaranimais/lista?tipo=Gatos')}></Button>
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
      <View style = {{marginHorizontal: 10}}>
          <Image style = {styles.icones} source = {'../assets/images/coelho.png'}/>
          <Button style = {styles.button} color= "#d6408e" title= "Coelhos"
          onPress={() => router.push('/listaranimais/lista?tipo=Coelhos')} ></Button>
      </View>
      
      <View>
      <Image style = {styles.icones} source = {'../assets/images/papagaio.png'}/>
      <Button style = {styles.button}  color= "#d6408e" title= "Pássaros"
      onPress={() => router.push('/listaranimais/lista?tipo=Passaros')}  ></Button>
      </View>
    </View>
    </View>
    </SafeAreaView>
    
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