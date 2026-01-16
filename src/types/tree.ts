export interface EcologicalImportance {
  supportsWildlife: boolean;
  attracts: string[];
  ecosystemRole: string;
}

export interface CulturalSignificance {
  religion: string;
  associatedDeities: string[];
  symbolism: string[];
  traditionalUse: string;
}

export interface PlantationGuidelines {
  bestPlantedAt: string[];
  spaceRequirement: string;
  maintenanceLevel: string;
  notSuitableFor: string[];
}

export interface Distribution {
  india: string[];
  global: string[];
}

export interface TreeData {
  id: number;
  name: string;
  scientificName: string;
  family: string;
  localNames: string[];
  nationalStatus: string;
  description: string;
  images: string[];
  treeType: string;
  height: string;
  canopySpread: string;
  growthRate: string;
  lifespan: string;
  rootSystem: string;
  leafDescription: string;
  climate: string;
  soilType: string;
  waterNeeds: string;
  lightRequirements: string;
  droughtTolerance: string;
  floodTolerance: string;
  pollutionTolerance: string;
  ecologicalImportance: EcologicalImportance;
  culturalSignificance: CulturalSignificance;
  medicinalUses: string[];
  economicUses: string[];
  plantationGuidelines: PlantationGuidelines;
  distribution: Distribution;
  interestingFacts: string[];
}
