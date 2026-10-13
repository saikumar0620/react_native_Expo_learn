import { View, Text, Button, Alert, StyleSheet } from 'react-native'


export default function AlertComponent() {
  return (
    <View style={styles.container}>
      <Text>alertComponent</Text>
      <Button  onPress={ () => Alert.alert(
        "alert poped up",
        "My Alert Msg",
        [{ text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
        { text: "OK", onPress: () => console.log("OK Pressed") }]

      )} title='test alert' />
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