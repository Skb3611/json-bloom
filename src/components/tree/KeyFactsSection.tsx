import { motion } from "framer-motion";
import { TreeData } from "@/types/tree";
import { 
  TreePine, 
  Ruler, 
  Clock, 
  Sun, 
  Droplets, 
  Wind,
  Sprout,
  Mountain
} from "lucide-react";

interface KeyFactsSectionProps {
  data: TreeData;
}

const FactCard = ({ 
  icon: Icon, 
  label, 
  value, 
  delay 
}: { 
  icon: React.ElementType; 
  label: string; 
  value: string; 
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-secondary text-primary">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
        <p className="text-lg font-medium text-foreground">{value}</p>
      </div>
    </div>
  </motion.div>
);

export const KeyFactsSection = ({ data }: KeyFactsSectionProps) => {
  const facts = [
    { icon: TreePine, label: "Tree Type", value: data.treeType },
    { icon: Ruler, label: "Height", value: data.height },
    { icon: Mountain, label: "Canopy Spread", value: data.canopySpread },
    { icon: Clock, label: "Lifespan", value: data.lifespan },
    { icon: Sprout, label: "Growth Rate", value: data.growthRate },
    { icon: Sun, label: "Light Needs", value: data.lightRequirements },
    { icon: Droplets, label: "Water Needs", value: data.waterNeeds },
    { icon: Wind, label: "Climate", value: data.climate },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
            Key Characteristics
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Essential facts about this majestic tree species
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <FactCard
              key={fact.label}
              icon={fact.icon}
              label={fact.label}
              value={fact.value}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Additional details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-secondary/50 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-xl text-primary mb-4">Root System</h3>
              <p className="text-muted-foreground">{data.rootSystem}</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-primary mb-4">Leaf Description</h3>
              <p className="text-muted-foreground">{data.leafDescription}</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-primary mb-4">Soil Preference</h3>
              <p className="text-muted-foreground">{data.soilType}</p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-primary mb-4">Tolerances</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Drought: {data.droughtTolerance}
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Flood: {data.floodTolerance}
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Pollution: {data.pollutionTolerance}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
