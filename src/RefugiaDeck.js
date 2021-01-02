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
    let refugium
    if(card.landform.cosmic == true && !this._cardsDrawn(CosmicRefugia)) {
      refugium = super._selectCard(CosmicRefugia);
    } else if (card.landform.oceanic == true && !this._cardsDrawn(OceanicRefugia)) {
      refugium = super._selectCard(OceanicRefugia);
    } else if (card.landform.coastal == true && !this._cardsDrawn(CoastalRefugia)) {
      refugium = super._selectCard(CoastalRefugia);
    } else if (card.landform.continental == true && !this._cardsDrawn(ContinentalRefugia)) {
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
    if(card.landform.continental == true  && !this._cardsDrawn(ContinentalRefugia)) {
      refugium = super._selectCard(ContinentalRefugia);
    } else if (card.landform.coastal == true && !this._cardsDrawn(CoastalRefugia)) {
      refugium = super._selectCard(CoastalRefugia);
    } else if (card.landform.oceanic == true  && !this._cardsDrawn(OceanicRefugia)) {
      refugium = super._selectCard(OceanicRefugia);
    } else if (card.landform.cosmic == true  && !this._cardsDrawn(CosmicRefugia)) {
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
  };

  organise(card, cube) {
    let index = card.manna.findIndex(e => e === cube);
    card.manna.splice(index, 1)
    card.organisedManna.push(cube);
  }

  addBiont(card, biont) {
    if(!card.bionts) {
      card["bionts"] = [biont];
    } else {
      card.bionts.push(biont);
    };
  };

  _destroyManna(card, index, landform) {
    if(card.resiliency == false) {
      if(card.manna.length != 0) {
        card.manna.shift();
      } else if (card.organisedManna.length != 0) {
        card.organisedManna.shift();
      };
      if(card.manna.length == 0 && card.organisedManna.length == 0) {
        landform.splice(index,1);
      };
    };
  };

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

  _cardsDrawn(deck) {
    return this._landformID(deck).every((id) => this.discardPile.includes(id))
  }

  _landformID(deck) {
    let list = [0]
    deck.map((refugium) => {
      list.push(refugium.id)
    })
    return list
  }
}

export default RefugiaDeck;