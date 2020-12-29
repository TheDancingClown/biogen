import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import EventCard from './components/EventCard';
import GameStatus from './components/GameStatus';
import RefugiaDisplay from './components/RefugiaDisplay';
import Climate from './components/Climate';
import HelpAlert from './components/HelpAlert';
import { Template } from './src/CardList';
import EventDeck from './src/EventDeck';
import RefugiaDeck from './src/RefugiaDeck';

export default function App() {
  const [showEvent, setShowEvent] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(Template);
  const [round, increment] = useState(0);
  const [eventDiscardPile, discardEvent] = useState([0]);
  const [refugiumDiscardPile, discardRefugia] = useState([0]);
  const [timeClock, progressTime] = useState(4.6);
  const [backgroundImage, setBackgroundImage] = useState(require('./assets/hadean.jpg'));
  const [climateSequence, addClimate] = useState([]);
  const [cosmicRefugia, newCosmicLandform] = useState([]);
  const [oceanicRefugia, newOceanicLandform] = useState([]);
  const [coastalRefugia, newCoastalLandform] = useState([]);
  const [continentalRefugia, newContinentalLandform] = useState([]);
  const [medea, triggerMedea] = useState(false);
  const eventDeck = new EventDeck(eventDiscardPile);
  const refugiaDeck = new RefugiaDeck(cosmicRefugia, oceanicRefugia, coastalRefugia, continentalRefugia, refugiumDiscardPile);

  const drawEvent = () => {
    let card = eventDeck.drawCard(round);
    setCurrentEvent(card);
    setShowEvent(true);
  }

  const performEvent = (card) => {
    increment(round + 1);
    changeBackground(round);
    setShowEvent(false);
    checkEvents(card)
    discardEvent(eventDiscardPile.concat(card.id))
    addToClimateSequence(card.climate);
    progressTime(Math.round(((timeClock - 0.2)+Number.EPSILON) * 100) / 100)
  }

  const checkEvents = (card) => {
    card.event.map((event) => {
      if (event == 2) {
        refugiaDeck.smite();
      } else if (event == 3) {
        refugiaDeck.earth(card);
      } else if (event == 4) {
        refugiaDeck.heaven(card);
      }
    })
    updateLandforms();
    discardRefugia(refugiaDeck.discardPile);
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

  const addToClimateSequence = (climate) => {
    var sequence = climateSequence.concat(climate)
    while(sequence.length>4) {
      sequence.shift();
    }
    checkMedea(sequence);
    addClimate(sequence);
  }

  const checkMedea = (sequence) => {
    if(sequence.length == 4 && sequence.every(val => val === sequence[0])) {
      triggerMedea(true);
    } else {
      triggerMedea(false);
    };
  };

  const updateLandforms = () => {
    newCosmicLandform(refugiaDeck.cosmicRefugia);
    newOceanicLandform(refugiaDeck.oceanicRefugia);
    newCoastalLandform(refugiaDeck.coastalRefugia);
    newContinentalLandform(refugiaDeck.continentalRefugia);
  }

  return (
      <View style={styles.container}>
        <StatusBar style = "auto" hidden = {true} />
      
        <ImageBackground 
          source = {backgroundImage}
          style={styles.backgroundImage}>

          <RefugiaDisplay 
            cosmicRefugia = {cosmicRefugia}
            oceanicRefugia = {oceanicRefugia}
            coastalRefugia = {coastalRefugia}
            continentalRefugia = {continentalRefugia}
            currentEvent = {currentEvent}
            />

          <View style={styles.button}>
            <View >
              <Climate climateSequence = {climateSequence}/>
            </View>
            <View style={{flex: 3, flexDirection: 'coloumn'}}>
            <GameStatus 
            timeClock = {timeClock}
            currentEvent = {currentEvent}
            />
            </View>
            
            {timeClock > 0.6 ?
            <TouchableOpacity 
              style={styles.drawEventButton}
              onPress ={() => drawEvent()} >
              <Text style={styles.buttonText}>Draw Event</Text>
            </TouchableOpacity> : null}
            {medea == true ? <TouchableOpacity 
              style={styles.drawEventButton}
              // onPress ={() => performEvent(currentEvent)} 
              >
                <Text style={styles.buttonText}>Medea</Text>
              </TouchableOpacity>
            : null}
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
    backgroundColor: 'black',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  button: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0
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
  }
  
});
