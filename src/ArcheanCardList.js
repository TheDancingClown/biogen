const ArcheanEra = [
  {
    "id": 43,
    "title": "Late Heavy Bombardment",
    "information": "According to the Nice model, the orbital migration of the gas giants reached a catastrophic instability after 700 million years, causing the solar system to reconfigure. The Eart and Luna would have suffered a major impact every century, sterilizing their surfaces. Microbes could only have survived in hydrothermal vents or the deep hot biosphere. -- University of Colorado, 2009",
    "landform": {
      "cosmic": false,
      "oceanic": false,
      "coastal": false,
      "continental": false
    },
    "event": ["aftershock", "extremophile crisis", "extremophile crisis", "ultraviolet radiation", "warming"]
  },
  {
    "id": 44,
    "title": "Hydrocarbon Fog",
    "information": "By the end of the Archean, blooms of methanogens created a see-saw atmosphere periodically flipped from a CO2-rich haze-free state to a CH4-rich foggy state such as seen on the moon Titan. These aerosols would effectively block the UV radiation which would otherwise breakdown some of the very strong greenhouse gases such as ammonia. -- Aubrey Zerkle, 2012",
    "landform": {
      "cosmic": false,
      "oceanic": true,
      "coastal": false,
      "continental": true
    },
    "event": ["heaven", "extremophile crisis", "ultraviolet radiation", "cooling"],
    "order": ["yellow", "blue", "red"]
  },
  {
    "id": 45,
    "title": "Supercontinent Ur",
    "information": "The higher accretional heat and undecayed radionuclides of Archean Earth had twice the heat flow of today. This organised the crust into small plates bounded by basaltic eruption hot spots. A buildup of felsic materials perhaps initiated the first subduction. After 1.5 billion years, the first continents of Ur and possibly Vaalbara arose. -- Jonathan Lunine, 2013",
    "landform": {
      "cosmic": false,
      "oceanic": true,
      "coastal": true,
      "continental": true
    },
    "event": ["earth", "earth", "ultraviolet radiation"],
    "order": ["green", "yellow", "blue"]
  },
  {
    "id": 46,
    "title": "Vaalbara Breakup",
    "information": "By 3.1 billion years ago, Vaalbara was possibly the Earth's first supercontinent. But because a supercontinent blocks heat flow, it eventually fragments as the asthenosphere below it overheats and buckles up. The fragmented archipelago experiences more rain and thus more weathering than a monolithic continent, and weathering downdraws greenhouse gases.",
    "landform": {
      "cosmic": true,
      "oceanic": false,
      "coastal": true,
      "continental": false
    },
    "event": ["earth", "heaven", "ultraviolet radiation", "cooling"],
    "order": ["green", "blue", "red"]
  },
  {
    "id": 47,
    "title": "Huronian Snowball",
    "information": "The rise of free oxygen oxidised the atmosphere's methane into carbon dioxide. Replacing a powerful greenhouse gas (CH4) with a weak one (CO2) plunged the Earth into perhaps its coldest ice age. The oceans froze over, destroying almost all photosynthesis.",
    "landform": {
      "cosmic": true,
      "oceanic": false,
      "coastal": false,
      "continental": true
    },
    "event": ["earth", "earth", "oxygen spike", "cooling"],
    "order": ["yellow", "red", "green"]
  },
  {
    "id": 48,
    "title": "Tropical Waterworld",
    "information": "Continents began as small crustal blocks 'floating' on dense ocean crust. These amalgamated to form the first cratons, driving the eruptions to the edges. The hottest known lavas known as komatiite were emitted. If the crust is rendered warm and soft enough, then it can't accumulate damage for subduction zones. Plate tectonics shuts down, and Earth turns into a tropical waterworld. -- DR Mole, 2015",
    "landform": {
      "cosmic": false,
      "oceanic": true,
      "coastal": true,
      "continental": false
    },
    "event": ["warming", "warming", "warming"],
    "order": ["blue", "green", "yellow"]
  },
  {
    "id": 49,
    "title": "The Clathrate Gun",
    "information": "Increases in sea temperatures and a falling sea level can trigger the sudden release of methane from methane clathrate compounds buried in seabeds and permafrost. Methane, a powerful greenhouse gas, causes global heating, stratospheric ozone depletion, and acidification and stratification in the oceans.",
    "landform": {
      "cosmic": false,
      "oceanic": true,
      "coastal": true,
      "continental": true
    },
    "event": ["smite", "earth", "oxygen spike", "warming"],
    "order": ["red", "blue", "green"]
  }
]

export default ArcheanEra
