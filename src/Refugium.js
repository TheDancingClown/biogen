class Refugium {

  constructor(id, colour, title, lifeDice, enzymes, manna, resiliency, organisedManna, bionts) {
    this.id = id;
    this.colour = colour;
    this.title = title;
    this.lifeDice = lifeDice;
    this.enzymes = enzymes;
    this.manna = manna;
    this.resiliency = resiliency;
    this.organisedManna = organisedManna;
    this.bionts = bionts;
  }

  addBiont(playerColour) {
    this.bionts.push(playerColour);
  };

  destroyBiont(playerColour) {
    if(this.bionts) {
    let index = this.bionts.findIndex(e => e === playerColour);
    this.bionts.splice(index, 1);
    };
  };

  organise(mannaCube) {
    let index = this.manna.findIndex(e => e === mannaCube);
    this.manna.splice(index, 1);
    this.organisedManna.push(mannaCube);
  };
};

export default Refugium;