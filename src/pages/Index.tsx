import { banyanTreeData } from "@/data/banyanTree";
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

const Index = () => {
  const data = banyanTreeData;

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

export default Index;
