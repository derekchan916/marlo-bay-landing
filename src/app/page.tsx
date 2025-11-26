import IndustryCard from "@/components/Home/IndustryCard";
import TestimonialCard from "@/components/Home/TestimonialCard";
import JoinUs from "@/components/Home/JoinUs";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import { Button } from "@/base/button";
import { Input } from "@/base/input";
import { Text } from "@/base/texts";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-background.jpg')",
            backgroundColor: "#1a1a1a", // Fallback dark color
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-base ">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              {/* Tag */}
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
                  For businesses with $5M-100M in sales
                </span>
              </div>

              {/* Title */}
              <Text className="text-white mb-6" variant="h1">
                Journey to Market Leadership
              </Text>

              {/* Subtitle */}
              <Text className="text-white/90 mb-8 max-w-2xl" variant="lead">
                Our commitment to collaborative, proactive engagement has been
                rewarded with lasting partnerships.
              </Text>

              {/* Input and Button */}
              <form
                action="/match"
                method="get"
                className="flex flex-col sm:flex-row gap-3 max-w-lg"
              >
                <Input
                  name="domain"
                  type="text"
                  placeholder="Enter your website"
                  required
                  className="h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 bg-white text-black hover:bg-white/90 px-8 whitespace-nowrap"
                >
                  Find Buyers
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50">
        <div className="container-base section-y-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image on the left */}
            <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Image placeholder</span>
              </div>
            </div>

            {/* Text on the right, centered vertically */}
            <div className="flex flex-col justify-center">
              <Text className="mb-6" variant="h2">
                Our mission
              </Text>
              <Text color="secondary" variant="lead">
                A top private equity firm transforming middle-market companies
                through our Buy, Build and Integrate approach. Since 1997, we
                have raised over $8.2 billion invested in over 50 platform
                companies.
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* Transformative Growth Section */}
      <section className="bg-white">
        <div className="container-base section-y-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div className="flex flex-col justify-center">
              <Text className="mb-6" variant="h2">
                Transformative Growth
              </Text>
              <Text color="secondary" variant="lead">
                We have a strong track record of taking several companies from a
                few million in revenue to hundreds of millions in revenue across
                industry verticals.
              </Text>
            </div>

            {/* Right Column - Image Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <IndustryCard
                imageSrc="/veterinary-services.jpg"
                alt="Veterinary Services"
                label="Veterinary Services"
              />
              <IndustryCard
                imageSrc="/commercial-services.jpg"
                alt="Commercial Services"
                label="Commercial Services"
              />
              <IndustryCard
                imageSrc="/home-services.jpg"
                alt="Home Services"
                label="Home Services"
              />
              <IndustryCard
                imageSrc="/accounting-services.jpg"
                alt="Accounting Services"
                label="Accounting Services"
              />
              <IndustryCard
                imageSrc="/it-services.jpg"
                alt="IT Services"
                label="IT Services"
              />
              <IndustryCard
                imageSrc="/youth-enrichment.jpg"
                alt="Youth Enrichment"
                label="Youth Enrichment"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50">
        <div className="container-base section-y-padding">
          <div className="text-center mb-12">
            <Text className="mb-2" variant="h2">
              What Our Partners Have to Say
            </Text>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <TestimonialCard
              quote="&ldquo;It has been a pleasure partnering with Odyssey over the last several years. As a first-time private equity CEO, I deeply valued their strategic support throughout our journey.&rdquo;"
              name="Scott Dulitz"
              title="CEO, Mercalis"
            />
            <TestimonialCard
              quote="&ldquo;We are grateful for our successful partnership with Odyssey that transformed NSI into a leading platform in the electrical and HVAC markets.&rdquo;"
              name="G.R. Schrotenboer"
              title="CEO, NSI"
            />
            <TestimonialCard
              quote="&ldquo;When I joined the Company shortly after Odyssey&rsquo;s investment, we were immediately aligned on the vision of what we could create together as partners.&rdquo;"
              name="Mike Kachmer"
              title="CEO, Duravant"
            />
          </div>
        </div>
      </section>

      <JoinUs />

      <Footer />
    </div>
  );
}
