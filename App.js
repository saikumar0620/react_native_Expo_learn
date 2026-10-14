import { StatusBar } from "expo-status-bar";
import { Modal, StyleSheet, Text, View, Button } from "react-native";
import ModalComponent from "./testComponents/ModalComponent";
import AlertComponent from "./testComponents/AlertComponent";
import StatusBarComponent from "./testComponents/StatusBarComponent";
import ActivityIndicator from "./testComponents/ActivityIndicator";

// const fav = require('./assets/favicon.png');

export default function App() {
  // return <ModalComponent />;
  return <AlertComponent />;
  // return <StatusBarComponent />;
  // return <ActivityIndicator />;
  // return (
  //   <View style={styles.container}>
  //     <View style={styles.box}>
  //     <Text style={styles.text}>dynamic dimensions intractions with UI</Text>

  //     </View>
  //   </View>
  // )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
    padding: 20,
  },
  box: {

    alignItems: "center",
    justifyContent: "center",
    width: "100",
    height: "100",
    border: "1px solid red",
    backgroundColor: "lightblue",
    borderRadius: 10,
  }
});
