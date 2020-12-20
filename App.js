import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Modal, Image } from 'react-native';
import EventCard from './components/EventCard'

export default function App() {
  const [showEvent, setShowEvent] = useState(false);

  const drawEvent = () => {
    setShowEvent(true)
  }

  const performEvent = () => {
    setShowEvent(false)
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./src/hadean.jpg')} style={styles.image}>
        <TouchableOpacity style={styles.drawEventButton}
          onPress ={() => drawEvent()}
          >
            <Text style={styles.buttonText}>Draw Event</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={showEvent}
          >
          <View style={styles.eventCard}>
            <EventCard />
            <TouchableOpacity style={styles.closeEvent}
              onPress ={() => performEvent()}
              >
                <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
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
  },
  closeEvent: {
    backgroundColor: 'darkred',
    margin: 5,
    padding: 2,
    borderRadius: 5
  }
});
