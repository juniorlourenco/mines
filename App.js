import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import params from './src/Params';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Iniciando o mines!!!</Text>
      <Text>Tamanho da grade:
        {params.getRowsAmount()}x{params.getColumnsAmount()}
      </Text>
    </View>
    );   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
