export interface QualificationInterface {
  id: number;
  acf: {
    slide_type: "grid" | "one_column" | "two_column";
    title?: string;
    description?: string;
    image: string | false;
    grid_data?: Record<string, string>;
  };
}
