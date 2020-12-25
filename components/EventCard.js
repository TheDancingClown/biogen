import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const EventCard = (props) => {
  return (
    <View style={styles.container}>
      <Header 
        title={props.card.title}
        id={props.card.id}
      />

      <View style={styles.detail}>
        <LandformIcons landforms={props.card.landform} />
        <InformationText information={props.card.information} />
        <View style={styles.events}>
          <EventIcons events={props.card.event} />
          <EventIcons events={props.card.globalTemperature} />
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
      <Text>{props.information}</Text>
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
    
  props.events.map((event,index) => {
      eventList.push(<Image
        key={index} style={styles.activeIcon} source={event}
        />
      )
  })
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
    height: 270,
    borderColor: 'black',
    borderWidth: 1
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