import { motion } from "framer-motion";
import { TreeData } from "@/types/tree";
import { Check, X, MapPin, Ruler, Wrench } from "lucide-react";

interface GuidelinesSectionProps {
  data: TreeData;
}

export const GuidelinesSection = ({ data }: GuidelinesSectionProps) => {
  const { plantationGuidelines } = data;

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
            Planting Guidelines
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Best practices for planting and caring for this magnificent tree
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Space Requirement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-2xl p-6 border border-border text-center"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Ruler className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-lg text-primary mb-2">Space Required</h3>
            <p className="text-muted-foreground">{plantationGuidelines.spaceRequirement}</p>
          </motion.div>

          {/* Maintenance Level */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background rounded-2xl p-6 border border-border text-center"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-leaf/10 text-leaf flex items-center justify-center">
              <Wrench className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-lg text-primary mb-2">Maintenance</h3>
            <p className="text-muted-foreground">{plantationGuidelines.maintenanceLevel}</p>
          </motion.div>

          {/* Best Locations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background rounded-2xl p-6 border border-border text-center"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 text-accent flex items-center justify-center">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-lg text-primary mb-2">Ideal Locations</h3>
            <p className="text-muted-foreground text-sm">
              {plantationGuidelines.bestPlantedAt.slice(0, 2).join(", ")}...
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Where to Plant */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-leaf/5 rounded-2xl p-8 border border-leaf/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-leaf/20 text-leaf">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif text-leaf">Recommended Locations</h3>
            </div>
            <ul className="space-y-3">
              {plantationGuidelines.bestPlantedAt.map((location, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-leaf" />
                  {location}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Where NOT to Plant */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-destructive/5 rounded-2xl p-8 border border-destructive/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-destructive/20 text-destructive">
                <X className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif text-destructive">Avoid These Locations</h3>
            </div>
            <ul className="space-y-3">
              {plantationGuidelines.notSuitableFor.map((location, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-destructive" />
                  {location}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
