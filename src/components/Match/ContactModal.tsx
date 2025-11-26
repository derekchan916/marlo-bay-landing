"use client";

import { useState } from "react";
import Modal from "react-modal";
import { Button } from "@/base/button";
import { Input } from "@/base/input";

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
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation: full name is required
    if (!fullName.trim()) {
      setError("Full name is required.");
      return;
    }

    // Validation: either email or mobile number is required
    if (!email.trim() && !mobileNumber.trim()) {
      setError("Please provide either an email address or mobile number.");
      return;
    }

    // API call will be handled later
    console.log({
      domain,
      email,
      fullName,
      mobileNumber,
      profit,
      revenue,
    });
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
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Take the first step today.
          </h2>
          <p className="text-lg text-gray-600">
            Turn buyer interest into competing offers and get acquired on the
            best terms.
          </p>
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

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}

          <Button className="w-full" type="submit">
            Get Started for Free
          </Button>

          <p className="text-center text-sm text-gray-500">
            No commitment, it&rsquo;s just a 15 minute chat.
          </p>
        </form>
      </div>
    </Modal>
  );
}
