import { useParams, Link } from "react-router-dom";
import { getTreeBySlug } from "@/data/trees";
import { HeroSection } from "@/components/tree/HeroSection";
import { OverviewSection } from "@/components/tree/OverviewSection";
import { KeyFactsSection } from "@/components/tree/KeyFactsSection";
import { ImageGallery } from "@/components/tree/ImageGallery";
import { SignificanceSection } from "@/components/tree/SignificanceSection";
import { UsesSection } from "@/components/tree/UsesSection";
import { GuidelinesSection } from "@/components/tree/GuidelinesSection";
import { DistributionSection } from "@/components/tree/DistributionSection";
import { FactsSection } from "@/components/tree/FactsSection";
import { Footer } from "@/components/tree/Footer";
import { TreePine, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const TreePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getTreeBySlug(slug) : undefined;

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
            <TreePine className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-serif text-primary mb-4">Tree Not Found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find a tree with the identifier "{slug}". 
            Please check the URL or browse our collection.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Browse All Trees
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <HeroSection data={data} />
      <OverviewSection data={data} />
      <KeyFactsSection data={data} />
      <ImageGallery data={data} />
      <SignificanceSection data={data} />
      <UsesSection data={data} />
      <GuidelinesSection data={data} />
      <DistributionSection data={data} />
      <FactsSection data={data} />
      <Footer data={data} />
    </main>
  );
};

export default TreePage;
