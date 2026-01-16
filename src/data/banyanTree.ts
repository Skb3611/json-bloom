import { TreeData } from "@/types/tree";
import banyanHero from "@/assets/banyan-hero.jpg";
import banyanRoots from "@/assets/banyan-roots.jpg";
import banyanCanopy from "@/assets/banyan-canopy.jpg";
import banyanTrunk from "@/assets/banyan-trunk.jpg";

// Local images to use instead of external URLs
export const treeImages = {
  hero: banyanHero,
  roots: banyanRoots,
  canopy: banyanCanopy,
  trunk: banyanTrunk,
};

export const banyanTreeData: TreeData = {
  id: 1,
  name: "Banyan Tree",
  scientificName: "Ficus benghalensis",
  family: "Moraceae",
  localNames: ["Vad", "Bargad"],
  nationalStatus: "National Tree of India",
  description: "The Banyan tree is a massive evergreen fig tree native to the Indian subcontinent. It is known for its enormous canopy and aerial prop roots that grow downward from branches and form additional trunks. Over time, a single banyan tree can spread across acres, appearing like a forest. It symbolizes longevity, wisdom, shelter, and spiritual significance in Indian culture.",
  images: [
    banyanHero,
    banyanRoots,
    banyanCanopy,
    banyanTrunk,
  ],
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
    ecosystemRole: "Provides food, shelter, nesting areas, and regulates microclimate"
  },
  culturalSignificance: {
    religion: "Hinduism",
    associatedDeities: ["Lord Vishnu", "Lord Shiva"],
    symbolism: ["Longevity", "Wisdom", "Immortality", "Protection"],
    traditionalUse: "Village meetings and community gatherings"
  },
  medicinalUses: [
    "Bark used in traditional medicine for diabetes and diarrhea",
    "Leaves used for wound healing and skin infections",
    "Roots used for dental and gum treatments",
    "Latex used in certain skin remedies (with caution)"
  ],
  economicUses: [
    "Shade provider",
    "Soil conservation",
    "Environmental education",
    "Traditional medicine"
  ],
  plantationGuidelines: {
    bestPlantedAt: [
      "Temple grounds",
      "Village centers",
      "Public parks",
      "Highway rest areas"
    ],
    spaceRequirement: "Very large open space required",
    maintenanceLevel: "Very low",
    notSuitableFor: [
      "Small gardens",
      "Near buildings",
      "Close to underground pipelines"
    ]
  },
  distribution: {
    india: [
      "Maharashtra",
      "Uttar Pradesh",
      "Tamil Nadu",
      "Karnataka",
      "West Bengal",
      "Madhya Pradesh"
    ],
    global: [
      "India",
      "Nepal",
      "Sri Lanka",
      "Bangladesh",
      "Southeast Asia"
    ]
  },
  interestingFacts: [
    "The Great Banyan Tree in Kolkata covers more than 14,500 square meters",
    "A single banyan tree can resemble a forest",
    "It relies on fig wasps for pollination",
    "One of the longest-living tree species in the world"
  ]
};
