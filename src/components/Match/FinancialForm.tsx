"use client";

import { useState } from "react";
import { Button } from "@/base/button";
import { Input } from "@/base/input";
import { Text } from "@/base/text";
import ContactModal from "@/components/Match/ContactModal";

interface FinancialFormProps {
  initialDomain?: string;
}

export default function FinancialForm({
  initialDomain = "",
}: FinancialFormProps) {
  const [domain, setDomain] = useState(initialDomain || "");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profit, setProfit] = useState<string>("");
  const [revenue, setRevenue] = useState<string>("");
  const revenueOptions = ["Under $1M", "$1M - $5M", "$5M - $20M", "Over $20M"];

  const profitOptions = ["< $500K", "$500K - $1M", "> $1M"];

  return (
    <div className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <form
          className="space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        >
          {/* Website Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website
            </label>
            <Input
              className="w-full bg-white"
              onChange={(e) => setDomain(e.target.value)}
              placeholder="Enter your website"
              type="text"
              value={domain}
            />
          </div>

          {/* Revenue Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              2024 Annual Revenue
            </label>
            <div className="grid grid-cols-2 gap-3">
              {revenueOptions.map((option) => (
                <Button
                  key={option}
                  onClick={() => setRevenue(option)}
                  type="button"
                  variant={revenue === option ? "default" : "outline"}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>

          {/* Profit Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              2024 Annual Profit
            </label>
            <div className="grid grid-cols-3 gap-3">
              {profitOptions.map((option) => (
                <Button
                  key={option}
                  onClick={() => setProfit(option)}
                  type="button"
                  variant={profit === option ? "default" : "outline"}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <Button className="w-full h-12" type="submit">
            Find Potential Buyers
          </Button>

          <Text className="text-center text-gray-500 mt-4" variant="small">
            Free Instant Buyer Match. No Email or Sign-Up Necessary.
          </Text>
        </form>
      </div>

      <ContactModal
        domain={domain}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        profit={profit}
        revenue={revenue}
      />
    </div>
  );
}
