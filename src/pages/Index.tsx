import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getAllTrees } from "@/data/trees";
import { TreePine, ArrowRight, Leaf } from "lucide-react";

const Index = () => {
  const trees = getAllTrees();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/30" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 text-accent mb-6">
              <Leaf className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Nature Explorer</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary mb-6 tracking-tight">
              Tree Encyclopedia
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discover the magnificent trees of the world. Explore their ecological importance, 
              cultural significance, and fascinating characteristics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tree Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-2">
              Explore Our Collection
            </h2>
            <p className="text-muted-foreground">
              {trees.length} tree{trees.length !== 1 ? 's' : ''} documented
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trees.map((tree, index) => (
              <motion.div
                key={tree.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link
                  to={`/tree/${tree.slug}`}
                  className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={tree.images[0]}
                      alt={tree.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-serif text-primary group-hover:text-accent transition-colors">
                          {tree.name}
                        </h3>
                        <p className="text-sm text-muted-foreground italic">
                          {tree.scientificName}
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                    
                    {tree.nationalStatus && (
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3">
                        {tree.nationalStatus}
                      </span>
                    )}
                    
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {tree.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                        {tree.treeType}
                      </span>
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                        {tree.lifespan}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Add More Trees Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * trees.length }}
              className="flex items-center justify-center"
            >
              <div className="w-full h-full min-h-[300px] bg-secondary/30 rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <TreePine className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-serif text-primary mb-2">More Trees Coming</h3>
                <p className="text-sm text-muted-foreground">
                  Our collection is growing. Check back soon!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <TreePine className="w-5 h-5" />
            <span className="font-serif font-semibold">Nature Explorer</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Celebrating the beauty and importance of trees
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
