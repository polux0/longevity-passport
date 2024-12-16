"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmailPopup({ isOpen, onClose }: EmailPopupProps) {
  const [email, setEmail] = useState("");
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Template ID
        {
            from_name: email, // Email provided by the user
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Public Key
      );

      // Close the email popup
      onClose();

      // Open the "Thank You" popup
      setIsThankYouOpen(true);

      // Automatically close the "Thank You" popup after 3 seconds
      setTimeout(() => {
        setIsThankYouOpen(false);
      }, 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <>
      {/* Email Input Popup */}
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px] bg-teal-50">
          <DialogHeader>
            <DialogTitle className="text-teal-800 text-2xl font-bold">Reserve Your Longevity Passport</DialogTitle>
            <DialogDescription className="text-teal-700">
              Enter your email to reserve your spot and stay updated on our launch.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-teal-800">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-teal-300 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
            <Button type="submit" className="w-full bg-[#0A5C5C] hover:bg-[#094949] text-white">
              Reserve My Passport
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={isThankYouOpen} onOpenChange={() => setIsThankYouOpen(false)}>
  <DialogContent className="sm:max-w-[425px] bg-white text-center">
    <DialogHeader>
      <DialogTitle className="text-teal-800 text-2xl font-bold">Thank You!</DialogTitle>
    </DialogHeader>
    <div className="flex flex-col items-center py-6 space-y-4">
      {/* Add an Illustration */}
      <img
        src="/images/thank_you.svg"
        alt="Thank You"
        className="w-32 h-32"
      />

      {/* Message */}
      <p className="text-teal-700 text-lg">
        Your Longevity Passport journey has been kickstarted. We'll keep you updated on our launch!
      </p>

      {/* Button or Link */}
      <Button
        onClick={() => setIsThankYouOpen(false)}
        className="mt-4 bg-teal-800 text-white px-6 py-3 rounded-md hover:bg-teal-700"
      >
        Close
      </Button>
    </div>
  </DialogContent>
</Dialog>


      {/* Thank You Popup */}
      {/* <Dialog open={isThankYouOpen} onOpenChange={() => setIsThankYouOpen(false)}>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-teal-800 text-2xl font-bold">Thank You!🙏</DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            <p className="text-teal-700 text-lg">
              Your Longevity Passport journey has been kickstarted. We'll keep you updated on our launch.
            </p>
          </div>
        </DialogContent>
      </Dialog> */}
    </>
    
  );
}
