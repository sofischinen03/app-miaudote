import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView } from "react-native";

export default function Sobre() {
  return (
    <SafeAreaView>
    <ScrollView contentContainerStyle={styles.container}>
      <View style = {styles.parte}>
        <Text style={styles.titulo1}>Sobre o App</Text>
      </View>
      <Text style = {styles.titulo2}>Quem desenvolveu?</Text>
      <View style={styles.parte}> 
          <Image source= {require('../assets/images/sofia e willy.jpeg')}
          style={styles.imagem}/>
          <View style={styles.texto}>
            <Text>Este app foi desenvolvido pela aluna Sofia Chinen, do 3º ano C, do Ensino Médio Integrado ao Técnico em 
                  Desenvolvimento de Sistemas, da ETEC Professor Alfredo de Barros Santos, em Guaratinguetá - SP.</Text>
          </View>
      </View>
      <Text style = {styles.titulo2}> Sobre a ETEC</Text>
      <View style={styles.parte}> 
          <View style={styles.texto}>
            <Text> A ETEC Prof. Alfredo de Barros Santos, localizada em Guaratinguetá, 
              no Vale do Paraíba, tem vários cursos técnicos. A escola ficou em 2ºlugar no índice de aprovação no Provão
              Paulista na região, mostrando o alto nível de qualidade do ensino.</Text>
          </View>
          <Image source= {require('../assets/images/etec.jpeg')}
          style={styles.imagem}/>
      </View>
      <Text style = {styles.titulo2}> Motivação </Text>
      <View style={styles.parte}> 
          <View style={styles.nomes}>
            <Image source= {require('../assets/images/dengoso.jpeg')}
            style={styles.imagem2}/>
            <Text>Dengoso</Text>
          </View>
          <View style={styles.nomes}>
            <Image source= {require('../assets/images/snow.jpeg')}
            style={styles.imagem2}/>
            <Text>Snow</Text>
          </View>
          <View style={styles.nomes}>
            <Image source= {require('../assets/images/willy.jpeg')}
            style={styles.imagem2}/>
            <Text>Willy</Text>
          </View>
      </View>
          <View style ={{marginTop: 5}}>
          <Text> OBS: eles não estão para a adoção!</Text>
          </View>
    </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({ 
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
  texto:{
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  nomes:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  parte: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  imagem: {
    width: 125,
    height: 150 
  },
  imagem2:{
    width: 125,
    height: 125,
    borderRadius: 100,
    marginHorizontal: 5,
  },
  titulo1: { 
    fontFamily: 'Ubuntu-Bold',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: '#000',
    fontSize: 30
   },
   titulo2:{
    fontFamily: 'Ubuntu-Bold',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: '#000',
    fontSize: 20
   }
})