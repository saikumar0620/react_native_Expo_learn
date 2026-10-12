import { StatusBar } from 'expo-status-bar';
import {  Modal, StyleSheet, Text, View,Button} from 'react-native';
import {useState} from 'react';



// const fav = require('./assets/favicon.png');


export default function App() {


  return (
    <View style={styles.container}>
      <Text>start your first app from here !</Text>
    </View>
  )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
