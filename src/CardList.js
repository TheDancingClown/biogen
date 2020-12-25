const aftershock = require('../assets/aftershock.jpg');
const smite = require('../assets/smite.jpg');
const earth = require('../assets/earth.jpg');
const heaven = require('../assets/heaven.jpg');
const drought = require('../assets/drought.jpg');
const extremophileCrisis = require('../assets/extremophileCrisis.jpg');
const ultravioletRadiation = require('../assets/ultravioletRadiation.jpg');
const ultravioletRadiation1 = require('../assets/ultravioletRadiation1.jpg');
const ultravioletRadiation2 = require('../assets/ultravioletRadiation2.jpg');
const ultravioletRadiation3 = require('../assets/ultravioletRadiation3.jpg');
const ultravioletRadiation4 = require('../assets/ultravioletRadiation4.jpg');
const ozoneLayer = require('../assets/ozoneLayer.jpg');
const cancer = require('../assets/cancer.jpg');
const oxygenSpike = require('../assets/oxygenSpike.jpg');
const cooling = require('../assets/cooling.png');
const warming = require('../assets/warming.png');
const blue = '#2d92bd';
const red = '#f05443';
const yellow = '#e3e01b';
const green = '#44ab60';
const one = require('../assets/one.jpg');
const two = require('../assets/two.jpg');
const three = require('../assets/three.jpg');
const four = require('../assets/four.jpg');
const five = require('../assets/five.jpg');
const six = require('../assets/six.jpg');
const circle = require('../assets/circle.jpg');

const Template =
  {
    "id": 999,
    "title": "Earth begins to form",
    "information": "",
    "landform": {
        "cosmic": false,
        "oceanic": false,
        "coastal": false,
        "continental": false
      },
    "event": [],
    "globalTemperature": [],
    "order": []
  }

const HadeanEon = [
  {
    "id": 37,
    "title": "Mars Paleo-Ocean",
    "information": "If early Mars had a denser atmosphere and warmer climate, nearly a third of its surface could have been covered by liquid water. It would have filled the Vastitas Borealis basin in the northern hemisphere, which mysteriously lies 4-5 km below the mean planetary elevation. Today enough methane lingers in the thin Martian air to indicate possible methanogen life dwelling under the surface, safe from cosmic radiation.",
    "landform": {
        "cosmic": true,
        "oceanic": true,
        "coastal": false,
        "continental": false
      },
    "event": [heaven, heaven],
    "globalTemperature": [cooling],
    "order": ["red", "yellow", "blue"]
  },
  {
    "id": 38,
    "title": "Meteoritic Accretion",
    "information": "Earth grew for 100 million years by the accretion of planetesimals before the Big Whack. Although the biggest impacts buried most of the crust with melt, zircon data indicates Earth had liquid water and an atmosphere only 130 million years after formation. Despite the hellish conditions, life could have gotten an early start. -- Simone-Marchi, 2014",
    "landform": {
        "cosmic": true,
        "oceanic": true,
        "coastal": false,
        "continental": false
      },
    "event": [smite, heaven, heaven],
    "globalTemperature": [warming],
    "order": ["green", "red", "yellow"]
  },
  {
    "id": 39,
    "title": "Bolide Water Delivery",
    "information": "Carbonaceous meteorites from the main belt are organic rich, including amino acids, and relatively wet, with deuterium to hydrogen ratios similar to Earth's oceans. Therefore, impacts with a few dozen could have delivered Earth's water and set up a Urey-Miller reducing atmosphere.",
    "landform": {
        "cosmic": false,
        "oceanic": true,
        "coastal": false,
        "continental": false
      },
    "event": [heaven, heaven, extremophileCrisis],
    "globalTemperature": [cooling],
    "order": ["yellow", "red", "green"]
  },
  {
    "id": 40,
    "title": "Bolide Water Delivery",
    "information": "Earth started dry but its oceans were likely delivered by impactors from the outer solar system rich in water ices, organics, carbon dioxide, carbon monoxide, and ammonia. Comets seem to have a ratio of deuterium to hydrogen twice that found in ocean water, meaning that at most 10% of Earth's oceans were delivered by comets.",
    "landform": {
        "cosmic": false,
        "oceanic": true,
        "coastal": false,
        "continental": false
      },
    "event": [heaven, heaven, extremophileCrisis],
    "globalTemperature": [cooling],
    "order": ["blue", "green", "red"]
  },
  {
    "id": 41,
    "title": "Theia Big Whack",
    "information": "Earth was struck 95 million years after its formation by a Mars-sized planet named Theia. Much of the mantle of both planets blasted into space and coalesced to form Luna. This explains why Luna seems to be geologically a devolatilized version of the Earth. For 2000 years Earth had a rock vapor atmosphere.",
    "landform": {
        "cosmic": false,
        "oceanic": false,
        "coastal": false,
        "continental": false
      },
    "event": [aftershock, smite, smite, smite, extremophileCrisis, extremophileCrisis],
    "globalTemperature": [],
    "immune": "cosmic"
  },
  {
    "id": 42,
    "title": "T Tauri Early Sun",
    "information": "Sol may have gone through an active T Tauri phase of solar flare energetic-particle emissions for its first 100 million years. Very young stars, still in the process of gravitational contraction, often shed mass while evolving to reach the main sequence. -- D.Lal, 1991",
    "landform": {
        "cosmic": false,
        "oceanic": true,
        "coastal": false,
        "continental": false
      },
    "event": [smite, heaven, extremophileCrisis, ultravioletRadiation],
    "globalTemperature": [warming],
    "order": ["red", "green", "yellow"]
  }
]

const ArcheanEon = [
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
    "event": [aftershock, extremophileCrisis, extremophileCrisis, ultravioletRadiation1],
    "globalTemperature": [warming],
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
    "event": [heaven, extremophileCrisis, ultravioletRadiation2],
    "globalTemperature": [cooling],
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
    "event": [earth, earth, ultravioletRadiation3],
    "globalTemperature": [],
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
    "event": [earth, heaven, ultravioletRadiation4],
    "globalTemperature": [cooling],
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
    "event": [earth, earth, oxygenSpike],
    "globalTemperature": [cooling],
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
    "event": [],
    "globalTemperature": [],
    "order": ["blue", "green", "yellow"],
    "special": "continental landforms inactive until next aftershock"
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
    "event": [smite, earth, oxygenSpike],
    "globalTemperature": [warming],
    "order": ["red", "blue", "green"]
  }
]

const ProterozoicEon = [
  {
    "id": 50,
    "title": "Cryogenian Snowball",
    "information": "Increased silicate weathering after the breakup of Rodinia drew down greehouse gases, freezing much of the Earth and its hydrologic cycle, Photosynthetic organisms crashed, but the adaptive radiation of survivors speeded up evolution, including during the subsequent cambrian explosion. the melting Snowball Earth caused an O2 spike. -- Harada, 2015",
    "landform": {
      "cosmic": false,
      "oceanic": false,
      "coastal": false,
      "continental": false
    },
    "event": [drought, oxygenSpike, oxygenSpike],
    "globalTemperature": [cooling],
    "order": ["green", "yellow", "blue"]
  },
  {
    "id": 51,
    "title": "Comet Impactor",
    "information": "The blast wave from a giant impact acts as a chemical catalyst, causing atoms of oxygen and nitrogen to form various noxious compounds found in smog, shutting off the sun. If the impact is in limestone, a global blanket of carbon dioxide is formed.",
    "landform": {
      "cosmic": false,
      "oceanic": false,
      "coastal": false,
      "continental": false
    },
    "event": [aftershock, smite, smite, extremophileCrisis, extremophileCrisis, ultravioletRadiation3],
    "globalTemperature": [warming],
    "special": "ignore ozone layer"
  },
  {
    "id": 52,
    "title": "Pangea Breakup",
    "information": "The breakup of a supercontinent increases offshore shelves, and makes upwelling more productive. The sea levels were increased by water synthesised biochemically, by sulphide-dependent chemoautotrophic bacteria using sunlight to produce methane, sulfur and water from carbon dioxide and hydrogen sulfide. These factors contributed to a long-term evolutionary trend that has led to the unprecedented variety of the present biosphere.",
    "landform": {
      "cosmic": false,
      "oceanic": true,
      "coastal": false,
      "continental": true
    },
    "event": [earth, heaven, ultravioletRadiation4],
    "globalTemperature": [cooling],
    "order": ["blue", "red", "green"]
  },
  {
    "id": 53,
    "title": "Ocean Overturn",
    "information": "The ocean's thermohaline circulation, disrupted by continental drift or by global warming, makes the arctic as hot as the tropics. This shutdown causes the more saline surface waters to sink, overturning hypoxic deep water to the surface. This kills off most of the oxygen-breathing organisms and allows a bloom of sulphate-reducing bacteria. The toxic hydrogen sulfide emissions wipe out the ozone layer. -- Donald Canfield, 1998",
    "landform": {
      "cosmic": false,
      "oceanic": true,
      "coastal": true,
      "continental": false
    },
    "event": [smite, drought, ultravioletRadiation1, cancer, earth],
    "globalTemperature": [],
    "order": ["red", "green", "blue"]
  },
  {
    "id": 54,
    "title": "Nitrogen Famine",
    "information": "Every farmer knows certain plant root nodules produce nitrogen, essential for life. These nodules contain prokaryotes able to reduce nitrogen in the air into ammonium. When free oxygen first appeared, it converted this rich fertiliser back to unavailable N2 gas. Moreover the new ozone layer shutdown the UV production of free nitrogen. Life suffered a nitrogen famine and a negative feedback on O2 supply. -- Katja Fennel, 2005",
    "landform": {
      "cosmic": false,
      "oceanic": true,
      "coastal": true,
      "continental": false
    },
    "event": [smite, smite, smite, extremophileCrisis, oxygenSpike],
    "globalTemperature": [],
    "order": ["green", "blue", "yellow"]
  },
  {
    "id": 55,
    "title": "T Tauri Superflare",
    "information": "High concentrations of interstellar dust can cause Sol to revert to its T Tauri flare star phase. A big solar proton event blasts the Earth with cosmic ray partciles followed by a coronal mass ejection (CME) strong enough to overpower the geomagnetic field. -- Paul LaViolette, 2011",
    "landform": {
      "cosmic": true,
      "oceanic": true,
      "coastal": true,
      "continental": false
    },
    "event": [smite, extremophileCrisis, extremophileCrisis, cancer, ultravioletRadiation2],
    "globalTemperature": [],
    "order": ["yellow", "red", "green"]
  },
  {
    "id": 56,
    "title": "Mackenzie Flood Basalts",
    "information": "About 1.3 billions years, a huge continental flood basalt paved much of the Canadian Shield. Basalt lava is as fluid as water, but much more dense. Thus it floods huge areas, and reactions with sediments produce a super-greenhouse of methane, carbon dioxide and acid rain. Flood basalts are a major cause of climatic and biologic change. -- Michael Rampino, 2010",
    "landform": {
      "cosmic": false,
      "oceanic": true,
      "coastal": false,
      "continental": true
    },
    "event": [smite, earth, extremophileCrisis, ultravioletRadiation3],
    "globalTemperature": [warming, warming],
    "order": ["blue", "yellow", "red"]
  },
  {
    "id": 57,
    "title": "Orbital Bobbing",
    "information": "As it orbits the galactic center, our solar system pops up above the galactic north side of our galaxy's disk every 64 million years, out of the Milky Way's magnetic shield. Here it is exposed to dust, supernova fragments, and cosmic rays from the shock front formed as our galaxy rushes toward the huge Virgo cluster. -- Dimitra Atri, 2010",
    "landform": {
      "cosmic": true,
      "oceanic": false,
      "coastal": false,
      "continental": true
    },
    "event": [smite, extremophileCrisis, cancer, ultravioletRadiation],
    "globalTemperature": [cooling],
    "order": ["red", "green", "yellow"]
  },
  {
    "id": 58,
    "title": "Oceans Rust Out",
    "information": "The Archean ocean was full of the type of iron (FeO) that dissolves in water. As oxygen levels rose, it combined with this ferrous iron and precipitated banded iron onto the seabed. (Alternatively there was no )2 and this was the work of anaerobic iron-fixing bacteria). It took a billion years for the oceans to completely rust out. When this O2 sink was used up, the oxygen was free to bubble out of the oceans into the air.",
    "landform": {
      "cosmic": false,
      "oceanic": false,
      "coastal": false,
      "continental": false
    },
    "event": [aftershock, drought, heaven, oxygenSpike, oxygenSpike],
    "globalTemperature": []
  },
  {
    "id": 59,
    "title": "Gaia Ozone Layer",
    "information": "The Gaia hypothesis imagines life as a superorganism able to keep the Earth within habitable limits despite environmental changes. One Gaian mechanism is the formation of an ozone O2 layer that effectively blocks UV radiation. This in turn slows down the oxidation of the atmospheric methane, keeping the Earth from a sudden freeze. -- James Lovelock, Lynn Margulis, 1974",
    "landform": {
      "cosmic": true,
      "oceanic": true,
      "coastal": true,
      "continental": true
    },
    "event": [oxygenSpike, ozoneLayer],
    "globalTemperature": [],
    "order": ["yellow", "blue", "red"],
    "special": "ozone layer formation"
  },
  {
    "id": 60,
    "title": "Medea's Revenge",
    "information": "The Medea hypothesis regards the microbial world as a superorganism antithetical to multicellular life, the opposite of the Gaian hypothesis. In this view, microbes orchestrate mass extinction so as to return Earth to a microbial-dominated world. Recurring pollutions of CO, CH4, H2S and O2 are cited in support of this hypothesis. -- Peter Ward, 2010",
    "landform": {
      "cosmic": false,
      "oceanic": true,
      "coastal": true,
      "continental": true
    },
    "event": [smite, drought, cancer, oxygenSpike],
    "globalTemperature": [warming],
    "order": ["blue", "yellow", "green"]
  }
]

const CosmicRefugia = [
  {
    "id": 7,
    "colour": red,
    "title": "Mars Paleo-Ocean",
    "lifeDice": [warming, one, two, three, four, cooling, one, two],
    "enzymes": [circle, circle, circle, circle, circle, circle],
    "manna": [blue, green, yellow, red]
  },
  {
    "id": 16,
    "colour": red,
    "title": "Deep Hot Biosphere",
    "lifeDice": [warming, one, two, cooling, one, two],
    "enzymes": [circle, circle, circle, circle, circle, circle],
    "manna": [green, blue, red, red]
  },
  {
    "id": 15,
    "colour": green,
    "title": "Interplanetary Dust",
    "lifeDice": [warming, one, two, three, cooling, one, two, three, four],
    "enzymes": [circle, circle, circle, circle, circle, circle, circle],
    "manna": [yellow, yellow, green]
  }
]

const OceanicRefugia = [
  {
    "id": 13,
    "colour": green,
    "title": "Hydrothermal Vent",
    "lifeDice": [warming, one, cooling, one],
    "enzymes": [circle, circle],
    "manna": [yellow, red, blue, green, green]
  },
  {
    "id": 9,
    "colour": yellow,
    "title": "Green Rust Fumarole",
    "lifeDice": [warming, one, two, three, cooling, one, two],
    "enzymes": [circle, circle, circle, circle, circle, circle],
    "manna": [green, blue, yellow]
  },
  {
    "id": 12,
    "colour": blue,
    "title": "Clay Mound",
    "lifeDice": [warming, one, two, three, cooling, one, two],
    "enzymes": [circle, circle, circle, circle, circle, circle],
    "manna": [red, yellow, blue, blue]
  }
]

const CoastalRefugia = [
  {
    "id": 4,
    "colour": yellow,
    "title": "Radioactive Beach",
    "lifeDice": [warming, one, two, three, cooling, one],
    "enzymes": [circle, circle, circle, circle],
    "manna": [blue, green, yellow, yellow]
  },
  {
    "id": 11,
    "colour": green,
    "title": "Alkaline Seep",
    "lifeDice": [warming, one, two, cooling, one, two],
    "enzymes": [circle, circle, circle, circle, circle, circle],
    "manna": [blue, green, red, green]
  },
  {
    "id": 14,
    "colour": yellow,
    "title": "Pumice Raft",
    "lifeDice": [warming, one, two, cooling, one],
    "enzymes": [circle, circle, circle],
    "manna": [red, green, yellow, yellow]
  },
  {
    "id": 2,
    "colour": blue,
    "title": "UV Irradiated Ocean",
    "lifeDice": [warming, one, two, three, four, cooling, one, two],
    "enzymes": [circle, circle, circle, circle, circle, circle],
    "manna": [green, blue, blue]
  },
  {
    "id": 10,
    "colour": red,
    "title": "Zeolite Lagoon",
    "lifeDice": [warming, one, two, three, cooling, one, two],
    "enzymes": [circle, circle, circle, circle, circle, circle, circle],
    "manna": [yellow, yellow, red, red]
  }
]

const ContinentalRefugia = [
  {
    "id": 1,
    "colour": blue,
    "title": "Tholin Storm Clouds",
    "lifeDice": [warming, one, two, cooling, one, two],
    "enzymes": [circle, circle, circle, circle],
    "manna": [yellow, yellow, green, green]
  },
  {
    "id": 5,
    "colour": blue,
    "title": "Geothermal Zinc",
    "lifeDice": [warming, one, two, three, cooling, one, two],
    "enzymes": [circle, circle, circle, circle, circle, circle, circle],
    "manna": [red, blue, green, blue]
  },
  {
    "id": 8,
    "colour": red,
    "title": "Hydrogen Volcano",
    "lifeDice": [warming, one, two, three, four, cooling, one, two],
    "enzymes": [circle, circle, circle, circle, circle, circle, circle],
    "manna": [green, red, blue, red]
  },
  {
    "id": 6,
    "colour": yellow,
    "title": "Eutectic Brine",
    "lifeDice": [warming, one, two, three, cooling, one, two],
    "enzymes": [circle, circle, circle, circle, circle],
    "manna": [blue, red, yellow, red]
  },
  {
    "id": 3,
    "colour": green,
    "title": "Warm Pond",
    "lifeDice": [warming, one, two, three, four, cooling, one, two],
    "enzymes": [circle, circle, circle, circle, circle, circle],
    "manna": [blue, green, red]
  }
]

export {
  Template,
  HadeanEon,
  ArcheanEon,
  ProterozoicEon,
  CosmicRefugia,
  OceanicRefugia,
  CoastalRefugia,
  ContinentalRefugia
}

