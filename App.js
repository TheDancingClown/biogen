import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Modal, Image, SafeAreaView } from 'react-native';
import EventCard from './components/EventCard';
import GameStatus from './components/GameStatus';
import RefugiaCard from './components/RefugiaCard';
import { Template, HadeanEon, ArcheanEon, ProterozoicEon, CosmicRefugia, OceanicRefugia, CoastalRefugia, ContinentalRefugia, RefugiumTemplate } from './src/CardList';
import EventDeck from './src/EventDeck';

export default function App() {
  const [showEvent, setShowEvent] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(Template);
  const [round, increment] = useState(0);
  const [discardPile, discardCard] = useState([0]);
  const [refugiaDiscards, discardRefugium] = useState([0]);
  const [timeClock, progressTime] = useState(4.6);
  const [backgroundImage, setBackgroundImage] = useState(require('./assets/hadean.jpg'));
  const [temperatureSequence, addTemperatureSequence] = useState([]);
  const [cosmicRefugia, newCosmicLandform] = useState([]);
  const [oceanicRefugia, newOceanicLandform] = useState([]);
  const [coastalRefugia, newCoastalLandform] = useState([]);
  const [continentalRefugia, newContinentalLandform] = useState([]);
  const eventDeck = new EventDeck();

  const drawEvent = () => {
    if (timeClock > 0.6) {
      var card = currentEvent
      while (discardPile.includes(card.id)) {
        card = eventDeck.drawCard(round)
      }
      setCurrentEvent(card);
      setShowEvent(true);
    }
  }

  const addToDiscardPile = (id) => {
    discardCard(discardPile.concat(id));
  };

  const performEvent = (card) => {
    increment(round + 1);
    changeBackground(round);
    setShowEvent(false);
    checkEvents(card)
    addToDiscardPile(card.id);
    addToTemperatureSequence(card.globalTemperature);
    progressTime(Math.round(((timeClock - 0.2)+Number.EPSILON) * 100) / 100)
  }

  const selectEvent = (round) => {
    if (round < 3) {
      return selectCard(HadeanEon)
    } else if (round < 10) {
      return selectCard(ArcheanEon)
    } else if (round < 20) {
      return selectCard(ProterozoicEon)
    } else {
      return
    }
  }

  const checkEvents = (card) => {
    card.event.map((event) => {
      if (event == 3) {
        earth(card);
      } else if (event == 4) {
        heaven(card);
      }
    })
  }

  const earth = (card) => {
    var refugium = {'id': 0}
    if (card.landform.continental == true && continentalRefugia.length < 5) {
      refugium = selectCard(ContinentalRefugia)
      newContinentalLandform(continentalRefugia.concat(refugium))
    } else if (card.landform.coastal == true && coastalRefugia.length < 5) {
      refugium = selectCard(CoastalRefugia)
      newCoastalLandform(coastalRefugia.concat(refugium))
    } else if (card.landform.oceanic == true && oceanicRefugia.length < 3) {
      refugium = selectCard(OceanicRefugia)
      newOceanicLandform(oceanicRefugia.concat(refugium))
    } else if(card.landform.cosmic == true && cosmicRefugia.length < 3) {
      refugium = selectCard(CosmicRefugia)
      newCosmicLandform(cosmicRefugia.concat(refugium))
    }
    discardRefugium(refugiaDiscards.concat(refugium.id));
  }

  const heaven = (card) => { 
    var refugium = {'id': 0}
    if(card.landform.cosmic == true && cosmicRefugia.length < 3) {
      refugium = selectCard(CosmicRefugia)
      newCosmicLandform(cosmicRefugia.concat(refugium))
    } else if (card.landform.oceanic == true && oceanicRefugia.length < 3) {
      refugium = selectCard(OceanicRefugia)
      newOceanicLandform(oceanicRefugia.concat(refugium))
    } else if (card.landform.coastal == true && coastalRefugia.length < 5) {
      refugium = selectCard(CoastalRefugia)
      newCoastalLandform(coastalRefugia.concat(refugium))
    } else if (card.landform.continental == true && continentalRefugia.length < 5) {
      refugium = selectCard(ContinentalRefugia)
      newContinentalLandform(continentalRefugia.concat(refugium))
    }
    discardRefugium(refugiaDiscards.concat(refugium.id));
  }

  const selectCard = (deck) => {
    return deck[Math.floor(Math.random() * deck.length)]
  }

  const changeBackground = (round) => {
    if (round < 3) {
      setBackgroundImage(require('./assets/hadean.jpg'))
    } else if (round < 10) {
      setBackgroundImage(require('./assets/archean.jpg'))
    } else if (round >= 10) {
      setBackgroundImage(require('./assets/proterozoic.jpg'))
    }
  }

  const addToTemperatureSequence = (temp) => {
    var sequence = temperatureSequence.concat(temp)
    while(sequence.length>4) {
      sequence.shift();
    }
    addTemperatureSequence(sequence);
  }

  return (
      <View style={styles.container}>
        <StatusBar style = "auto" hidden = {true} />
      
        <ImageBackground 
          source = {backgroundImage}
          style={styles.backgroundImage}>

          <GameStatus 
            timeClock = {timeClock}
            currentEvent = {currentEvent}
            temperatureSequence = {temperatureSequence}
            />
          
          <View style={styles.button}>
            <TouchableOpacity 
              style={styles.drawEventButton}
              onPress ={() => drawEvent()} >
              <Text style={styles.buttonText}>Draw Event</Text>
              <Text style={styles.buttonText}>{refugiaDiscards}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.refugia}>
            <View style={styles.landformRow}>
              <RefugiaCard
                refugium = {cosmicRefugia}
                />
            </View>
            <View style={styles.landformRow}>
              <RefugiaCard
                refugium = {oceanicRefugia}
                />
            </View>
            <View style={styles.landformRow}>
              <RefugiaCard
                refugium = {coastalRefugia}
                />
            </View>
            <View style={styles.landformRow}>
              <RefugiaCard
                refugium = {continentalRefugia}
                />
            </View>
          </View>
          
          <Modal
            transparent={true}
            visible={showEvent}
            supportedOrientations={['landscape']}
            >
            <View style={styles.eventCard}>
              <EventCard 
                card = {currentEvent}
                />
              <TouchableOpacity style={styles.closeEvent}
                onPress ={() => performEvent(currentEvent)}
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
    padding: 10,
    backgroundColor: 'black'
  },
  backgroundImage: {
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
    height: 90
  }
  
});
