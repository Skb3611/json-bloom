import { motion } from "framer-motion";
import { TreeData } from "@/types/tree";
import { Lightbulb, Sparkles } from "lucide-react";

interface FactsSectionProps {
  data: TreeData;
}

export const FactsSection = ({ data }: FactsSectionProps) => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Did You Know?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Fascinating Facts
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Discover the extraordinary nature of this iconic tree
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {data.interestingFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <p className="text-primary-foreground/90 leading-relaxed">{fact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
