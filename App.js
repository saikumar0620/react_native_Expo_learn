import { View, Text, StyleSheet, SafeAreaViewBase } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context' 
import React from 'react'


export default function App() {
  return (
   <SafeAreaProvider style={styles.safeContainer}>  
      <View style={styles.container}>
        <Text style={styles.text}>App</Text>
      </View>
      </SafeAreaProvider>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'red',
    fontSize: 20,
  }
})