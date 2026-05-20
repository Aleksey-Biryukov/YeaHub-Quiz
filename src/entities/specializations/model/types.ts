export interface Specialization {
  createdAt: string | null;
  createdBy: string | null;
  description: string;
  id: number;
  imgeSrc: string | null;
  slug: string;
  title: string;
  updatedAt: string | null;
}

export interface SpecializationState {
  selectedId: number | null;
}
