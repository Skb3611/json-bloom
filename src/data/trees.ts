import { TreeData } from "@/types/tree";
import banyanHero from "@/assets/banyan-hero.jpg";
import banyanRoots from "@/assets/banyan-roots.jpg";
import banyanCanopy from "@/assets/banyan-canopy.jpg";
import banyanTrunk from "@/assets/banyan-trunk.jpg";
import Peepalhero from "@/assets/Peepalhero.png";
import peepalfruits from "@/assets/peepaltree.png";
import peepaltree from "@/assets/peepalroots.png";
import peepalroots from "@/assets/peepalfruits.png";
import mangoHero from "@/assets/mangohero.png";
import mangoFruits from "@/assets/mangofruit.png";
import mangoTree from "@/assets/mangotree.png";
import mangotrunck from "@/assets/mangotrunck.png";
import gulmoharHero from "@/assets/gulmoharhero.png";
import gulmoharLeaves from "@/assets/gulmoharleaves.png";
import gulmoharTree from "@/assets/gulmohartree.png";
import gulmoharTrunk from "@/assets/gulmohartrunck.png";
import Bealhero from "@/assets/baelhero.png";
import baelfruits from "@/assets/baelfruits.png";
import baeltree from "@/assets/bealtree.png";
import baeltrunck from "@/assets/baeltrunck.png";
import tamarindHero from "@/assets/tamarindhero.png";
import tamarind from "@/assets/tamarind.png"
import tamarindTree from "@/assets/tamarindtree.png";
import tamarindroot from "@/assets/tamarindroot.png";
import raintreehero from "@/assets/raintreehero.png";
import raintreeleaves from "@/assets/raintreeleaves.png";
import raintree from "@/assets/raintree.png";
import raintreetrunk from "@/assets/raintreetrunck.png";
import arjunhero from "@/assets/arjuntreehero.png";
import arjunroot from "@/assets/arjunroot.png";
import arjuntree from "@/assets/arjuntree (1).png";
import arjunfruit from "@/assets/arunfruit.png";
import coconuthero from "@/assets/coconuttreehero.png";
import coconuttree from "@/assets/coconuttree.png";
import coconut from "@/assets/coconut.png";
import coconuttrunk from "@/assets/coconuttrunk.png";
// ...existing code...


export const banyanTreeData: TreeData = {
  id: 1,
  slug: "banyan",
  name: "Banyan Tree",
  scientificName: "Ficus benghalensis",
  family: "Moraceae",
  localNames: ["Vad", "Bargad"],
  nationalStatus: "National Tree of India",
  description:
    "The Banyan tree is a massive evergreen fig tree native to the Indian subcontinent. It is known for its enormous canopy and aerial prop roots that grow downward from branches and form additional trunks. Over time, a single banyan tree can spread across acres, appearing like a forest. It symbolizes longevity, wisdom, shelter, and spiritual significance in Indian culture.",
  images: [banyanHero, banyanRoots, banyanCanopy, banyanTrunk],
  treeType: "Evergreen",
  height: "20–30 meters",
  canopySpread: "Up to 200 meters",
  growthRate: "Moderate",
  lifespan: "200–500+ years",
  rootSystem: "Extensive with aerial prop roots",
  leafDescription: "Large, oval, leathery, dark green leaves",
  climate: "Tropical to Subtropical",
  soilType: "Well-drained loamy or sandy soil",
  waterNeeds: "Moderate",
  lightRequirements: "Full Sun",
  droughtTolerance: "High (once mature)",
  floodTolerance: "Moderate",
  pollutionTolerance: "High",
  ecologicalImportance: {
    supportsWildlife: true,
    attracts: ["Birds", "Bats", "Monkeys", "Insects"],
    ecosystemRole:
      "Provides food, shelter, nesting areas, and regulates microclimate",
  },
  culturalSignificance: {
    religion: "Hinduism",
    associatedDeities: ["Lord Vishnu", "Lord Shiva"],
    symbolism: ["Longevity", "Wisdom", "Immortality", "Protection"],
    traditionalUse: "Village meetings and community gatherings",
  },
  medicinalUses: [
    "Bark used in traditional medicine for diabetes and diarrhea",
    "Leaves used for wound healing and skin infections",
    "Roots used for dental and gum treatments",
    "Latex used in certain skin remedies (with caution)",
  ],
  economicUses: [
    "Shade provider",
    "Soil conservation",
    "Environmental education",
    "Traditional medicine",
  ],
  plantationGuidelines: {
    bestPlantedAt: [
      "Temple grounds",
      "Village centers",
      "Public parks",
      "Highway rest areas",
    ],
    spaceRequirement: "Very large open space required",
    maintenanceLevel: "Very low",
    notSuitableFor: [
      "Small gardens",
      "Near buildings",
      "Close to underground pipelines",
    ],
  },
  distribution: {
    india: [
      "Maharashtra",
      "Uttar Pradesh",
      "Tamil Nadu",
      "Karnataka",
      "West Bengal",
      "Madhya Pradesh",
    ],
    global: ["India", "Nepal", "Sri Lanka", "Bangladesh", "Southeast Asia"],
  },
  interestingFacts: [
    "The Great Banyan Tree in Kolkata covers more than 14,500 square meters",
    "A single banyan tree can resemble a forest",
    "It relies on fig wasps for pollination",
    "One of the longest-living tree species in the world",
  ],
};
export const peepulTreeData: TreeData = {
  id: 2,
  slug: "peepal",
  name: "Peepal Tree",
  scientificName: "Ficus religiosa",
  family: "Moraceae",
  localNames: ["Ashvattha", "Bodhi", "Araali"],
  nationalStatus: "Sacred tree of India",
  description:
    "The Peepal is one of the most sacred trees in Indian culture, especially in Hindu and Buddhist traditions. Known for its distinctive heart-shaped leaves that flutter in the slightest breeze, it's revered for its spiritual significance and often planted near temples.",
  images: [Peepalhero, peepalfruits, peepaltree , peepalroots],
  treeType: "Deciduous",
  height: "15–20 meters",
  canopySpread: "Up to 25 meters",
  growthRate: "Fast",
  lifespan: "100–200 years",
  rootSystem:
    "Deep tap root with lateral extensions; non-invasive compared to Banyan",
  leafDescription:
    "Heart-shaped leaves (10–17 cm) with a distinctive tail-like apex, light green, rustling easily",
  climate: "Tropical to Subtropical",
  soilType: "Well-drained soil, tolerates poor soils",
  waterNeeds: "Moderate",
  lightRequirements: "Full Sun",
  droughtTolerance: "Moderate",
  floodTolerance: "Moderate",
  pollutionTolerance: "High",
  ecologicalImportance: {
    supportsWildlife: true,
    attracts: ["Birds", "Bees", "Fruit-eating animals"],
    ecosystemRole:
      "Provides food and shelter. Essential for avian diet. Improves air quality significantly.",
  },
  culturalSignificance: {
    religion: "Hinduism, Buddhism",
    associatedDeities: ["Brahma", "Vishnu", "Shiva", "Buddha"],
    symbolism: ["Enlightenment", "Spiritual awakening", "Life", "Protection"],
    traditionalUse:
      "Sacred at temples. Under the Bodhi tree, Gautama Buddha attained enlightenment.",
  },
  medicinalUses: [
    "Bark astringent for managing diarrhea",
    "Latex for treating skin disorders and warts",
    "Leaves for reducing inflammation",
    "Root beneficial for treating asthma",
  ],
  economicUses: [
    "Timber for small crafts",
    "Fodder for livestock",
    "Used in traditional rope making",
  ],
  plantationGuidelines: {
    bestPlantedAt: [
      "Temple premises",
      "Parks",
      "Schools",
      "Meditation centers",
    ],
    spaceRequirement: "15–20 meters spacing",
    maintenanceLevel: "Low",
    notSuitableFor: ["Very confined spaces", "Heavy pollution areas"],
  },
  distribution: {
    india: ["Pan-India", "Maharashtra", "Andhra Pradesh", "Uttar Pradesh"],
    global: ["Nepal", "Sri Lanka", "Myanmar", "Cambodia", "Thailand"],
  },
  interestingFacts: [
    "Heart-shaped leaves symbolize the love of knowledge and learning",
    "Leaves continue to move even without wind, called 'murmuring'",
    "Produces 60,000+ seeds annually; reproduces readily",
    "Listed as vulnerable in some regions due to over-harvesting",
  ],
};
export const mangoTreeData: TreeData = {
  id: 3,
  slug: "mango",
  name: "Mango Tree",
  scientificName: "Mangifera indica",
  family: "Anacardiaceae",
  localNames: ["Amba", "Aaam", "Maoa"],
  nationalStatus: "National fruit tree of India",
  description:
    "The Mango tree is one of India's most valuable and beloved fruit trees. Offering abundant shade with its large spreading canopy and delicious, nutritious fruits, it holds both economic and cultural significance across Indian communities.",
  images: [mangoHero, mangoFruits, mangoTree, mangotrunck],
  treeType: "Evergreen",
  height: "10–45 meters (depending on variety)",
  canopySpread: "Up to 40 meters",
  growthRate: "Moderate to Fast",
  lifespan: "40–150 years",
  rootSystem: "Deep tap root with extensive lateral roots",
  leafDescription:
    "Lanceolate, leathery leaves (15–35 cm), dark green above, paler below, new growth reddish",
  climate: "Tropical to Subtropical",
  soilType: "Well-drained loam; tolerates various soils",
  waterNeeds: "Moderate to High",
  lightRequirements: "Full Sun",
  droughtTolerance: "Moderate",
  floodTolerance: "Low",
  pollutionTolerance: "Moderate",
  ecologicalImportance: {
    supportsWildlife: true,
    attracts: ["Birds", "Bees", "Insects"],
    ecosystemRole:
      "Provides nectar for pollinators, food for animals. Important in agroforestry systems.",
  },
  culturalSignificance: {
    religion: "Hinduism",
    associatedDeities: ["All deities"],
    symbolism: ["Prosperity", "Fertility", "Abundance", "Nourishment"],
    traditionalUse:
      "Mango leaves used in auspicious ceremonies and weddings. Fruits offered in temples.",
  },
  medicinalUses: [
    "Fruit rich in vitamin C and antioxidants",
    "Bark and leaves for treating diarrhea and dysentery",
    "Leaves used to manage asthma and cough",
    "Seed beneficial for digestive disorders",
  ],
  economicUses: [
    "High-value fruit production (major export crop)",
    "Timber for furniture and construction",
    "Leaf fodder for cattle",
    "Provides livelihoods for farmers",
  ],
  plantationGuidelines: {
    bestPlantedAt: ["Home gardens", "Orchards", "Agroforestry plots", "Parks"],
    spaceRequirement: "8–10 meters apart",
    maintenanceLevel: "Medium",
    notSuitableFor: ["Waterlogged areas", "Saline soils", "Very cold regions"],
  },
  distribution: {
    india: [
      "Maharashtra",
      "Andhra Pradesh",
      "Telangana",
      "Uttar Pradesh",
      "Bihar",
    ],
    global: [
      "Pakistan",
      "Bangladesh",
      "Indonesia",
      "Philippines",
      "Tropical regions worldwide",
    ],
  },
  interestingFacts: [
    "Over 400 mango varieties cultivated globally; India has 30+ commercial varieties",
    "Called 'King of Fruits' for its flavor and nutritional value",
    "Mango leaves are used to decorate entrances during festivals",
    "A mature mango tree can produce 100–200 fruits annually",
  ],
};
export const gulmohárTreeData: TreeData = {
  id: 5,
  slug: "gulmohar",
  name: "Gulmohar (Flame Tree)",
  scientificName: "Delonix regia",
  family: "Fabaceae",
  localNames: ["Gulmohar", "Flame of the Forest", "Raktamukhi"],
  nationalStatus: "Optional",
  description:
    "The Gulmohar is renowned for its stunning red-orange flowers that create a fiery canopy in summer. This fast-growing ornamental tree with its wide, umbrella-shaped crown provides excellent shade while adorning landscapes with vibrant blooms.",
  images: [gulmoharHero, gulmoharLeaves, gulmoharTree, gulmoharTrunk],
  treeType: "Deciduous",
  height: "10–15 meters",
  canopySpread: "Up to 20 meters",
  growthRate: "Fast",
  lifespan: "50–100 years",
  rootSystem: "Shallow to moderate depth; relatively non-invasive",
  leafDescription:
    "Bipinnate leaves (30–60 cm), finely divided, fern-like appearance, bright green turning golden before dropping",
  climate: "Tropical",
  soilType: "Well-drained, fertile soil",
  waterNeeds: "Moderate",
  lightRequirements: "Full Sun",
  droughtTolerance: "High",
  floodTolerance: "Low",
  pollutionTolerance: "High",
  ecologicalImportance: {
    supportsWildlife: true,
    attracts: ["Bees", "Butterflies", "Sunbirds", "Insects"],
    ecosystemRole:
      "Important nectar source for pollinators during summer flowering.",
  },
  culturalSignificance: {
    religion: "Hinduism",
    associatedDeities: ["Agni (Fire god)"],
    symbolism: ["Beauty", "Fire", "Vibrancy", "Transformation"],
    traditionalUse:
      "Planted in temple grounds and parks for aesthetic and spiritual beauty.",
  },
  medicinalUses: [
    "Bark used as astringent",
    "Leaves for digestive aid",
    "Seeds used in traditional medicine for various ailments",
  ],
  economicUses: [
    "Ornamental value for landscaping",
    "Shade tree for plantations",
    "Timber for light construction",
    "Firewood",
  ],
  plantationGuidelines: {
    bestPlantedAt: [
      "Parks",
      "Roadside avenues",
      "School grounds",
      "Garden landscapes",
    ],
    spaceRequirement: "8–10 meters apart",
    maintenanceLevel: "Low to Medium",
    notSuitableFor: [
      "Very cold regions",
      "Heavy frost areas",
      "Waterlogged soils",
    ],
  },
  distribution: {
    india: ["Maharashtra", "Karnataka", "Tamil Nadu", "Andhra Pradesh", "Goa"],
    global: [
      "Madagascar (native)",
      "Africa",
      "Tropical and subtropical regions worldwide",
    ],
  },
  interestingFacts: [
    "Flowers appear in late spring (April-May) creating 'flaming' appearance",
    "Leaves fold at night (nyctinasty)",
    "Seedpods grow to 60 cm and contain black seeds",
    "Originally native to Madagascar; naturalized widely in India",
  ],
};
export const baelTreeData: TreeData = {
  id: 6,
  slug: "bael",
  name: "Bael Tree",
  scientificName: "Aegle marmelos",
  family: "Rutaceae",
  localNames: ["Bael", "Bilva", "Vilva", "Wood Apple"],
  nationalStatus: "Optional",
  description:
    "The Bael tree is deeply sacred in Hindu tradition, especially associated with Lord Shiva. It produces hard, green fruits with sweet, aromatic pulp and plays an important role in both spiritual practices and traditional medicine.",
  images: [Bealhero, baelfruits, baeltree, baeltrunck],
  treeType: "Semi-deciduous",
  height: "5–10 meters",
  canopySpread: "Up to 12 meters",
  growthRate: "Slow to Moderate",
  lifespan: "100+ years",
  rootSystem: "Deep tap root; drought-resistant",
  leafDescription:
    "Trifoliate leaves (7–12 cm), leaflets ovate, aromatic when crushed, glossy green",
  climate: "Tropical to Subtropical",
  soilType: "Well-drained, sandy to gravelly soil",
  waterNeeds: "Low to Moderate",
  lightRequirements: "Full Sun",
  droughtTolerance: "High",
  floodTolerance: "Low",
  pollutionTolerance: "High",
  ecologicalImportance: {
    supportsWildlife: true,
    attracts: ["Bees", "Birds", "Wildlife"],
    ecosystemRole:
      "Provides food for wildlife. Important in dry region ecosystems.",
  },
  culturalSignificance: {
    religion: "Hinduism",
    associatedDeities: ["Shiva", "Parvati"],
    symbolism: ["Divine", "Sacred", "Purification", "Health"],
    traditionalUse:
      "Leaves offered to Lord Shiva in rituals. Fruits sacred offering in temples.",
  },
  medicinalUses: [
    "Fruit pulp for treating diarrhea and dysentery",
    "Leaves for reducing fever",
    "Bark for digestive disorders and blood purification",
    "Seeds for managing asthma and bronchitis",
    "Bael drink (sherbet) for heat stroke",
  ],
  economicUses: [
    "Fruit production for domestic and commercial use",
    "Traditional beverage (bael sherbet) preparation",
    "Timber for agricultural implements",
    "Fodder for livestock",
  ],
  plantationGuidelines: {
    bestPlantedAt: [
      "Temple grounds",
      "Home gardens",
      "Dry areas",
      "Community lands",
    ],
    spaceRequirement: "6–8 meters apart",
    maintenanceLevel: "Low",
    notSuitableFor: ["Waterlogged areas", "Heavy rainfall regions"],
  },
  distribution: {
    india: [
      "Maharashtra",
      "Madhya Pradesh",
      "Rajasthan",
      "Uttar Pradesh",
      "Karnataka",
    ],
    global: ["Nepal", "Sri Lanka", "Pakistan", "Bangladesh"],
  },
  interestingFacts: [
    "Fruits are hard-shelled and can be stored for months",
    "Contains aromatic volatile oils with medicinal properties",
    "Considered one of India's most important medicinal plants in Ayurveda",
    "Can survive extreme heat and drought conditions",
  ],
};
export const tamarindTreeData: TreeData = {
  id: 7,
  slug: "tamarind",
  name: "Tamarind Tree",
  scientificName: "Tamarindus indica",
  family: "Fabaceae",
  localNames: ["Tamarind", "Imli", "Chinch", "Ambli"],
  nationalStatus: "Optional",
  description:
    "The Tamarind is a large, long-lived tree producing distinctive elongated seedpods filled with sour, tangy pulp. Used extensively in Indian cooking, traditional medicine, and beverages, it's deeply embedded in culinary traditions.",
  images: [tamarindHero, tamarind, tamarindTree, tamarindroot],
  treeType: "Deciduous",
  height: "15–25 meters",
  canopySpread: "Up to 25 meters",
  growthRate: "Slow",
  lifespan: "200+ years (very long-living)",
  rootSystem: "Deep tap root with lateral extensions; excellent soil binding",
  leafDescription:
    "Pinnate compound leaves (15–30 cm), 10–20 pairs of leaflets, fine and feathery, green turning golden before fall",
  climate: "Tropical to Subtropical",
  soilType: "Well-drained; tolerates poor soils",
  waterNeeds: "Low to Moderate",
  lightRequirements: "Full Sun",
  droughtTolerance: "High",
  floodTolerance: "Low",
  pollutionTolerance: "High",
  ecologicalImportance: {
    supportsWildlife: true,
    attracts: ["Bees", "Butterflies", "Birds"],
    ecosystemRole:
      "Nitrogen-fixing tree improving soil fertility. Important in agroforestry systems.",
  },
  culturalSignificance: {
    religion: "Hinduism, Ayurveda",
    associatedDeities: ["Vayu (Wind god)"],
    symbolism: ["Flavor", "Health", "Healing", "Balance"],
    traditionalUse:
      "Central to Indian cuisine and Ayurvedic medicine. Pulp used in religious offerings.",
  },
  medicinalUses: [
    "Fruit pulp for digestive health and laxative properties",
    "Leaves for fever reduction",
    "Bark astringent for diarrhea and blood disorders",
    "Seeds for cough and respiratory issues",
    "Pulp for heart health and cholesterol management",
  ],
  economicUses: [
    "Fruit pulp for culinary and beverage production",
    "Spice and flavoring agent (major commercial product)",
    "Confectionery and candy production",
    "Timber for furniture and tools",
    "Fodder for livestock",
  ],
  plantationGuidelines: {
    bestPlantedAt: [
      "Agricultural fields",
      "Home gardens",
      "Agroforestry systems",
      "Dry regions",
    ],
    spaceRequirement: "10–15 meters apart",
    maintenanceLevel: "Low",
    notSuitableFor: [
      "Waterlogged areas",
      "Heavy rainfall regions",
      "Very cold climates",
    ],
  },
  distribution: {
    india: [
      "Maharashtra",
      "Karnataka",
      "Telangana",
      "Andhra Pradesh",
      "Rajasthan",
      "Tamil Nadu",
    ],
    global: [
      "Africa (native)",
      "Pakistan",
      "Bangladesh",
      "Sri Lanka",
      "Southeast Asia",
    ],
  },
  interestingFacts: [
    "Seedpods contain 2–3 seeds enclosed in edible pulp",
    "Tamarind paste is used in 50+ Indian dishes and drinks",
    "The wood is extremely hard and durable, resistant to decay",
    "Trees can live for 300+ years with proper care",
  ],
};
export const rainTreeData: TreeData = {
  id: 8,
  slug: "rain-tree",
  name: "Rain Tree",
  scientificName: "Samanea saman (Albizia saman)",
  family: "Fabaceae",
  localNames: ["Rain Tree", "Saman", "Champa", "Manjium"],
  nationalStatus: "Optional",
  description:
    "The Rain Tree is a massive, fast-growing ornamental and shade tree with a distinctive umbrella or mushroom-shaped canopy. Named for its tendency to 'weep', this tree provides excellent shade and is planted widely for its architectural form.",
  images: [raintreehero, raintreeleaves, raintree, raintreetrunk],
  treeType: "Deciduous to Semi-evergreen",
  height: "15–25 meters",
  canopySpread: "Up to 30 meters",
  growthRate: "Fast",
  lifespan: "100+ years",
  rootSystem: "Shallow to moderate; spreading lateral roots; non-invasive",
  leafDescription:
    "Bipinnate leaves (30–45 cm), leaflets small and fine, green, leaves fold at night (nyctinasty)",
  climate: "Tropical",
  soilType: "Well-drained, fertile soil; tolerates various soils",
  waterNeeds: "Moderate to High",
  lightRequirements: "Full Sun",
  droughtTolerance: "Moderate",
  floodTolerance: "Moderate",
  pollutionTolerance: "High",
  ecologicalImportance: {
    supportsWildlife: true,
    attracts: ["Bees", "Butterflies", "Birds", "Wildlife"],
    ecosystemRole:
      "Nitrogen-fixing tree improving soil health. Important shade tree in agroforestry.",
  },
  culturalSignificance: {
    religion: "Buddhism, Hinduism",
    associatedDeities: ["Buddhist deities"],
    symbolism: ["Shade", "Protection", "Abundance", "Peace"],
    traditionalUse:
      "Planted in parks and community spaces for gathering. Sacred in Buddhist countries.",
  },
  medicinalUses: [
    "Bark used for treating wounds and skin infections",
    "Leaves for fever reduction",
    "Pods used in traditional medicine",
  ],
  economicUses: [
    "Provides shade for plantations (coffee, cacao, tea)",
    "Fodder for livestock (nitrogen-rich pods)",
    "Timber for furniture and light construction",
    "Erosion control and land reclamation",
  ],
  plantationGuidelines: {
    bestPlantedAt: [
      "Parks",
      "Agroforestry systems",
      "Roadside avenues",
      "Community spaces",
    ],
    spaceRequirement: "12–15 meters apart",
    maintenanceLevel: "Low to Medium",
    notSuitableFor: ["Very cold regions", "Saline soils"],
  },
  distribution: {
    india: ["Maharashtra", "Goa", "Karnataka", "Tamil Nadu", "Telangana"],
    global: [
      "Central America (native)",
      "South America",
      "Southeast Asia",
      "Pantropical regions",
    ],
  },
  interestingFacts: [
    "Can create an umbrella of shade up to 30 meters wide",
    "Leaflets close during rain or overcast weather",
    "Produces sweet, brown pods (samans) rich in nutrients",
    "One of the world's fastest-growing shade trees",
  ],
};
export const arjunTreeData: TreeData = {
  id: 9,
  slug: "arjun",
  name: "Arjun Tree",
  scientificName: "Terminalia arjuna",
  family: "Combretaceae",
  localNames: ["Arjun", "Kahu", "Arjuna", "White Marudah"],
  nationalStatus: "Optional",
  description:
    "The Arjun tree is a deciduous giant with significant medicinal properties, particularly valued in Ayurvedic medicine for heart health. Commonly found along water bodies, it provides excellent erosion control and timber.",
  images: [arjunhero, arjunroot, arjuntree, arjunfruit],
  treeType: "Deciduous",
  height: "20–30 meters",
  canopySpread: "Up to 20 meters",
  growthRate: "Moderate",
  lifespan: "100+ years",
  rootSystem:
    "Deep tap root with spreading laterals; excellent for soil binding and erosion control",
  leafDescription:
    "Lanceolate, leathery leaves (8–12 cm), opposite arrangement, dark green, turning reddish before fall",
  climate: "Tropical to Subtropical",
  soilType: "Well-drained; tolerates various soils including poor ones",
  waterNeeds: "Moderate to High (prefers water-adjacent locations)",
  lightRequirements: "Full Sun",
  droughtTolerance: "Moderate",
  floodTolerance: "High",
  pollutionTolerance: "High",
  ecologicalImportance: {
    supportsWildlife: true,
    attracts: ["Birds", "Bees", "Insects"],
    ecosystemRole:
      "Critical for riparian zone stabilization. Prevents soil erosion along water bodies.",
  },
  culturalSignificance: {
    religion: "Hinduism, Ayurveda",
    associatedDeities: ["Arjun (mythological hero)"],
    symbolism: ["Strength", "Courage", "Healing", "Protection"],
    traditionalUse:
      "Valued in Ayurvedic practices. Bark used in traditional health rituals.",
  },
  medicinalUses: [
    "Bark for heart health and cardiac function",
    "Used for managing blood pressure and cholesterol",
    "Leaves for treating diabetes and blood sugar",
    "Bark for wound healing and skin conditions",
    "Seeds used in respiratory and digestive disorders",
  ],
  economicUses: [
    "Timber for agricultural tools and small construction",
    "Bark for tannin extraction",
    "Used in Ayurvedic pharmaceutical production",
    "Fodder for livestock",
    "Erosion control and embankment stabilization",
  ],
  plantationGuidelines: {
    bestPlantedAt: [
      "Riverbanks",
      "Embankments",
      "Water body margins",
      "Roadside plantations",
      "Agroforestry",
    ],
    spaceRequirement: "8–10 meters apart",
    maintenanceLevel: "Low",
    notSuitableFor: ["Completely dry areas", "Very saline soils"],
  },
  distribution: {
    india: [
      "Maharashtra",
      "Madhya Pradesh",
      "Uttar Pradesh",
      "Odisha",
      "West Bengal",
      "Telangana",
    ],
    global: ["Nepal", "Bangladesh", "Sri Lanka", "Myanmar"],
  },
  interestingFacts: [
    "One of the most valued trees in Ayurvedic medicine",
    "Bark has high tannin content, used in leather tanning",
    "Can stabilize riverbanks and prevent flooding",
    "Wood is extremely hard and termite-resistant",
  ],
};
export const coconutTreeData: TreeData = {
  id: 10,
  slug: "coconut",
  name: "Coconut Tree",
  scientificName: "Cocos nucifera",
  family: "Arecaceae",
  localNames: ["Coconut", "Nariyal", "Narikela", "Tenga"],
  nationalStatus: "Optional",
  description:
    "The Coconut tree is one of the most economically important and multipurpose trees, deeply integrated into village life and homestead gardens. Every part provides food, beverages, fiber, and construction materials.",
  images: [coconuthero, coconuttree, coconut, coconuttrunk],
  treeType: "Evergreen",
  height: "15–25 meters",
  canopySpread: "10–15 meters",
  growthRate: "Moderate",
  lifespan: "60–80 years (productive)",
  rootSystem: "Fibrous root system spreading radially; shallow but extensive",
  leafDescription:
    "Pinnate fronds (4–6 meters), leaflets narrow and linear, green, graceful and drooping",
  climate: "Tropical",
  soilType: "Well-drained sandy or loamy soil",
  waterNeeds: "High",
  lightRequirements: "Full Sun",
  droughtTolerance: "Moderate",
  floodTolerance: "Moderate",
  pollutionTolerance: "Moderate",
  ecologicalImportance: {
    supportsWildlife: true,
    attracts: ["Bees", "Birds", "Insects"],
    ecosystemRole:
      "Provides food and shelter. Important in coastal and tropical ecosystems.",
  },
  culturalSignificance: {
    religion: "Hinduism",
    associatedDeities: ["All deities"],
    symbolism: ["Prosperity", "Life", "Sustenance", "Bounty"],
    traditionalUse:
      "Coconut fruit offered in all Hindu pujas and ceremonies. Coconut breaking ritual in auspicious occasions.",
  },
  medicinalUses: [
    "Coconut water for hydration and electrolyte balance",
    "Kernel for heart health and immune support",
    "Oil for skin and hair health",
    "Husks for various Ayurvedic preparations",
    "Coir (fiber) dust for medicinal poultices",
  ],
  economicUses: [
    "Coconut (nut) for fresh market and processed products",
    "Coconut oil production (commercial and household)",
    "Coir (fiber) production for rope, mats, and textiles",
    "Toddy (sap) production for beverages",
    "Timber for construction and small furniture",
    "Leaves for thatching and weaving",
    "Major commercial income source",
  ],
  plantationGuidelines: {
    bestPlantedAt: [
      "Homesteads",
      "Gardens",
      "Coastal areas",
      "Well-watered regions",
    ],
    spaceRequirement: "7–9 meters apart",
    maintenanceLevel: "Medium",
    notSuitableFor: [
      "Cold regions",
      "Waterlogged areas",
      "Saline soils (salt water exceeding limits)",
    ],
  },
  distribution: {
    india: [
      "Maharashtra",
      "Karnataka",
      "Tamil Nadu",
      "Kerala",
      "Andhra Pradesh",
      "Odisha",
    ],
    global: [
      "Tropical and subtropical regions worldwide",
      "Pantropical distribution",
    ],
  },
  interestingFacts: [
    "Grows to maturity and begins fruit production in 6–7 years",
    "A mature tree can produce 60–120 coconuts annually",
    "Called 'Tree of Life' for its incredible multipurpose uses",
    "Coconut water is nearly identical to human blood plasma composition",
  ],
};

// Tree registry - add more trees here
export const treeRegistry: Record<string, TreeData> = {
  banyan: banyanTreeData,
  peepal: peepulTreeData,
  mango: mangoTreeData,
  gulmohar: gulmohárTreeData,
  bael: baelTreeData,
  tamarind: tamarindTreeData,
  "rain-tree": rainTreeData,
  arjun: arjunTreeData,
  coconut: coconutTreeData,
};

// Get all available trees for listing
export const getAllTrees = (): TreeData[] => Object.values(treeRegistry);

// Get tree by slug
export const getTreeBySlug = (slug: string): TreeData | undefined =>
  treeRegistry[slug];
