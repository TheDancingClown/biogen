const ProterozoicEra = [
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
    "event": ["drought", "oxygen spike", "oxygen spike", "cooling"],
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
    "event": ["aftershock", "smite", "smite", "extremophile crisis", "extremophile crisis", "ultraviolet radiation", "warming"],
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
    "event": ["earth", "heaven", "ultraviolet radiation", "cooling"],
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
    "event": ["smite", "drought", "ultraviolet radiation", "cancer", "earth"],
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
    "event": ["smite", "smite", "smite", "extremophile crisis", "oxygen spike"],
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
    "event": ["smite", "extremophile crisis", "extremophile crisis", "cancer", "ultraviolet radiation"],
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
    "event": ["smite", "earth", "extremophile crisis", "ultraviolet radiation", "warming", "warming"],
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
    "event": ["smite", "extremophile crisis", "cancer", "ultraviolet radiation", "cooling"],
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
    "event": ["aftershock", "drought", "heaven", "oxygen spike", "oxygen spike"]
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
    "event": ["oxygen spike", "ozone layer"],
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
    "event": ["smite", "drought", "cancer", "oxygen spike", "warming"],
    "order": ["blue", "yellow", "green"]
  }
]

export default ProterozoicEra