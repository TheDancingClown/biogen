import React from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { Manna, LifeDice, Enzymes } from './LargeRefugiumComponents';

const RefugiumCard = (props) => {

  // const landformAlert = () => {
  //   Alert.alert(
  //     "The landform icons for the current event. Active landforms are shown in black and inactive landforms are  shown in grey.\n\nAn active landform means you can assign Bionts and Enzymes to Refugia in its row."
  //   )
  // }

  // const climateAlert = () => {
  //   Alert.alert(
  //     "The climate icon(s) for the current event. The current climate is used to determine which dice animate life (organise Manna). If no icon is shown the previous climate remains."
  //   )
  // }

  // const eventAlert = () => {
  //   const events = [...new Set(props.card.event)];
  //   const eventAlerts = deck.eventInformation(events);
  
  //   Alert.alert(
  //     eventAlerts
  //   )
  // }

  return (
    <View style={styles.container}>
      <View style={styles.detail}>
        <Manna manna={props.refugium.organisedManna} />
        <Text style={[styles.refugiaText,{ color: `${props.refugium.colour}`}]}>{props.refugium.title}</Text>
        <LifeDice dice={props.refugium.lifeDice}/>
        <Enzymes enzymes={props.refugium.enzymes}/> 
        <Manna manna={props.refugium.manna}/> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 500,
    height: 280,
    shadowColor: 'lightgrey',
    shadowOpacity: 0.8,
    elevation: 10
  },
  detail: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  refugiaText: {
    alignSelf: 'stretch',
    backgroundColor: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 30
  },
  mannaCube: {
    width: 30,
    height: 30,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default RefugiumCard