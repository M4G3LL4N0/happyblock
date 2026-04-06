"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ScenarioForm({ projectId }: { projectId: string }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { data, error } = await supabase
      .from("scenarios")
      .insert([{ 
        project_id: projectId,
        name,
        description,
        metrics: {
          happy_score: Math.floor(Math.random() * 100),
          access_score: Math.floor(Math.random() * 100),
          walkability: Math.floor(Math.random() * 100),
          social_density: Math.floor(Math.random() * 100),
          green_score: Math.floor(Math.random() * 100),
          time_efficiency: Math.floor(Math.random() * 100),
          safety: Math.floor(Math.random() * 100),
          economic_score: Math.floor(Math.random() * 100)
        }
      }])
      .select()
      .single();

    if (error) {
      console.error("Error creating scenario:", error);
    } else {
      router.push(`/dashboard/scenarios/${data.id}`);
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div className="space-y-2">
        <label className="block text-sm font-medium">Scenario Name</label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Mixed-Use Redevelopment"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Description</label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the scenario details..."
          rows={4}
          required
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Scenario"}
        </Button>
      </div>
    </form>
  );
}
