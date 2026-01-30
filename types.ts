
export interface BMCItem {
  point: string;
  rationale: string;
}

export interface BMCBlockData {
  id: string;
  title: string;
  icon: string;
  items: BMCItem[];
  subsections?: {
    title: string;
    items: BMCItem[] | string[];
  }[];
}

export type BMCData = Record<string, BMCBlockData>;
