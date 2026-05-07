import HomeOneSlider from "@/components/HomeOne/HomeOneSlider/HomeOneSlider";
import HomeOneFeatures from "@/components/HomeOne/HomeOneFeatures/HomeOneFeatures";
import HomeOneCategories from "@/components/HomeOne/HomeOneCategories/HomeOneCategories";
import FeaturedProducts from "@/components/HomeOne/FeaturedProducts";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <HomeOneSlider />
        <HomeOneFeatures />
        <HomeOneCategories />
        <FeaturedProducts />
      </main>
    </div>
  );
}
