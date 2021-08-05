import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    count: 0
  }

  onIncrement = () => {
    this.setState({
      count: this.state.count +1
    })
  }

  onDecrement = () => {
    this.setState({
      count: this.state.count -1
    })
  }


  render(){
    return (
      <View style={styles.container}>
        <Button style={styles.button} onPress={this.onIncrement}  title="+" />
        <Text style={styles.txt}> {this.state.count} </Text>
        <Button style={styles.button} onPress={this.onDecrement} title="-"/>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt: {
    color: 'white',
    fontSize: 200,
    margin: 30,
  },

  button: {
    color: 'red',
    marginTop: 20,
     padding: 20,
  },
});
