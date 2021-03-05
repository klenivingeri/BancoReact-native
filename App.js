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
  areaPessoa:{
    backgroundColor: '#222',
    height:200,
    marginBottom:15
  },
  textoPessoa:{
    color: '#FFF',
    fontSize:20,


  }

});

export default App;

class Pessoa extends Component{

  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email}</Text>
      </View>
    );
  }
}






/*
 tira o scroll da barra lateral showsVerticalScrollIndicator
o ScrollView vem com o  scrollEnabled false trava a tela, true solta a tela




*/
