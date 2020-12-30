import React from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { Manna, LifeDice, Enzymes } from './LargeRefugiumComponents';

const RefugiumCard = (props) => {

  const organisedMannaAlert = () => {
    Alert.alert(
      "The top of the Refugium displays organised Manna. This is a combination of any assigned player Bionts as well as any Manna that has been animated through the Autocatalytic Roll. If a double is rolled, life can be created and the organised Manna will become the chromosomes of the microorganism"
    )
  }

  const lifeDiceAlert = () => {
    Alert.alert(
      "Any result during the Autocatalytic Roll that matches the Life Dice to the right of the current climate will animate Manna. Choose a Manna cube moving it from disorganised at the bottom to organised at the top. "
    )
  }

  const enzymesAlert = () => {
    Alert.alert(
      "Any result during the Autocatalytic Roll that matches the Death Dice as shown will cause Manna death. Choose a Manna cube moving it from organised at the top to disorganised at the bottom, or choose a Biont to return to that player's tabelau. You are compensated with a catalyst of the same colour (or choose the colour if you removed your biont).\n\nIf the symbol also displays a red cross this causes Enzyme death and the rightmost Enzyme is lost.\n\nIf the Refugium is contested, the Progenote(based on dominance of organised Manna and Enzyme colour) decides Manna life and death but compensation is given to another contestant."
    )
  }

  const disorganisedMannaAlert = () => {
    Alert.alert(
      "The bottom of the Refugium displays disorganised Manna. Manna can be destroyed in Smite events or organised during the Autocatalytic Rolls. Disorganised Manna is lost during the creation of microorganisms."
    )
  }

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
        <TouchableOpacity onPress = {organisedMannaAlert}>
          <Manna manna={props.refugium.organisedManna} />
        </TouchableOpacity>
        <Text style={[styles.refugiaText,{ color: `${props.refugium.colour}`}]}>{props.refugium.title}</Text>
        <TouchableOpacity onPress = {lifeDiceAlert}>
          <LifeDice dice={props.refugium.lifeDice}/>
        </TouchableOpacity>
        <TouchableOpacity onPress = {enzymesAlert}>
          <Enzymes enzymes={props.refugium.enzymes}/>
        </TouchableOpacity>
        <TouchableOpacity onPress = {disorganisedMannaAlert}>
          <Manna manna={props.refugium.manna}/>
        </TouchableOpacity>
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