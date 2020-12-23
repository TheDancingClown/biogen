import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Modal, Image } from 'react-native';
import EventCard from './components/EventCard'
import HadeanEra from './src/HadeanCardList'
import ArcheanEra from './src/ArcheanCardList'
import ProterozoicEra from './src/ProterozoicCardList'

export default function App() {
  const [showEvent, setShowEvent] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(HadeanEra[0]);
  const [round, increment] = useState(0);
  const [discardPile, discardCard] = useState([]);
  const [time, progressTime] = useState(4)

  const drawEvent = () => {
    var card = selectEvent(round)
    setCurrentEvent(card);
    setShowEvent(true);
    increment(round + 1);
    progressTime(Math.round(((time - 0.2)+Number.EPSILON) * 100) / 100)
  }

  const performEvent = () => {
    setShowEvent(false)
  }

  const selectEvent = (round) => {
    if (round < 3) {
      return HadeanEra[Math.floor(Math.random() * HadeanEra.length)]
    } else if (round < 10) {
      return ArcheanEra[Math.floor(Math.random() * ArcheanEra.length)]
    } else if (round < 20) {
      return ProterozoicEra[Math.floor(Math.random() * ProterozoicEra.length)]
    } else {
      return
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/hadean.jpg')} style={styles.image}>

        <Text style={styles.buttonText}>{(time > 0) ? `${time} billion years ago` : 'Modern Day Earth'}</Text>
        
        <View style={styles.button}>
          <TouchableOpacity 
            style={styles.drawEventButton}
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
              card = {currentEvent}
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
