import { Text, View, Image, ScrollView,StyleSheet } from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style = {styles.navzinha}>
       <Image source = {require('../assets/images/capenga.jpeg')} 
       style = {styles.perfil}>

       </Image>
       <Text style = {{}}> Sofia Mieko Galvão Chinen da Costa</Text>
      </View>

      <Image
        source={require('../assets/images/icone1.png')}
        style={{
          height: 300,
          width: 300,
          bottom: 0,
          position: 'relative',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center'
        }}
      ></Image>
      <View style={{ flex: 5 }}>
        <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 30, textAlign: 'center' }}>App MiauDote</Text>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
container: {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
},
navzinha:{
  height: 50,
  backgroundColor: '#d6408e',
  flex: 1,
  paddingHorizontal: 100

},
perfil:{
  width: 50,
  height: 50,
  borderRadius: 100
},


})
