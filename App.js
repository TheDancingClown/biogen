import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Modal, Image } from 'react-native';
import EventCard from './components/EventCard'
import HadeanEra from './src/HadeanCardList'
import ArcheanEra from './src/ArcheanCardList'

export default function App() {
  const [showEvent, setShowEvent] = useState(false);
  const [showEventCard, setEventCard] = useState({});
  const [showRound, incrementRound] = useState(0);
  var discardPile = []

  const drawEvent = () => {
    var card = {}
    if (showRound < 3) {
      card = HadeanEra[Math.floor(Math.random() * HadeanEra.length)]
    } else if (showRound < 10) {
      card = ArcheanEra[Math.floor(Math.random() * ArcheanEra.length)]
    }
    
    setEventCard(card);
    discardPile.push(card);
    setShowEvent(true)
    incrementRound(showRound + 1)
  }

  const performEvent = () => {
    setShowEvent(false)
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
              card = {showEventCard}
              />
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
