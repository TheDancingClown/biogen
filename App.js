import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Modal, Image } from 'react-native';
import EventCard from './components/EventCard';
import GameStatus from './components/GameStatus';
import Phase from './components/Phase';
import RefugiaDisplay from './components/RefugiaDisplay';
import Climate from './components/Climate';
import { Template } from './src/CardList';
import EventDeck from './src/EventDeck';
import RefugiaDeck from './src/RefugiaDeck';
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  const [showEvent, setShowEvent] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(Template);
  const [round, increment] = useState(0);
  const [eventDiscardPile, discardEvent] = useState([0]);
  const [refugiumDiscardPile, discardRefugia] = useState([0]);
  const [timeClock, progressTime] = useState(4.6);
  const [backgroundImage, setBackgroundImage] = useState(require('./assets/hadean.jpg'));
  const [climateSequence, climateShift] = useState([]);
  const [cosmicRefugia, newCosmicLandform] = useState([]);
  const [oceanicRefugia, newOceanicLandform] = useState([]);
  const [coastalRefugia, newCoastalLandform] = useState([]);
  const [continentalRefugia, newContinentalLandform] = useState([]);
  const [redPlayer, updateRedPlayer] = useState({'colour': '#f05443', 'bionts': 1, 'catalysts': [1,0,0,0]})
  // const [greenPlayer, updateGreenPlayer] = useState([0,1,0,0])
  // const [bluePlayer, updateBluePlayer] = useState([0,0,1,0])
  // const [yellowPlayer, updateYellowPlayer] = useState([0,0,0,1])  currently hardcoded. Add object for player to include colour and available counters
  const [medea, triggerMedea] = useState(false);
  const [phase, setPhase] = useState('event')
  const eventDeck = new EventDeck(eventDiscardPile); //move logic to component?
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
    setPhase('assignment')
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
    climateShift(sequence);
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

  // const countBionts = (deck, colour) => {
  //   let count = 0;
  //   for (landform in deck) {
  //     for (refugium in landform) {
  //       if (refugium.bionts) {
  //         count ++
  //       }
  //     }
  //   }
  //   updateAvailableBionts(1 - count)
  // }

  return (
    <SafeAreaView edges = {['right']} style={{flex: 1, backgroundColor: 'black'}}>
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
            phase = {phase}
            climate = {climateSequence}
            player = {redPlayer}/>

          <View style={styles.gameStatus}>
            <View >
              <Climate climateSequence = {climateSequence}/>
            </View>
            
            <View style={{flex: 3, flexDirection: 'column'}}>
              <GameStatus 
              timeClock = {timeClock}
              currentEvent = {currentEvent}
              />
            </View>
            {phase==='event' && 
              <View>
                {timeClock > 0.6 && 
                <TouchableOpacity
                  style={styles.drawEventButton}
                  activeOpacity = '0.8'
                  onPress ={() => drawEvent()}>
                    <Image 
                    source = {require('./assets/moon.jpg')}
                    style = {styles.deckImage} />
                  <Text style={styles.eventButtonText}>Event</Text>
                </TouchableOpacity>}

                {medea == true && 
                  <TouchableOpacity 
                  style={styles.button}
                  // onPress ={() => endGame} - add a function for this
                  >
                    <Text style={styles.buttonText}>Medea</Text>
                  </TouchableOpacity>}
              </View>
            } 
            {phase!=='event' &&
              <View style={{alignItems: 'center'}}>
                <Phase phase = {phase}/>
                <TouchableOpacity 
                style={styles.button}
                onPress ={() => {
                  let nextPhase = phase==='assignment' ? 'autocatalytic' : 'event'
                  setPhase(nextPhase)}}>
                  <Text style={styles.buttonText}>Finish</Text>
                  {/* disable button on autocata phase until all rolls done */}
                </TouchableOpacity>
              </View>
            }
            </View>
          
          <Modal
            transparent={true}
            visible={showEvent}
            supportedOrientations={['landscape']}
            animationType='fade'>
              <View style={styles.eventCardContainer}>
                <View style={styles.eventCard}>
                  <EventCard card = {currentEvent}/>
                  <TouchableOpacity style={styles.closeEvent}
                    onPress ={() => performEvent(currentEvent)}>
                    <Text style={styles.buttonText}>X</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </Modal>

        </ImageBackground>
      </View>
      </SafeAreaView>
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
  gameStatus: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
    width: 200
  },
  drawEventButton: {
    borderWidth: 3,
    width: 150,
    height: 250,
    borderRadius: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 22, 100, 0.8)',
    shadowColor: 'lightgrey',
    shadowOpacity: 0.8,
    elevation: 10,
    marginTop: 5,
    borderColor: 'lightgrey',
    borderWidth: 1
  },
  eventButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },
  deckImage: {
    width: 145,
    height: 245,
    resizeMode: 'cover',
    position: 'absolute',
    borderRadius: 20
  },
  button: {
    width: 100,
    padding: 5,
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: 'rgba(120, 14, 30, 0.9)',
    shadowColor: 'lightgrey',
    shadowOpacity: 0.6,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  eventCardContainer: {
    backgroundColor: "#000000aa", 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  eventCard: {
    width: 500, 
    height: 280, 
    alignItems: 'flex-end', 
    position: 'absolute'
  },
  closeEvent: {
    backgroundColor: 'darkred',
    padding: 2,
    borderRadius: 5,
    position: 'absolute',
    top: 25,
    right: 15,
    elevation: 11,
  }
});
