import Deck from './Deck';
import { HadeanEon, ArcheanEon, ProterozoicEon } from './CardList';

class EventDeck extends Deck {

  constructor(discardPile) {
    super();
    this.discardPile = discardPile
  };

  drawCard(round) {
    var card
    if (round < 3) {
      card = super._selectCard(HadeanEon)
    } else if (round < 10) {
      card = super._selectCard(ArcheanEon)
    } else if (round < 20) {
      card = super._selectCard(ProterozoicEon)
    } else {
      card = null
    }
    return card
  }

  eventInformation(array) {
    let eventList = ''
    array.map((event) => {
      if (event == 1) {
          eventList += "Aftershock(shock symbol).\nThe next event is drawn and the effects combined with this event.\n\n"
      } else if (event == 2) {
          eventList += "Smite(radiation symbol).\nAll Refugia without Resiliency lose an Enzyme or else a Manna.\n\n"
      } else if (event == 3) {
          eventList += "Earth(eruption symbol).\nRefugium is added to the bottom-most active Landform.\n\n"
      } else if (event == 4) {
          eventList += "Heaven(meteor symbol).\nRefugium is added to the top-most active Landform.\n\n"
      } else if (event == 5) {
          eventList += "Drought(drought symbol).\nEvery terrestrial Macroorganism without a Drought Shield suffers one Atrophy.\n\n"
      } else if (event == 6) {
          eventList += "Extremophile Crisis(thermometer symbol).\nAll Organisms suffer Atrophies equal to the number of symbols shown minus Heat Shields(red chromosomes).\n\n"
      } else if (event == 7) {
          eventList += "Cancer(cancer symbol).\nEach Macroorganism rolls one die for each organ and two for each Biont. It suffers one Atrophy for each 5 or 6 rolled. Macroorganisms with Cancer Shield suffer Atrophy only on a 6.\n\n"
      } else if (event == 8) {
          eventList += "Oxygen Spike(oxygen symbol).\nAll organisms suffer Atrophies equal to the number of symbols shown minus Antioxidant Shields(green chromosomes and vitamins).\n\n"
      } else if ([9,10,11,12,13].includes(event)) {
          eventList += "Ultraviolet Radiation(UV symbol).\nAll organisms without an UV Shield remove mutations up to the level of UV Radiation.\n\n"
      } else if (event == 14) {
          eventList += "Ozone Layer(ozone symbol).\nUV events are ignored until the end of the game. Comet Impactor negates this effect for one turn, if drawn.\n\n"
      };
    });
    return eventList;
  };
};

export default EventDeck;