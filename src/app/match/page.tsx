import Header from "@/components/Global/Header";
import FinancialForm from "@/components/Match/FinancialForm";

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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Finding Your Perfect Match
          </h1>
        </div>
      </section>

      <FinancialForm initialDomain={domain} />
    </div>
  );
}
