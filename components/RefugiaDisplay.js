import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import RefugiumCard from './RefugiumCard';
import DiceResults from './DiceResults';
import { Manna, LifeDice, Enzymes, Bionts } from './RefugiumComponents';
import { RefugiumTemplate } from '../src/CardList';
import Dice from '../src/Dice';

const RefugiaDisplay = (props) => {

  const [showRefugium, setShowRefugium] = useState(false);
  const [currentRefugium, setCurrentRefugium] = useState(RefugiumTemplate);
  const [autocatalyticDice, setAutocatalyticDice] = useState({1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}); //check if needs to be set
  const [availableBionts, updateAvailableBionts] = useState(1); //losing biont if refugium is destroyed
  const [doubleRolled, setDoubleRolled] = useState(false);

  const inspectRefugium = (refugium) => {
    setShowRefugium(true);
    setCurrentRefugium(refugium);
    countBionts(props.cosmicRefugia)
    countBionts(props.oceanicRefugia)
    countBionts(props.coastalRefugia)
    countBionts(props.continentalRefugia)
    //find a better way for this
  }

  const autocatalyticRoll = (numberOfDice) => {
    const dice = new Dice();
    const result = dice.roll(numberOfDice);
    setAutocatalyticDice(result);
    currentRefugium.rolled = true;
    checkForDouble(result);
    checkForLife(result);
    checkForDeath(result);
  };

  const checkForLife = (diceRoll) => {
    let climate = props.climate[props.climate.length-1];
    let lifeDice = climate === 15 ? currentRefugium.lifeDice.cooling : currentRefugium.lifeDice.warming;
    Object.entries(diceRoll).forEach(([key, value]) => {
      if (value > 0 && lifeDice.length >= key) {
        for(let i = 0; i < value; i++) {
          if(currentRefugium.manna.length > 0) {
            organiseManna(currentRefugium.manna[0]);
          };
        };
      };
    });
  };

  const organiseManna = (mannaCube) => {
    //index not used but keep in case want to add choice later
    let index = currentRefugium.manna.findIndex(e => e === mannaCube);
    currentRefugium.manna.splice(index, 1);
    currentRefugium.organisedManna.push(mannaCube);
  };

  const checkForDeath = (diceRoll) => {
    Object.entries(diceRoll).forEach(([key, value]) => {
      if (value > 0) {
        currentRefugium.enzymes.map((enzyme) => {
          if(enzyme - 23 == key) {
            //find a better way than 23 - not reliable
            for(let i = 0; i < value; i++) {
              if(currentRefugium.organisedManna.length > 0) {
                disorganiseManna(currentRefugium.organisedManna[0]);
              };
            };
          };
        });
      };
    });
  };

  const disorganiseManna = (mannaCube) => {
    //index not used but keep in case want to add choice later
    let index = currentRefugium.organisedManna.findIndex(e => e === mannaCube);
    currentRefugium.organisedManna.splice(index, 1);
    currentRefugium.manna.push(mannaCube);
  };

  const checkForDouble = (diceRoll) => {
    setDoubleRolled(false);
    Object.entries(diceRoll).forEach(([key, value]) => {
      if(value>=2){
        setDoubleRolled(true);
      };
    });
  };

  const assignBiont = (refugium) => {
    let playerColour = props.player.colour
    if(availableBionts != 0) {
      addBiont(refugium, playerColour);
      setCurrentRefugium(refugium);
      updateAvailableBionts(availableBionts-1);
    };
  };

  const addBiont = (refugium, colour) => {
    refugium.bionts.push(colour);
  };

  const reassignBiont = (refugium) => {
    let playerColour = props.player.colour
    destroyBiont(refugium, playerColour);
    setCurrentRefugium(refugium);
    updateAvailableBionts(availableBionts+1);
  };

  const destroyBiont = (refugium, colour) => {
    if(refugium.bionts) {
      let index = refugium.bionts.findIndex(e => e === colour);
      refugium.bionts.splice(index, 1);
      };
  };

  // const countAllBionts = (props) => {
  //   updateAvailableBionts(1-
  //   countBionts(props.cosmicRefugia) +
  //   countBionts(props.oceanicRefugia) +
  //   countBionts(props.coastalRefugia) +
  //   countBionts(props.continentalRefugia))
  // }

  const countBionts = (landform) => {
    let count = 0;
    landform.map((refugium) => {
      if(refugium.bionts != 0) {
        count += refugium.bionts.length
      }
    })
    updateAvailableBionts(1-count)
  }

  const createMicroorganism = (refugium) => {
    // refugium.manna = []
    // refugium.bionts = []
    // refugium.organisedManna = []
  }

  const RefugiaCard = (props) => {
    var refugiaRow = []
    props.refugium.map((refugium) => {
      if (props.phase == "assignment") {
        refugium.rolled = false
      }
      refugiaRow.push(
        <TouchableOpacity 
          key={refugium.id} 
          onPress ={() => inspectRefugium(refugium)}
          disabled={props.phase==="assignment" && !props.active || props.phase==="autocatalytic" && !refugium.bionts.length > 0} >
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
    //refactor using loop? use object for all landforms instead of seperate
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
            <View>
              {availableBionts > 0 && 
              <TouchableOpacity 
                style={styles.diceButton}
                disabled={false}
                onPress ={() => assignBiont(currentRefugium)}>
                <Text style={styles.buttonText}>Assign Biont</Text>
              </TouchableOpacity>}
              {currentRefugium.bionts && currentRefugium.bionts.includes(props.player.colour) && 
              <TouchableOpacity 
                style={styles.diceButton}
                disabled={false}
                onPress ={() => reassignBiont(currentRefugium)}>
                <Text style={styles.buttonText}>Reassign Biont</Text>
              </TouchableOpacity>}
            </View>
          }
          {props.phase==='autocatalytic' && !currentRefugium.rolled &&
            <View>
              <TouchableOpacity 
                style={styles.diceButton}
                disabled={currentRefugium.rolled}
                onPress ={() => autocatalyticRoll(currentRefugium.organisedManna.length+(currentRefugium.bionts.length)*2)}>
                <Text style={styles.buttonText}>Autocatalytic Roll</Text>
              </TouchableOpacity>
            </View>
          }
          {props.phase==='autocatalytic' && currentRefugium.rolled == true &&
            <View style={styles.diceRolls}>
              <DiceResults result = {autocatalyticDice} />
            </View>
          }
          {props.phase==='autocatalytic' && currentRefugium.rolled == true && doubleRolled &&
             <View>
              {/* need to add function for flipping card on doubles. Remove from display and add to counter. Add to new navigation page */}
              <TouchableOpacity 
                style={styles.diceButton}
                disabled={false}
                onPress={() => createMicroorganism(currentRefugium)}>
                <Text style={styles.buttonText}>Create Microorganism</Text>
              </TouchableOpacity>
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
    alignItems: 'center',
    right: 30
  }
});

export default RefugiaDisplay;