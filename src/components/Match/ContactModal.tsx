"use client";

import { useState } from "react";
import Modal from "react-modal";
import { Button } from "@/base/button";
import { Input } from "@/base/input";
import { Text } from "@/base/text";
import { supabase } from "@/lib/supabase";

interface ContactModalProps {
  domain?: string;
  isOpen: boolean;
  onRequestClose: () => void;
  profit?: string;
  revenue?: string;
}

export default function ContactModal({
  domain = "",
  isOpen,
  onRequestClose,
  profit = "",
  revenue = "",
}: ContactModalProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");

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

    // Validation: either email or mobile number is required
    if (!email.trim() && !mobileNumber.trim()) {
      setError("Please provide either an email address or mobile number.");
      setIsSubmitting(false);
      return;
    }

    try {
      const { error: insertError } = await supabase
        .from("contact_requests")
        .insert({
          annual_profit: profit || null,
          annual_revenue: revenue || null,
          domain: domain || null,
          email: email.trim() || null,
          full_name: fullName.trim(),
          phone: mobileNumber.trim() || null,
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
    <Modal
      ariaHideApp={false}
      className="bg-white rounded-lg p-8 max-w-md w-full mx-4 outline-none"
      contentLabel="Contact Form"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div className="space-y-6">
        {isSuccess ? (
          <div className="text-center space-y-4">
            <Text className="font-light" variant="h2">
              Thank you
            </Text>
            <Text variant="p">
              We&rsquo;ve received your information and will be in touch soon.
            </Text>
          </div>
        ) : (
          <>
            <div className="text-center">
              <Text className="mb-2" variant="h2">
                Take the first step today.
              </Text>
              <Text variant="lead">
                Turn buyer interest into competing offers and get acquired on
                the best terms.
              </Text>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <Input
                  className="w-full"
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  type="text"
                  value={fullName}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  className="w-full"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <Input
                  className="w-full"
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Enter your mobile number"
                  type="tel"
                  value={mobileNumber}
                />
              </div>

              {error && (
                <Text className="text-red-600 text-center" variant="small">
                  {error}
                </Text>
              )}

              <Button className="w-full" disabled={isSubmitting} type="submit">
                {isSubmitting ? "Submitting..." : "Get Started for Free"}
              </Button>

              <Text className="text-center text-gray-500" variant="small">
                No commitment, it&rsquo;s just a 15 minute chat.
              </Text>
            </form>
          </>
        )}
      </div>
    </Modal>
  );
}
