import { motion } from "framer-motion";
import { TreeData } from "@/types/tree";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  data: TreeData;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.images[0]}
          alt={data.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <Badge className="mb-6 bg-accent text-accent-foreground border-none px-4 py-1.5 text-sm font-medium">
            {data.nationalStatus}
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary mb-4 tracking-tight">
            {data.name}
          </h1>
          
          <p className="text-xl md:text-2xl font-serif italic text-earth mb-6">
            {data.scientificName}
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {data.localNames.map((name, index) => (
              <span
                key={index}
                className="text-sm text-muted-foreground bg-secondary/80 backdrop-blur-sm px-3 py-1 rounded-full"
              >
                {name}
              </span>
            ))}
            <span className="text-sm text-muted-foreground bg-secondary/80 backdrop-blur-sm px-3 py-1 rounded-full">
              Family: {data.family}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <a
              href="#overview"
              className="group inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <span className="text-sm font-medium">Discover More</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
