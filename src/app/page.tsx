import Image from "next/image";
import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import IndustryCard from "@/components/Home/IndustryCard";
import JoinUs from "@/components/Home/JoinUs";
import ProgressiveHeroImage from "@/components/Home/ProgressiveHeroImage";
import TestimonialCard from "@/components/Home/TestimonialCard";
import { Button } from "@/base/button";
import { Input } from "@/base/input";
import { Text } from "@/base/text";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image - Progressive Loading */}
        <ProgressiveHeroImage />

        {/* Hero Content */}
        <div className="relative z-10 container-base ">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              {/* Tag */}
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
                  For businesses with $1M-100M in sales
                </span>
              </div>

              {/* Title */}
              <Text className="text-white mb-6" variant="h1">
                The Investment Bank for Small Businesses
              </Text>

              {/* Subtitle */}
              <Text className="text-white/90 mb-8 max-w-2xl" variant="lead">
                A simple and transparent way to sell your business
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
        <div className="container-base section-y-padding-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image on the left */}
            <div className="relative hidden w-full max-w-md mx-auto aspect-4/3 rounded-lg overflow-hidden bg-gray-100 lg:block">
              <Image
                alt="About Marlo Bay Partners"
                className="object-cover"
                fill
                priority
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                src="https://rhlhswfxiviuowlkjkij.supabase.co/storage/v1/object/public/assets/about.png"
              />
            </div>

            {/* Text on the right, centered vertically */}
            <div className="flex flex-col justify-center">
              <Text className="mb-6" variant="h2">
                Our mission
              </Text>
              <Text color="secondary" variant="lead">
                We provide top-level investment banking services to all small
                business owners, ensuring they get the full value for their
                life&apos;s work.
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* Transformative Growth Section */}
      <section className="bg-white">
        <div className="container-base section-y-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div className="flex flex-col justify-center lg:col-span-2">
              <Text className="mb-6" variant="h2">
                Your Professional Advisor
              </Text>
              <Text color="secondary" variant="lead">
                We connect your business to a wide network of buyers. Our expert
                advisors guide you through every step of the sale, providing
                dedicated support from start to finish.
              </Text>
            </div>

            {/* Right Column - Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:col-span-3 gap-4">
              <IndustryCard
                alt="Veterinary Services"
                className="aspect-3/2 md:aspect-square lg:aspect-2/3"
                imageSrc="https://rhlhswfxiviuowlkjkij.supabase.co/storage/v1/object/public/assets/vetinary-services.png"
                label="Veterinary Services"
              />
              <IndustryCard
                alt="Home Services"
                className="aspect-3/2 md:aspect-square lg:aspect-2/3"
                imageSrc="https://rhlhswfxiviuowlkjkij.supabase.co/storage/v1/object/public/assets/home-services.png"
                label="Home Services"
              />
              <IndustryCard
                alt="Swim Schools"
                className="aspect-3/2 md:aspect-square lg:aspect-2/3"
                imageSrc="https://rhlhswfxiviuowlkjkij.supabase.co/storage/v1/object/public/assets/swim-schools.png"
                label="Swim Schools"
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
              imageSrc="https://rhlhswfxiviuowlkjkij.supabase.co/storage/v1/object/public/assets/maria-flores.png"
              name="Maria Flores"
              quote="&ldquo;As a first-time seller, partnering with Marlo Bay Partners made the entire process simple and smooth. Their guidance was invaluable, and they saved me a tremendous amount of time and stress.&rdquo;"
              title="CEO, Blue Whales Swim School"
            />
            <TestimonialCard
              imageSrc="https://rhlhswfxiviuowlkjkij.supabase.co/storage/v1/object/public/assets/david-chen.png"
              name="David Chen"
              quote="&ldquo;Our successful partnership with Marlo Bay Partners was key to preparing and selling our business. They made a complex process straightforward and efficient, allowing us to achieve a great outcome.&rdquo;"
              title="CEO, Whisker Haven Pet Care"
            />
            <TestimonialCard
              imageSrc="https://rhlhswfxiviuowlkjkij.supabase.co/storage/v1/object/public/assets/james-wilson.png"
              name="James Wilson"
              quote="&ldquo;From the very start, Marlo Bay Partners had a clear and simple plan for the sale. We were aligned as partners immediately, which saved us months and made the entire journey seamless.&rdquo;"
              title="CEO, Coastal Tide Swim Club"
            />
          </div>
        </div>
      </section>

      <JoinUs />

      <Footer />
    </div>
  );
}
