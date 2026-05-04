import { LocalizedText } from "./i18n";

export interface HRSectionCardInterface {
  id: number;
  acf: {
    icon: string | false;
    title: LocalizedText;
    description: LocalizedText;
  };
}
