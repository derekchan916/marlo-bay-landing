import Link from "next/link";
import { Button } from "@/base/button";
import { Text } from "@/base/text";

export default function JoinUs() {
  return (
    <section className="bg-stone-50">
      <div className="container-base section-y-padding-sm pt-0">
        <div className="bg-stone-100 rounded-2xl overflow-hidden">
          <div className="flex flex-col items-center justify-center p-8 md:p-12 text-center">
            <Text className="font-light mb-6" variant="h2">
              Ready to <span className="font-bold">Maximize your</span> Business
              Value?
            </Text>
            <Text color="secondary" className="mb-8" variant="lead">
              Get in touch with our M&A experts to start your journey to a
              faster, more valuable exit.
            </Text>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
