import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import RefugiumCard from './RefugiumCard';
import { Manna, LifeDice, Enzymes } from './RefugiumComponents';
import { RefugiumTemplate } from '../src/CardList'

const RefugiaDisplay = (props) => {

  const [showRefugium, setShowRefugium] = useState(false);
  const [currentRefugium, setCurrentRefugium] = useState(RefugiumTemplate)

  const inspectRefugium = (refugium) => {
    setShowRefugium(true);
    setCurrentRefugium(refugium);
  }

  const RefugiaCard = (props) => {
    const circle = require('../assets/circle.jpg');
    var refugiaRow = []
    props.refugium.map((refugium, index) => {
      refugiaRow.push(
        <TouchableOpacity onPress ={() => inspectRefugium(refugium)} >
          <View key={index} style={styles.refugium} >
            <Manna manna={refugium.organisedManna}/>
            <Text style={[styles.refugiaText,{ color: `${refugium.colour}`}]}>{refugium.title}</Text>
            <LifeDice dice={refugium.lifeDice} />
            <Enzymes enzymes={refugium.enzymes}/> 
            <Manna manna={refugium.manna}/> 
          </View>
        </TouchableOpacity> 
      )
    })
    return (
      <View style={{flexDirection: 'row'}}>
        {refugiaRow}
      </View>
    )
  };

  return (
    <View style={styles.refugia}>
      <View style={props.currentEvent.landform.cosmic ? styles.activeLandformRow : styles.inactiveLandformRow}>
        <RefugiaCard
          refugium = {props.cosmicRefugia}
          />
      </View>
      <View style={props.currentEvent.landform.oceanic ? styles.activeLandformRow : styles.inactiveLandformRow}>
        <RefugiaCard
          refugium = {props.oceanicRefugia}
          />
      </View>
      <View style={props.currentEvent.landform.coastal ? styles.activeLandformRow : styles.inactiveLandformRow}>
        <RefugiaCard
          refugium = {props.coastalRefugia}
          />
      </View>
      <View style={props.currentEvent.landform.continental ? styles.activeLandformRow : styles.inactiveLandformRow}>
        <RefugiaCard
          refugium = {props.continentalRefugia}
          />
      </View>
    
      <Modal
        transparent={true}
        visible={showRefugium}
        supportedOrientations={['landscape']}
        >
        <View style={styles.refugiumCard}>
          <RefugiumCard refugium = {currentRefugium} display = {'large'}/>
          <TouchableOpacity style={styles.closeEvent}
            onPress ={() => setShowRefugium(false)}
            >
              <Text style={styles.buttonText}>X</Text>
          </TouchableOpacity>
        </View>
      </Modal>

    </View>
  )
};


const styles = StyleSheet.create({
  refugia: {
    flex: 1,
    flexDirection: 'column'
  },
  activeLandformRow: {
    flex: 1,
    flexDirection: 'row',
  },
  inactiveLandformRow: {
    flex: 1,
    flexDirection: 'row',
    opacity: 0.3
  },
  refugium: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 125,
    height: 90,
    margin: 3,
    shadowColor: 'lightgrey',
    shadowOpacity: 0.8,
    elevation: 10
  },
  refugiaText: {
    backgroundColor: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 2,
    fontSize: 11
  },
  refugiumCard: {
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
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default RefugiaDisplay;