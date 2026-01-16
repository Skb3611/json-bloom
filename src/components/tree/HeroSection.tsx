import { motion } from "framer-motion";
import { TreeData } from "@/types/tree";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface HeroSectionProps {
  data: TreeData;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute top-6 left-6 z-20"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm text-foreground rounded-full hover:bg-background transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">All Trees</span>
        </Link>
      </motion.div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={data.images[0]}
          alt={data.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {data.nationalStatus && (
            <Badge className="mb-6 bg-accent text-accent-foreground border-none px-4 py-1.5 text-sm font-medium shadow-lg">
              {data.nationalStatus}
            </Badge>
          )}
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary mb-4 tracking-tight drop-shadow-sm">
            {data.name}
          </h1>
          
          <p className="text-xl md:text-2xl font-serif italic text-earth mb-6">
            {data.scientificName}
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {data.localNames.map((name, index) => (
              <span
                key={index}
                className="text-sm text-foreground/80 bg-background/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm"
              >
                {name}
              </span>
            ))}
            <span className="text-sm text-foreground/80 bg-background/70 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
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
              className="group inline-flex items-center gap-2 text-primary hover:text-accent transition-colors bg-background/60 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm"
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
