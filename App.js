import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Modal, Image } from 'react-native';
import EventCard from './components/EventCard'

export default function App() {
  const [showEvent, setShowEvent] = useState(false);
  const [showEventCard, setEventCard] = useState({});

  const drawEvent = () => {
    setEventCard(hadean[Math.floor(Math.random() * hadean.length)])
    setShowEvent(true)
  }

  const performEvent = () => {
    setShowEvent(false)
  }

  const hadean = [{
    "title": "Mars Paleo-Ocean",
    "information": "If early Mars had a denser atmosphere and warmer climate, nearly a third of its surface could have been covered by liquid water. It would have filled the Vastitas Borealis basin in the northern hemisphere, which mysteriously lies 4-5 km below the mean planetary elevation. Today enough methane lingers in the thin Martian air to indicate possible methanogen life dwelling under the surface, safe from cosmic radiation.",
    "landform": 
      {"cosmic": true,
      "oceanic": true,
      "coastal": false,
      "continental": false},
    "event": ["heaven", "heaven", "cooling"],
    "order": ["red", "yellow", "blue"]
  },
  {
    "title": "Meteoritic Accretion",
    "information": "Earth grew for 100 million years by the accretion of planetesimals before the Big Whack. Although the biggest impacts buried most of the crust with melt, zircon data indicates Earth had liquid water and an atmosphere only 130 million years after formation. Despite the hellish conditions, life could have gotten an early start. -- Simone-Marchi, 2014",
    "landform":
      {
        "cosmic": true,
        "oceanic": true,
        "coastal": false,
        "continental": false
      },
    "event": ["smite", "heaven", "heaven", "warming"],
    "order": ["green", "red", "yellow"]
  },
  {
    "title": "Bolide Water Delivery",
    "information": "Carbonaceous meteorites from the main belt are organic rich, including amino acids, and relatively wet, with deuterium to hydrogen ratios similar to Earth's oceans. Therefore, impacts with a few dozen could have delivered Earth's water and set up a Urey-Miller reducing atmosphere.",
    "landform":
      {
        "cosmic": false,
        "oceanic": true,
        "coastal": false,
        "continental": false
      },
    "event": ["heaven", "heaven", "extremophile crisis", "cooling"],
    "order": ["yellow", "red", "green"]
  }
]

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
