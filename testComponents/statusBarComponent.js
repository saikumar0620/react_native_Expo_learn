import { View, Text, StatusBar, StyleSheet, Button } from 'react-native'
import { useState } from 'react';


export default function StatusBarComponent() {
  const [statusBarColor, setStatusBarColor] = useState('dark');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="blue" barStyle={statusBarColor === 'dark' ? 'dark-content' : 'light-content'} hidden={false} />
      <Text>statusBarComponent</Text>
      <Button style={styles.button} title="Change StatusBar Color" onPress={() => setStatusBarColor(statusBarColor === 'dark' ? 'light' : 'dark')} />
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
  button: {
    marginTop: 20,
    color: 'red',
  },
});