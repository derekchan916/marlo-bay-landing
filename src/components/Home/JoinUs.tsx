import Link from "next/link";
import { Button } from "@/base/button";
import { Text } from "@/base/text";

export default function JoinUs() {
  return (
    <section className="bg-stone-50">
      <div className="container-base section-y-padding pt-0">
        <div className="bg-stone-100 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12">
            {/* Left Column - Text and Buttons */}
            <div>
              <Text className="font-light mb-6 " variant="h2">
                Ready to <span className="font-bold">Maximize your</span>{" "}
                Business Value?
              </Text>
              <Text color="secondary" className="mb-8" variant="lead">
                Get in touch with our M&A experts to start your journey to a
                faster, more valuable exit.
              </Text>
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative w-full aspect-4/5 rounded-lg overflow-hidden border-2 border-stone-200">
                <div className="w-full h-full bg-stone-200 flex items-center justify-center">
                  <span className="text-gray-400">Image placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
