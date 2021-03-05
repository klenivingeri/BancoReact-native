
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList, // cria uma lista
  Switch // botão de liga e desliga
  } from 'react-native';



class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      status: false
    }
  }

  render(){

    return(
      <View style={styles.container}> 
        <Switch 
        value={this.state.status}
        onValueChange={(valorSwitch)=> this.setState({ status:valorSwitch})}
        thumbColor="blue"
        />
        <Text style={{textAlign:'center', fontSize:20}}>
          {this.state.status ? "Ativo": "Inativo"}
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

Documentação Slider
npm install @react-native-community/slider
import Slider from '@react-native-community/slider'



------------------------------------------------

Documentação Slider
npm install @react-native-community/slider
import Slider from '@react-native-community/slider'
*/




