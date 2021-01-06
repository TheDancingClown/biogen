import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import RefugiumCard from './RefugiumCard';
import DiceResults from './DiceResults';
import { Manna, LifeDice, Enzymes, Bionts } from './RefugiumComponents';
import { RefugiumTemplate } from '../src/CardList';
import Dice from '../src/Dice';
import Refugium from '../src/Refugium';

const RefugiaDisplay = (props) => {

  const [showRefugium, setShowRefugium] = useState(false);
  const [currentRefugium, setCurrentRefugium] = useState(RefugiumTemplate)
  const [autocatalyticDice, setAutocatalyticDice] = useState({'one': 0, 'two': 0, 'three': 0, 'four': 0, 'five': 0, 'six': 0})
  const [availableBionts, updateAvailableBionts] = useState(1);
  let refugium = new Refugium(
    currentRefugium.id, 
    currentRefugium.colour, 
    currentRefugium.title, 
    currentRefugium.lifeDice,
    currentRefugium.enzymes, 
    currentRefugium.manna,
    currentRefugium.resiliency,
    currentRefugium.organisedManna,
    currentRefugium.bionts);

  const inspectRefugium = (refugium) => {
    setShowRefugium(true);
    setCurrentRefugium(refugium);
  }

  const autocatalyticRoll = (numberOfDice) => {
    let dice = new Dice();
    setAutocatalyticDice(dice.roll(numberOfDice))
  }

  const assignBiont = () => {
    if(availableBionts != 0) {
      refugium.addBiont('red');
      setCurrentRefugium(refugium);
      updateAvailableBionts(availableBionts-1);
    };
  };

  const reassignBiont = () => {
    refugium.destroyBiont('red');
    setCurrentRefugium(refugium);
    updateAvailableBionts(availableBionts+1);
  };

  const RefugiaCard = (props) => {
    var refugiaRow = []
    props.refugium.map((refugium) => {
      refugiaRow.push(
        <TouchableOpacity 
          key={refugium.id} 
          onPress ={() => inspectRefugium(refugium)}
          disabled={props.phase==="assignment" && !props.active} >
          <View style={styles.refugium} >
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Bionts bionts={refugium.bionts}></Bionts>
              <Manna manna={refugium.organisedManna}/>
            </View>
            <Text key={refugium.id} style={[styles.refugiaText, refugium.colour && { 'color': `${refugium.colour}`} ]}>{refugium.title}</Text>
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
          phase = {props.phase}
          active = {props.currentEvent.landform.cosmic}
          />
      </View>
      <View style={props.currentEvent.landform.oceanic ? styles.activeLandformRow : styles.inactiveLandformRow}>
        <RefugiaCard
          refugium = {props.oceanicRefugia}
          phase = {props.phase}
          active = {props.currentEvent.landform.oceanic}
          />
      </View>
      <View style={props.currentEvent.landform.coastal ? styles.activeLandformRow : styles.inactiveLandformRow}>
        <RefugiaCard
          refugium = {props.coastalRefugia}
          phase = {props.phase}
          active = {props.currentEvent.landform.coastal}
          />
      </View>
      <View style={props.currentEvent.landform.continental ? styles.activeLandformRow : styles.inactiveLandformRow}>
        <RefugiaCard
          refugium = {props.continentalRefugia}
          phase = {props.phase}
          active = {props.currentEvent.landform.continental}
          />
      </View>
    
      <Modal
        transparent={true}
        visible={showRefugium}
        supportedOrientations={['landscape']}
        animationType='fade'>
        <View style={styles.refugiumCard}>
          <View>
            <RefugiumCard refugium = {currentRefugium} display = {'large'}/>
            <TouchableOpacity style={styles.closeEvent}
              onPress ={() => setShowRefugium(false)}>
                <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </View>
          {props.phase==='assignment' && 
            <View style={styles.diceRolls}>
              {availableBionts > 0 && 
              <TouchableOpacity 
                style={styles.diceButton}
                disabled={false}
                onPress ={() => assignBiont()}>
                <Text style={styles.buttonText}>Assign Biont</Text>
              </TouchableOpacity>}
              {currentRefugium.bionts && currentRefugium.bionts.includes('red') && 
              <TouchableOpacity 
                style={styles.diceButton}
                disabled={false}
                onPress ={() => reassignBiont()}>
                <Text style={styles.buttonText}>Reassign Biont</Text>
              </TouchableOpacity>}
            </View>
          }
          {props.phase==='autocatalytic' &&
            <View style={styles.diceRolls}>
              <TouchableOpacity 
                style={styles.diceButton}
                disabled={false}
                // activeOpacity={disabled ? 1 : 0.7} 
                // onPress={!disabled && onPress}
                onPress ={() => autocatalyticRoll(currentRefugium.organisedManna.length+(currentRefugium.bionts.length)*2)} 
                >
                <Text style={styles.buttonText}>Autocatalytic Roll</Text>
              </TouchableOpacity>
              <DiceResults result = {autocatalyticDice} />
            </View>
          }
          
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
    top: 15,
    right: 15,
    elevation: 11
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