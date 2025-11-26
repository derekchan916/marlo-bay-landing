import Header from "@/components/Global/Header";
import FinancialForm from "@/components/Match/FinancialForm";
import { Text } from "@/base/text";

export default async function MatchPage({
  searchParams,
}: {
  searchParams: Promise<{ domain?: string }> | { domain?: string };
}) {
  // Handle both Promise and direct object cases
  const params =
    searchParams instanceof Promise ? await searchParams : searchParams;
  const domain = params.domain || "";
  return (
    <div className="relative min-h-screen bg-white">
      <Header logoVariant="color" handleScroll={false} />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 flex items-center justify-center pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Text className="font-light mb-6 tracking-tight" variant="h1">
            Finding Your Perfect Match
          </Text>
        </div>
      </section>

      <FinancialForm initialDomain={domain} />
    </div>
  );
}
