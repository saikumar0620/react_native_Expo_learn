import { StatusBar } from 'expo-status-bar';
import {  Modal, StyleSheet, Text, View,Button} from 'react-native';
import {useState} from 'react';


// const myImage = require('./assets/profile.jpg');
// const fav = require('./assets/favicon.png');
// const fav = require('./assets/favicon.png');

export default function ModalComponent() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text>start your first app from here !</Text>
      <Button title="Open Modal" onPress={() => setModalVisible(true)}>
      </Button>
      <Modal
        animationType="slide"
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}  
        presentationStyle="pageSheet"
        transparent={false}
        visible={modalVisible}
        // onRequestClose={() => {
        //   setModalVisible(false);
        // }}
      >
        <View style={{marginTop: 22, backgroundColor:'mistyrose',flex:1,alignItems:'center',justifyContent:'center'}}> 
          <Text> modal text</Text>
          <Button title="Close Modal" onPress={() => setModalVisible(false)}>
          </Button>
        </View>
      </Modal>
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
