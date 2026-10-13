import { StatusBar } from "expo-status-bar";
import { Modal, StyleSheet, Text, View, Button } from "react-native";
import ModalComponent from "./testComponents/ModalComponent";
import AlertComponent from "./testComponents/AlertComponent";
import StatusBarComponent from "./testComponents/StatusBarComponent";
import ActivityIndicator from "./testComponents/ActivityIndicator";

// const fav = require('./assets/favicon.png');

export default function App() {
  // return <ModalComponent />;
  // return <AlertComponent />;
  // return <StatusBarComponent />;
  // return <ActivityIndicator />;
  return (
    <View style={styles.container}>
      <Text style={ { color: "red",}}>styling inheritence</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
   
  },
});
