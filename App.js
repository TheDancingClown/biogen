import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Modal, Image } from 'react-native';
import EventCard from './components/EventCard';
import { Template, HadeanEon, ArcheanEon, ProterozoicEon } from './src/EventCardList';

export default function App() {
  const [showEvent, setShowEvent] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(Template);
  const [round, increment] = useState(0);
  const [discardPile, discardCard] = useState([]);
  const [timeClock, progressTime] = useState(4.6);
  const [eonImage, setEonImage] = useState(require('./assets/hadean.jpg'));

  const drawEvent = () => {
    if (timeClock > 0.6) {
    var card = selectEvent(round)
    setCurrentEvent(card);
    setShowEvent(true);
    increment(round + 1);
    progressTime(Math.round(((timeClock - 0.2)+Number.EPSILON) * 100) / 100)
    }
  }

  const performEvent = () => {
    setShowEvent(false)
  }

  const selectEvent = (round) => {
    if (round < 3) {
      return HadeanEon[Math.floor(Math.random() * HadeanEon.length)]
    } else if (round < 10) {
      setEonImage(require('./assets/archean.jpg'))
      return ArcheanEon[Math.floor(Math.random() * ArcheanEon.length)]
    } else if (round < 20) {
      setEonImage(require('./assets/proterozoic.jpg'))
      return ProterozoicEon[Math.floor(Math.random() * ProterozoicEon.length)]
    } else {
      return
    }
  }

  return (
    
    <View style={styles.container}>
      <StatusBar style = "auto" hidden = {true} />
      
      
      <ImageBackground 
        source = {eonImage}
        style={styles.image}>

        <View style={styles.gameStatus}>
          <Text style={styles.statusText}>{(timeClock > 0.6) ? `${timeClock} billion years ago` : 'Phanerozoic Eon'}</Text>
          <Text style={styles.statusText}>{currentEvent.title}</Text>
        </View>

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
  gameStatus: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  statusText: {
    color: 'white',
    textAlign: 'center',
    margin: 10
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
