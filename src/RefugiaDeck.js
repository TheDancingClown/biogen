import Deck from './Deck';
import { CosmicRefugia, OceanicRefugia, CoastalRefugia, ContinentalRefugia } from './CardList';

class RefugiaDeck extends Deck {

  constructor() {
    super();
    this.discardPile = [];
    this.cosmicRefugia = [];
    this.oceanicRefugia = [];
    this.coastalRefugia = [];
    this.continentalRefugia = [];
  };

  heaven(card) {
    let refugium
    if(card.landform.cosmic == true && this.cosmicRefugia.length < 3) {
      refugium = super._selectCard(CosmicRefugia);
    } else if (card.landform.oceanic == true && this.oceanicRefugia.length < 3) {
      refugium = super._selectCard(OceanicRefugia);
    } else if (card.landform.coastal == true && this.coastalRefugia.length < 5) {
      refugium = super._selectCard(CoastalRefugia);
    } else if (card.landform.continental == true && this.continentalRefugia.length < 5) {
      refugium = super._selectCard(ContinentalRefugia);
    };
    return refugium;
  };

  earth(card) {
    let refugium
    if(card.landform.continental == true && this.continentalRefugia.length < 5) {
      refugium = super._selectCard(ContinentalRefugia);
    } else if (card.landform.coastal == true && this.coastalRefugia.length < 5) {
      refugium = super._selectCard(CoastalRefugia);
    } else if (card.landform.oceanic == true && this.oceanicRefugia.length < 3) {
      refugium = super._selectCard(OceanicRefugia);
    } else if (card.landform.cosmic == true && this.cosmicRefugia.length < 3) {
      refugium = super._selectCard(CosmicRefugia);
    };
    return refugium;
  };
}

export default RefugiaDeck;