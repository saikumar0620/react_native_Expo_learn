import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

const myImage = require('./assets/profile.jpg');
// const fav = require('./assets/favicon.png');
const fav = require('./assets/favicon.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Text>start your first app from here !</Text>
      {/* <Image source={myImage} style={{ width: 300, height: 400 }} /> */}
      <Image source={fav} style={{ width: 100, height: 100 }} />

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
