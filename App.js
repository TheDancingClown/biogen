import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Modal, Image } from 'react-native';
import EventCard from './components/EventCard';
import GameStatus from './components/GameStatus';
import RefugiaCard from './components/RefugiaCard';
import { Template, HadeanEon, ArcheanEon, ProterozoicEon, CosmicRefugia, OceanicRefugia, CoastalRefugia, ContinentalRefugia } from './src/CardList';

export default function App() {
  const [showEvent, setShowEvent] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(Template);
  const [round, increment] = useState(0);
  const [discardPile, discardCard] = useState([999]);
  const [timeClock, progressTime] = useState(4.6);
  const [backgroundImage, setBackgroundImage] = useState(require('./assets/hadean.jpg'));
  const [temperatureSequence, addTemperatureSequence] = useState([]);

  const drawEvent = () => {
    if (timeClock > 0.6) {
      var card = currentEvent
      while (discardPile.includes(card.id)) {
        card = selectEvent(round)
      }
      setCurrentEvent(card);
      setShowEvent(true);
      increment(round + 1);
      addToDiscardPile(card.id);
      addToTemperatureSequence(card.globalTemperature);
      progressTime(Math.round(((timeClock - 0.2)+Number.EPSILON) * 100) / 100)
    }
  }

  const addToDiscardPile = (id) => {
    discardCard(discardPile.concat(id));
  }

  const addToTemperatureSequence = (temp) => {
    var sequence = temperatureSequence.concat(temp)
    while(sequence.length>4) {
      sequence.shift();
    }
    addTemperatureSequence(sequence);
  }

  const performEvent = () => {
    setShowEvent(false)
  }

  const selectEvent = (round) => {
    if (round < 3) {
      return HadeanEon[Math.floor(Math.random() * HadeanEon.length)]
    } else if (round < 10) {
      setBackgroundImage(require('./assets/archean.jpg'))
      return ArcheanEon[Math.floor(Math.random() * ArcheanEon.length)]
    } else if (round < 20) {
      setBackgroundImage(require('./assets/proterozoic.jpg'))
      return ProterozoicEon[Math.floor(Math.random() * ProterozoicEon.length)]
    } else {
      return
    }
  }

  return (
    
    <View style={styles.container}>
      <StatusBar style = "auto" hidden = {true} />
      
      
      <ImageBackground 
        source = {backgroundImage}
        style={styles.image}>

        <GameStatus 
          timeClock = {timeClock}
          currentEvent = {currentEvent}
          temperatureSequence = {temperatureSequence}
          />
        
        <View style={styles.button}>
          <TouchableOpacity 
            style={styles.drawEventButton}
            onPress ={() => drawEvent()} 
          >
            <Text style={styles.buttonText}>Draw Event</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.refugia}>
          <View style={styles.landformRow}>
            <RefugiaCard
              refugium = {CosmicRefugia[0]}
              />
          </View>
          <View style={styles.landformRow}>
            <RefugiaCard
              refugium = {OceanicRefugia[0]}
              />
          </View>
          <View style={styles.landformRow}>
            <RefugiaCard
              refugium = {CoastalRefugia[0]}
              />
          </View>
          <View style={styles.landformRow}>
            <RefugiaCard
              refugium = {ContinentalRefugia[0]}
              />
          </View>
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
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  drawEventButton: {
    backgroundColor: '#301263',
    width: 150,
    height: 30,
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
  },
  refugia: {
    flex: 200,
    flexDirection: 'column',
    alignSelf: 'flex-start'
  },
  landformRow: {
    flexDirection: 'row',
    
  }
  
});
