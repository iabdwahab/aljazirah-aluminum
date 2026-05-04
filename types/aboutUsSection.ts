import { LocalizedText } from "./i18n";

export interface AboutUsSectionInterface {
  acf: {
    logo: string | false;
    title: LocalizedText;
    description: LocalizedText;
    section_link: {
      href: string;
      text: LocalizedText;
    };
    hero_image: string | false;
  };
}
