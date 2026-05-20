import type { Skills } from "@/entities/skills";
import type { Specialization } from "@/entities/specializations";

export interface Question {
  id: number;
  authorId: number;
  keywords: string[];
  rate: number;
  longAnswer: string;
  description: string;
  questionSkills: Skills[];
  complexity: number;
  questionSpecializations: Specialization[];
  title: string;
  createdBy: {
    id: string;
    username: string;
  };
  updatedBy: {
    id: string;
    username: string;
  };
  shortAnswer: string;
}
