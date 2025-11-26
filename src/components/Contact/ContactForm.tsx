"use client";

import { useState } from "react";
import { Button } from "@/base/button";
import { Input } from "@/base/input";
import { Text } from "@/base/text";
import { supabase } from "@/lib/supabase";

export default function ContactForm() {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Validation: full name is required
    if (!fullName.trim()) {
      setError("Full name is required.");
      setIsSubmitting(false);
      return;
    }

    // Validation: either email or phone number is required
    if (!email.trim() && !phoneNumber.trim()) {
      setError("Please provide either an email address or phone number.");
      setIsSubmitting(false);
      return;
    }

    try {
      const { error: insertError } = await supabase
        .from("contact_requests")
        .insert({
          business_name: businessName.trim() || null,
          email: email.trim() || null,
          full_name: fullName.trim(),
          message: message.trim() || null,
          phone: phoneNumber.trim() || null,
        });

      if (insertError) {
        throw insertError;
      }

      // Success - show success message
      setIsSuccess(true);
    } catch (err) {
      setError(
        "Something went wrong. Please try again or contact us directly."
      );
      console.error("Error submitting form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="my-28">
      <div className="container-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Form */}
          <div className={isSuccess ? "min-h-[50vh] flex flex-col" : ""}>
            {isSuccess ? (
              <div className="space-y-4">
                <Text className="font-light" variant="h2">
                  Thank you
                </Text>
                <Text color="secondary" variant="lead">
                  We&rsquo;ve received your message and will be in touch soon.
                </Text>
              </div>
            ) : (
              <>
                <Text className="mb-8" variant="h2">
                  Contact Us
                </Text>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      className="w-full bg-white"
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                      type="text"
                      value={fullName}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      className="w-full bg-white"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      type="email"
                      value={email}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      className="w-full bg-white"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter your phone number"
                      type="tel"
                      value={phoneNumber}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      * Either email or phone number is required
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name
                    </label>
                    <Input
                      className="w-full bg-white"
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="Enter your business name"
                      type="text"
                      value={businessName}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      className="w-full min-h-[120px] rounded-md border border-input bg-white px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter your message"
                      value={message}
                    />
                  </div>

                  {error && (
                    <Text className="text-red-600" variant="small">
                      {error}
                    </Text>
                  )}

                  <Button
                    className="w-full"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? "Submitting..." : "Send Message"}
                  </Button>
                </form>
              </>
            )}
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col">
            <div>
              <Text color="secondary" className="mb-2" variant="p">
                Email us at:
              </Text>
              <a
                className="text-lg text-gray-900 hover:text-gray-600 transition-colors"
                href="mailto:jimmy@marlobaypartners.com"
              >
                jimmy@marlobaypartners.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
