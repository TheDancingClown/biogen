

class EraDeck {

  constructor() {
    this.hadean = [37, 38, 39, 40, 41, 42]
    this.archean = [43, 44, 45, 46, 47, 48, 49]
    this.proterozoic = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
  }

  draw(era) {
    switch(era) {
    case'hadean' :
      return this.hadean[Math.floor(Math.random() * this.hadean.length)]
    case 'archean':
      return this.archean[Math.floor(Math.random() * this.archean.length)]
    case 'proterozoic':
      return this.proterozoic[Math.floor(Math.random() * this.proterozoic.length)]
    }
  }
}

export default EraDeck;