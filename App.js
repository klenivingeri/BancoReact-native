
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

  import {Picker} from '@react-native-picker/picker';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      pizza: 0,
      pizzas: [
        {key: '1', nome:'Strogonoff', valor: 60},
        {key: '2', nome:'Calabresa', valor: 50},
        {key: '3', nome:'Quatro queijos', valor: 60.99 },
        {key: '4', nome:'Brigadeiro', valor: 30},
        {key: '5', nome:'Banana', valor: 30}
      ]
    }
  }


  render(){

    let pizzaItem = this.state.pizzas.map((v,k) => {
      return <Picker.item key={k} value={k} label={v.nome} />
    })
    return(
      <View style={styles.container}> 

        <Text style={styles.logo}> Menu Pizza</Text>

        <Picker
        selectedValue={this.state.pizza}
        onValueChange={ (itemValue,itemIndex)=> this.setState({pizza: itemValue})}
        >
          {pizzaItem}
        </Picker>

        <Text  style={styles.pizza}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text  style={styles.pizza}>R$:{this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
   
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 20,
    

  },
  logo:{
    textAlign: 'center',
    fontSize:28,
    fontWeight: 'bold'
    
  },
  pizza:{
    marginTop: 15,
    fontSize:28,
    textAlign: 'center'
  }


});

export default App;








/*
 tira o scroll da barra lateral showsVerticalScrollIndicator
o ScrollView vem com o  scrollEnabled false trava a tela, true solta a tela



Pode criar uma pasta com o nome do component já representando o file, e salvar o  dentro dela  como index,
não precisa colocar nome, pq o react já procura o index dentro da pasta



------------------------------------------------
Documentação Picker: 

https://github.com/react-native-picker/picker

Comando para instalar: 

npm install @react-native-picker/picker​​
​E após instalar só importar:

import {Picker} from '@react-native-picker/picker';

*/
