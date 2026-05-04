import { LocalizedText } from "./i18n";

export interface QualificationInterface {
  id: number;
  acf: {
    slide_type: "grid" | "one_column" | "two_column";
    title?: LocalizedText;
    description?: LocalizedText;
    image: string | false;
    grid_data?: Record<string, LocalizedText>;
  };
}
