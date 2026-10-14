import { StatusBar } from "expo-status-bar";

import { Modal, StyleSheet, Text, View, Button, useWindowDimensions } from "react-native";
import ModalComponent from "./testComponents/ModalComponent";
import AlertComponent from "./testComponents/AlertComponent";
import StatusBarComponent from "./testComponents/StatusBarComponent";
import ActivityIndicator from "./testComponents/ActivityIndicator";

// const fav = require('./assets/favicon.png');

export default function App() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  // return <ModalComponent />;
  // return <AlertComponent />;
  // return <StatusBarComponent />;
  // return <ActivityIndicator />;
  return (
    <View style={styles.container}>
      <View style={[styles.box, { width: windowWidth > 400 ? 400 : windowWidth - 20, height: windowHeight > 400 ? 400 : windowHeight - 20 }]}>
      <Text style={[styles.text, { padding: windowHeight > 400 ? 20 : 10, fontSize: windowWidth > 400 ? 20 : 10 }]}>dynamic dimensions intractions with UI</Text>

      </View>
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
  text: {
    color: "red",
    
    textAlign: "center",
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid red",
    backgroundColor: "lightblue",
    borderRadius: 10,
  }
});
