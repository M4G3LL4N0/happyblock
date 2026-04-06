"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase
      .from("waitlist")
      .insert([{ email }])
      .select();

    if (error) {
      setMessage("Error joining waitlist. Please try again.");
    } else {
      setMessage("You're on the list! We'll be in touch soon.");
      setEmail("");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-center">Join the Waitlist</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
        {message && <p className="text-center text-zinc-400">{message}</p>}
      </div>
    </div>
  );
}
