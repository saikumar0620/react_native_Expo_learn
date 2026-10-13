import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import {useState} from 'react';

export default function ActivityIndicator() {
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.container}>
      <Text>activityIndicator</Text>
      <ActivityIndicator size="large" color="red" hidesWhenStopped={true} animating={loading} />
      <Button title={loading ? "Loading..." : "Loaded"} onPress={() => setLoading(!loading)} />
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