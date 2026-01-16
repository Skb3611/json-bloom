import { motion } from "framer-motion";
import { TreeData } from "@/types/tree";
import { TreePine, Heart } from "lucide-react";

interface FooterProps {
  data: TreeData;
}

export const Footer = ({ data }: FooterProps) => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <TreePine className="w-6 h-6" />
          </div>
          
          <h3 className="text-2xl font-serif text-primary mb-2">
            {data.name}
          </h3>
          <p className="text-muted-foreground italic mb-6">
            {data.scientificName}
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive" /> for nature lovers
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
