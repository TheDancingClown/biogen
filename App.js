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

  const card = {
    "title": "Mars Paleo-Ocean",
    "information": "If early Mars had a denser atmosphere and warmer climate, nearly a third of its surface could have been covered by liquid water. It would have filled the Vastitas Borealis basin in the northern hemisphere, which mysteriously lies 4-5 km below the mean planetary elevation. Today enough methane lingers in the thin Martian air to indicate possible methanogen life dwelling under the surface, safe from cosmic radiation.",
    "cosmic": true,
    "oceanic": true,
    "coastal": false,
    "continental": false,
    "event": ["heaven", "heaven", "cooling"],
    "order": ["red", "yellow", "blue"]
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/hadean.jpg')} style={styles.image}>
        <View style={styles.button}>
          <TouchableOpacity style={styles.drawEventButton}
            onPress ={() => drawEvent()}
            >
              <Text style={styles.buttonText}>Draw Event</Text>
          </TouchableOpacity>
        </View>
        <Modal
          transparent={true}
          visible={showEvent}
          >
          <View style={styles.eventCard}>
            <EventCard 
              title={card.title}
              information={card.information}
              cosmic={card.cosmic}
              oceanic={card.oceanic}
              coastal={card.coastal}
              continental={card.continental}/>
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
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawEventButton: {
    backgroundColor: '#301263',
    width: 150,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
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
