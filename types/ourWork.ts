import { LocalizedText } from "./i18n";

export interface OurWorkInterface {
  acf: {
    image: string | false;
    title: LocalizedText;
    description: LocalizedText;
    href?: string;
  };
}
