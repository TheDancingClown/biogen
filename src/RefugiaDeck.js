import Deck from './Deck';
import { CosmicRefugia, OceanicRefugia, CoastalRefugia, ContinentalRefugia } from './CardList';

class RefugiaDeck extends Deck {

  constructor(cosmicLandform, oceanicLandform, coastalLandform, continentalLandform, discardPile) {
    super();
    this.cosmicRefugia = cosmicLandform;
    this.oceanicRefugia = oceanicLandform;
    this.coastalRefugia = coastalLandform;
    this.continentalRefugia = continentalLandform;
    this.discardPile = discardPile;
  };

  heaven(card) {
    let refugium = {'id': 0}
    if(card.landform.cosmic == true && this.cosmicRefugia.length < 3) {
      refugium = super._selectCard(CosmicRefugia);
    } else if (card.landform.oceanic == true && this.oceanicRefugia.length < 3) {
      refugium = super._selectCard(OceanicRefugia);
    } else if (card.landform.coastal == true && this.coastalRefugia.length < 5) {
      refugium = super._selectCard(CoastalRefugia);
    } else if (card.landform.continental == true && this.continentalRefugia.length < 5) {
      refugium = super._selectCard(ContinentalRefugia);
    } else {
      refugium = null;
    };
    this._discardCard(refugium)
    this._addToLandform(refugium)
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
    } else {
      return null
    };
    this._discardCard(refugium)
    this._addToLandform(refugium);
    return refugium;
  };

  smite() {
    this.cosmicRefugia.map((card, index) => {
      this._destroyManna(card, index, this.cosmicRefugia);
    });
    this.oceanicRefugia.map((card, index) => {
      this._destroyManna(card, index, this.oceanicRefugia);
    });
    this.coastalRefugia.map((card, index) => {
      this._destroyManna(card, index, this.coastalRefugia);
    });
    this.continentalRefugia.map((card, index) => {
      this._destroyManna(card, index, this.continentalRefugia);
    });
  }

  _destroyManna(card, index, landform) {
    card.manna.shift();
    if(card.manna.length == 0 && card.organisedManna.length == 0) {
      landform.splice(index,1)
    }
  }

  _addToLandform(refugium) {
    if(refugium){
      if(refugium.id <= 3) {
        this.cosmicRefugia.push(refugium);
      } else if(refugium.id <= 6) {
        this.oceanicRefugia.push(refugium);
      } else if(refugium.id <= 11) {
        this.coastalRefugia.push(refugium);
      } else if(refugium.id <= 16) {
        this.continentalRefugia.push(refugium);
      };
    };
  };
}

export default RefugiaDeck;