import Header from "@/components/Global/Header";
import FinancialForm from "@/components/Match/FinancialForm";
import { Text } from "@/base/text";
import Footer from "@/components/Global/Footer";

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

      <FinancialForm initialDomain={domain} />
      <Footer />
    </div>
  );
}
