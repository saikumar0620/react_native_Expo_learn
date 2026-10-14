import { View, Text, StyleSheet, Platform } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SafeAreaView } from 'react-native-safe-area-context' 
import CustomButton from './testComponents/CustomButton/CustomButton'


export default function App() {
  return (
   <SafeAreaView style={styles.safeContainer}>  
      <View style={styles.container}>
        <Text style={styles.text}>App</Text>
     
        {/* <CustomButton onPress={() => alert('Button Pressed')} title="Click Me" /> */}
         </View>
      </SafeAreaView>
    
  )
}


const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '##fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...Platform.select({
      ios: {
        fontSize: 30,
        // color: 'blue',
      },
      android: {
        fontSize: 25,
        // color: 'green',
      },
    }),
    
  }
})