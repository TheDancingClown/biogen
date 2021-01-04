import React from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import EventDeck from '../src/EventDeck';

const EventCard = (props) => {

  const deck = new EventDeck();

  const landformAlert = () => {
    Alert.alert("Landform Icons",
      "The landform icons for the current event. Active landforms are shown in black and inactive landforms are shown in grey.\n\nAn active landform means you can assign Bionts and Enzymes to Refugia in its row."
    )
  }

  const climateAlert = () => {
    Alert.alert("Climate Icons",
      "The climate icon(s) for the current event. The current climate is used to determine which dice animate life (organise Manna). If no icon is shown the previous climate remains."
    )
  }

  const eventAlert = () => {
    const events = [...new Set(props.card.event)];
    const eventAlerts = deck.eventInformation(events);
  
    Alert.alert("Event Icons",
      eventAlerts
    )
  }

  return (
    <View style={styles.container}>
      <Header 
        title={props.card.title}
        id={props.card.id}
      />

      <View style={styles.detail}>
        <TouchableOpacity onPress = {landformAlert}>
          <LandformIcons landforms={props.card.landform} />
        </TouchableOpacity>
        <InformationText information={props.card.information} />
        <View style={styles.events}>
          <TouchableOpacity style={{flex: 1}} onPress = {eventAlert} >
            <EventIcons events={props.card.event} />
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1}} onPress = {climateAlert}>
            <EventIcons events={props.card.climate} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Header = (props) => {
  var headerColour
  if (37 <= props.id && props.id <= 42) {
    headerColour = '#151040'
  } else if (43 <= props.id && props.id <= 49) {
    headerColour = '#8f1111'
  } else if (50 <= props.id && props.id <= 60) {
    headerColour = '#0c4696'
  }
  return (
    <View 
      style={[styles.header,{ backgroundColor: `${headerColour}`}]}>
      <Text style={styles.text}>{props.title.toUpperCase()}</Text>
    </View>
  ) 
}

const InformationText = (props) => {
  return (
    <View style={styles.information}>
      <Text style={styles.informationText}>{props.information}</Text>
    </View>
  )
}

const LandformIcons = (props) => {
  return (
    <View style={styles.iconsView}>
      <Image
        style={props.landforms.cosmic ? styles.activeIcon : styles.inactiveIcon}
        source={require('../assets/cosmic.jpg')}
      />
      <Image
        style={props.landforms.oceanic ? styles.activeIcon : styles.inactiveIcon}
        source={require('../assets/oceanic.jpg')}
      />
      <Image
        style={props.landforms.coastal ? styles.activeIcon : styles.inactiveIcon}
        source={require('../assets/coastal.jpg')}
      />
      <Image
        style={props.landforms.continental ? styles.activeIcon : styles.inactiveIcon}
        source={require('../assets/continental.jpg')}
      />
    </View>
  )
}

const EventIcons = (props) => {
  var eventList = []
    
  if(props.events) {props.events.map((event,index) => {
      eventList.push(<Image
        key={index} style={styles.activeIcon} source={event}
        />
      )
    })
  }
  return (
    <View style={styles.eventIcons}>{eventList}</View>
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
    elevation: 10,
  },
  header: {
    height: 60,
    padding: 15,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: "center",
    fontFamily: "Cochin"
  },
  detail: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  icons: {
    textAlign: 'center',
    padding: 10,
  },
  iconsView: {
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingLeft: 20
  },
  information: {
    width: 250,
    padding: 10,
    marginLeft: 5
  },
  informationText: {
    fontFamily: "Cochin"
  },
  activeIcon: {
    height: 40,
    width: 40,
    margin: 5,
  },
  inactiveIcon: {
    height: 40,
    width: 40,
    margin: 5,
    opacity: 0.2,
  },
  eventIcons: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    justifyContent: 'center',
    margin: 10
  },
  events: {
    flex: 1,
    flexDirection: 'column'
  }
});

export default EventCard