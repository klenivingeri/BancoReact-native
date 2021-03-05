
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
  } from 'react-native';

import Slider from '@react-native-community/slider';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      valor: 50
    }
  }

  render(){

    return(
      <View style={styles.container}> 
          <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado})}
          value={this.state.valor}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="red"
          />
          <Text style={{textAlign: 'center', fontSize: 20}}>
            {this.state.valor.toFixed(0)}
          </Text>
        
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 20,
  }
});

export default App;








/*
 tira o scroll da barra lateral showsVerticalScrollIndicator
o ScrollView vem com o  scrollEnabled false trava a tela, true solta a tela


------------------------------------------------
Pode criar uma pasta com o nome do component já representando o file, e salvar o  dentro dela  como index,
não precisa colocar nome, pq o react já procura o index dentro da pasta



------------------------------------------------
Documentação Picker: 

https://github.com/react-native-picker/picker

Comando para instalar: 

npm install @react-native-picker/picker​​
​E após instalar só importar:

import {Picker} from '@react-native-picker/picker';


------------------------------------------------
npm install @react-native-community/slider
import Slider from '@react-native-community/slider'
*/
