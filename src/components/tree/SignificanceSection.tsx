import { motion } from "framer-motion";
import { TreeData } from "@/types/tree";
import { 
  Bird, 
  Sparkles, 
  Users, 
  Heart,
  Globe,
  Flower2
} from "lucide-react";

interface SignificanceSectionProps {
  data: TreeData;
}

export const SignificanceSection = ({ data }: SignificanceSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
            Significance & Importance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understanding the ecological and cultural value of this sacred tree
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Ecological Importance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-leaf/10 text-leaf">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-primary">Ecological Role</h3>
            </div>

            <motion.p variants={itemVariants} className="text-muted-foreground mb-6">
              {data.ecologicalImportance.ecosystemRole}
            </motion.p>

            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center gap-2 text-primary mb-3">
                <Bird className="w-5 h-5" />
                <span className="font-medium">Wildlife Attracted</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.ecologicalImportance.attracts.map((animal, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {animal}
                  </span>
                ))}
              </div>
            </motion.div>

            {data.ecologicalImportance.supportsWildlife && (
              <motion.div variants={itemVariants} className="flex items-center gap-2 text-leaf">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">Actively supports wildlife habitat</span>
              </motion.div>
            )}
          </motion.div>

          {/* Cultural Significance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-accent/20 text-accent">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-primary">Cultural Heritage</h3>
            </div>

            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-sm text-muted-foreground mb-2">Religion</p>
              <p className="text-foreground font-medium">{data.culturalSignificance.religion}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center gap-2 text-primary mb-3">
                <Flower2 className="w-5 h-5" />
                <span className="font-medium">Associated Deities</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.culturalSignificance.associatedDeities.map((deity, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {deity}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-sm text-muted-foreground mb-3">Symbolism</p>
              <div className="flex flex-wrap gap-2">
                {data.culturalSignificance.symbolism.map((symbol, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {symbol}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-2 text-muted-foreground">
              <Users className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{data.culturalSignificance.traditionalUse}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
