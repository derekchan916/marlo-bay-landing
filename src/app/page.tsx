import IndustryCard from "@/components/Home/IndustryCard";
import TestimonialCard from "@/components/Home/TestimonialCard";
import JoinUs from "@/components/Home/JoinUs";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import { Button } from "@/base/button";
import { Input } from "@/base/input";

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
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              {/* Tag */}
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
                  For businesses with $5M-100M in sales
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
                Journey to Market Leadership
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Our commitment to collaborative, proactive engagement has been
                rewarded with lasting partnerships.
              </p>

              {/* Input and Button */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
                <Input
                  type="text"
                  placeholder="Enter your website"
                  className="h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50"
                />
                <Button
                  size="lg"
                  className="h-12 bg-white text-black hover:bg-white/90 px-8 whitespace-nowrap"
                >
                  Find Buyers
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Our commitment to collaborative, proactive engagement has been
            rewarded with lasting partnerships.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Odyssey is a top private equity firm with a rigorous approach to
            thematic investing in industrial and business services markets.
            Through our Buy, Build and Integrate approach, we aim to transform
            middle-market companies into highly efficient, diversified leaders
            with attractive long-term growth profiles. Since 1997, we have
            raised over $8.2 billion of private equity capital that has been
            invested in over 50 platform companies that have completed
            approximately 300 add-on acquisitions. We are currently investing
            out of our sixth fund, with $3.25 billion in capital commitments.
          </p>
        </div>
      </section>

      {/* Transformative Growth Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transformative Growth
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We have a strong track record of taking several companies from a
                few million in revenue to hundreds of millions in revenue across
                industry verticals.
              </p>
            </div>

            {/* Right Column - Image Grid */}
            <div className="grid grid-cols-3 gap-4">
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
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              What Our Partners
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600">Have to Say</p>
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
