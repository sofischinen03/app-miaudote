import { Text, View, Image, ScrollView,StyleSheet } from "react-native";

export default function Index() {
  return (

    <ScrollView contentContainerStyle={styles.container}>

      <View style = {styles.navzinha}>
        <View style = {{flex: 3}}>
        <Text style = {{
            color: '#fff',
            fontSize: 30,
            fontFamily: 'Ubuntu-Bold',
            alignItems: 'left',
            margin: 30
           }}
           >Bem-vindo ao app Miaudote! </Text>
        </View>
        <View style = {{flex: 1}}> 
          <Image source = {require('../assets/images/pastor alemao.png')}
            style={styles.logo}
          />
          <View style ={{
            flex: 2,
            alignItems: 'left'
          }}
          >
          
    
          
          </View>
        </View>

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
          justifyContent: 'center',
          marginTop: 100
        }}
      ></Image>
      <View style={{ flex: 5, marginBottom: 70 }}>
        <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 30, textAlign: 'center' }}>App MiauDote</Text>
        <Text> É aqui onde os bichinhos conseguem o melhor lar!</Text>
      </View>
  

      <View style={styles.parte}> 
      <Image source= {require('../assets/images/coelhinho-da-pascoa.png')}
          style={styles.imagem}/>
          <View style={styles.texto}>
            <Text>Aqui, você consegue saber tudo sobre os bichinhos sem precisar sair de casa.</Text>
        </View>
      </View>
      <View style={styles.parte}> 
          <View style={styles.texto}>
            <Text> Você pode conversar com quem está doando para mais informações!</Text>
          </View>
          <Image source= {require('../assets/images/papagaio1.png')}
          style={styles.imagem}/>
      </View>
      <View style={styles.parte}> 
      <Image source= {require('../assets/images/gato-preto.png')}
          style={styles.imagem}/>
          <View style={styles.texto}>
            <Text>E além de tudo isso, é tudo muito prático!!!.</Text>
        </View>
      </View>

      <View>
        <Text style = {{fontFamily: 'Ubuntu-Bold', fontSize: 30, marginLeft: 50}}>Neste app, você pode: </Text>
        <Image source = {require('../assets/images/cards.png')}
        />
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
  height: 200,
  backgroundColor: '#d6408e',
  width: '100%',
  flexDirection: 'row'
},
logo: {
  height: 300,
  width: 300,
  flex: 1
},
parte: {
  flexDirection: 'row', 
  alignItems: 'center',
  margin: 30
},
imagem: {
  width: 125,
  height: 150 
},
texto:{
  flex: 1,
  marginLeft: 20,
  marginRight: 20,
}

})
