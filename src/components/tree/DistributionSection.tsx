import { motion } from "framer-motion";
import { TreeData } from "@/types/tree";
import { MapPin, Globe } from "lucide-react";

interface DistributionSectionProps {
  data: TreeData;
}

export const DistributionSection = ({ data }: DistributionSectionProps) => {
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
            Geographic Distribution
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Where this magnificent tree species naturally grows
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* India Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-accent/20 text-accent">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-primary">In India</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.distribution.india.map((state, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {state}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Global Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-2xl p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-primary">Globally</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.distribution.global.map((country, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {country}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
