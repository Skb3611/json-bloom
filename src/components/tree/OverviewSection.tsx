import { motion } from "framer-motion";
import { TreeData } from "@/types/tree";
import { Leaf } from "lucide-react";

interface OverviewSectionProps {
  data: TreeData;
}

export const OverviewSection = ({ data }: OverviewSectionProps) => {
  return (
    <section id="overview" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 text-accent mb-6">
            <Leaf className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Overview</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-8">
            A Living Monument of Nature
          </h2>
          
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            {data.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
