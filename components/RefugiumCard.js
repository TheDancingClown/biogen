import React from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

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
        <Manna manna={[]}/>
        <Text style={[styles.refugiaText,{ color: `${props.refugium.colour}`}]}>{props.refugium.title}</Text>
        <LifeDice dice={props.refugium.lifeDice} />
        <Enzymes enzymes={props.refugium.enzymes}/> 
        <Manna manna={props.refugium.manna}/> 
      </View>
    </View>
  );
}

const Header = (props) => {
  
  return (
    <View 
      style={[styles.header,{ backgroundColor: `${props.colour}`}]}>
      <Text style={styles.text}>{props.title.toUpperCase()}</Text>
    </View>
  ) 
}

const Manna = (props) => {
  var mannaCubes = [];
  if(props.manna) {
    props.manna.map((cubeColour,index) => {
      mannaCubes.push(<View
        key={index} style={[styles.mannaCube, {backgroundColor: cubeColour}]}>
          <Text style={{color: cubeColour, fontSize: 1}}>X</Text>
        </View>
      )
    });
  };
  return (
    <View style={styles.iconRow}>
      {mannaCubes}
    </View>
  )
};

const LifeDice = (props) => {
  var diceIcons = [];
  if(props.dice) {
    props.dice.map((die,index) => {
      diceIcons.push(<Image
        key={index} style={styles.lifeDice} source={die}
        />
      )
    });
  };
  return (
    <View style={styles.iconRow}>
      {diceIcons}
    </View>
  )
};

const Enzymes = (props) => {
  var enzymeList = [];
  if(props.enzymes) {
    props.enzymes.map((enzymeSlot, index) => {
      enzymeList.push(<Image
        key={index} style={styles.enzymeSlot} source={enzymeSlot}
        />
      )
    });
  };
  return (
    <View style={styles.iconRow}>
      {enzymeList}
    </View>
  )
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
  lifeDice: {
    height: 30,
    width: 30,
    margin: 5
  },
  enzymeSlot: {
    height: 35,
    width: 35,
    margin: 10
  },
  mannaCube: {
    width: 30,
    height: 30,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1
  },
  iconRow: {
    justifyContent: 'center', 
    flexDirection: 'row', 
    height: 50
  },
  refugiaText: {
    alignSelf: 'stretch',
    backgroundColor: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 30
  }
});

export default RefugiumCard