import type { Specialization } from "@/entities/specializations";

export interface Skills {
  id: number;
  title: string;
  specializations: Specialization[];
  imageSrc: string;
}
