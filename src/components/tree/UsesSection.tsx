import { motion } from "framer-motion";
import { TreeData } from "@/types/tree";
import { Stethoscope, Coins, Check } from "lucide-react";

interface UsesSectionProps {
  data: TreeData;
}

export const UsesSection = ({ data }: UsesSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
            Practical Applications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Traditional and modern uses of this remarkable tree
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Medicinal Uses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-full bg-leaf/10 text-leaf">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-primary">Medicinal Uses</h3>
            </div>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {data.medicinalUses.map((use, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-leaf/20 text-leaf flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-muted-foreground">{use}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Economic Uses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-full bg-accent/20 text-accent">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-primary">Economic Benefits</h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {data.economicUses.map((use, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-secondary/50 rounded-xl p-4 text-center border border-border/50 hover:border-accent/30 transition-colors"
                >
                  <span className="text-foreground font-medium">{use}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
