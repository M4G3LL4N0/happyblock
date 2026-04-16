export interface WaitlistEntry {
  id: string;
  email: string;
  created_at: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  location: string;
  created_at: string;
  updated_at: string;
}

export interface Scenario {
  id: string;
  project_id: string;
  name: string;
  description: string;
  metrics: {
    happy_score: number;
    access_score: number;
    walkability: number;
    social_density: number;
    green_score: number;
    time_efficiency: number;
    safety: number;
    economic_score: number;
  };
  created_at: string;
  updated_at: string;
}
