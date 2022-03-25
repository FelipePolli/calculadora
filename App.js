import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState(0);

  function somar(){
    setResultado(parseFloat(valor1) + parseFloat(valor2));
  }

  function subtrair(){
    setResultado(parseFloat(valor1) - parseFloat(valor2));
  }

  function multiplicar(){
    setResultado(parseFloat(valor1) * parseFloat(valor2));
  }

  function dividir(){
    setResultado(parseFloat(valor1) / parseFloat(valor2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Boa Noite!</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://e7.pngegg.com/pngimages/814/85/png-clipart-computer-icons-calculator-icon-design-calculator-electronics-text.png',
        }}
      />
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor 1</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor1}
          onChangeText={(texto)=>setValor1(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor 2</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor2}
          onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={somar}
        >
            <Text style={styles.textoBotao}>Somar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={subtrair}
        >
            <Text style={styles.textoBotao}>Subtrair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={multiplicar}
        >
            <Text style={styles.textoBotao}>Multiplicar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={dividir}
        >
            <Text style={styles.textoBotao}>Dividir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Resultado: {resultado}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#483D8B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBloco:{
    fontSize:20,
    color:'#FFF'
  },
  texto:{
    color:'#FFF',
    fontSize:30
  },
  input:{
    borderColor:'#000',
    backgroundColor: '#FFF',
    borderWidth:2,
    fontSize:30,
    width:'80%'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao:{
    backgroundColor:'#40E0D0',
    width:'80%',
    textAlign:'center'
  },
  textoBotao:{
    color:"#fff",
    fontSize:30
  }, 
  logo:{
    width:50,
    height:50
  }
  
});
