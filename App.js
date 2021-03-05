
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

  import Pessoa from './src/Pessoa'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id: '0', nome: 'Erick0', idade:28, email:'erick0@gmail.com'},
        {id: '1', nome: 'Erick1', idade:28, email:'erick1@gmail.com'},
        {id: '2', nome: 'Erick2', idade:28, email:'erick2@gmail.com'},
        {id: '3', nome: 'Erick3', idade:28, email:'erick3@gmail.com'},
        {id: '4', nome: 'Erick3', idade:28, email:'erick4@gmail.com'},
        {id: '5', nome: 'Erick3', idade:28, email:'erick5@gmail.com'},
      ]
    }
  }


  render(){
    return(
      <View style={styles.container}> 

          <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={ ({item}) => <Pessoa data={item}/> } />

      </View>    
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },


});

export default App;








/*
 tira o scroll da barra lateral showsVerticalScrollIndicator
o ScrollView vem com o  scrollEnabled false trava a tela, true solta a tela



Pode criar uma pasta com o nome do component, e salvar o file dentro dela  como index,
não precisa colocar nome, pq o react já procura o index dentro da pasta




*/
