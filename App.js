import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import EventCard from './components/EventCard'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./src/hadean.jpg')} style={styles.image}>
        <Text>Bios Genesis</Text>
        <TouchableOpacity style={styles.drawEventButton}
          onPress ={() => drawEvent()}
          >
            <Text style={styles.buttonText}>Draw Event</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={true}
          >
          <View style={styles.eventCard}>
            <EventCard />
          </View>
        </Modal>
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  drawEventButton: {
    backgroundColor: '#301263',
    padding: 10,
    marginTop: 15,
    width: 150,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  eventCard: {
    backgroundColor: "#000000aa", 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
