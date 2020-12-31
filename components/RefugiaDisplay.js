import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import RefugiumCard from './RefugiumCard';
import DiceResults from './DiceResults';
import { Manna, LifeDice, Enzymes } from './RefugiumComponents';
import { RefugiumTemplate } from '../src/CardList'

const RefugiaDisplay = (props) => {

  const [showRefugium, setShowRefugium] = useState(false);
  const [currentRefugium, setCurrentRefugium] = useState(RefugiumTemplate)
  const [autocatalyticDice, setAutocatalyticDice] = useState({1: 1, 2: 2, 3: 3, 4: 0, 5: 0, 6: 1})

  const inspectRefugium = (refugium) => {
    setShowRefugium(true);
    setCurrentRefugium(refugium);
  }

  const RefugiaCard = (props) => {
    var refugiaRow = []
    props.refugium.map((refugium, index) => {
      refugiaRow.push(
        <TouchableOpacity key={refugium.id} onPress ={() => inspectRefugium(refugium)} >
          <View style={styles.refugium} >
            <Manna manna={refugium.organisedManna}/>
            <Text key={refugium.id} style={[styles.refugiaText, refugium.colour ? { 'color': `${refugium.colour}`} : 'white']}>{refugium.title}</Text>
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
          <View style={styles.diceRolls}>
            <TouchableOpacity 
              style={styles.diceButton}
              disabled={currentRefugium.organisedManna > 0 ? false : true}
              // activeOpacity={disabled ? 1 : 0.7} 
              // onPress={!disabled && onPress}
              // onPress ={() => dice.roll(1)} 
              >
              <Text style={styles.buttonText}>Autocatalytic Roll</Text>
            </TouchableOpacity>
            <DiceResults result = {autocatalyticDice} />
          </View>
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
    alignSelf: 'stretch',
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
    borderRadius: 5,
    position: 'absolute',
    top: 80,
    right: 220
  },
  diceButton: {
    width: 150,
    padding: 5,
    margin: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(120, 14, 30, 0.9)',
    shadowColor: 'lightgrey',
    shadowOpacity: 0.6,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  diceRolls: {
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'center'
  }
});

export default RefugiaDisplay;