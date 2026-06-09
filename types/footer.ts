import { LocalizedText } from "./i18n";

export interface FooterInterface {
  acf: {
    footer_logo: string | null;
    footer_column_1: {
      column_title: LocalizedText;
      column_links: {
        link_1: {
          link_text: LocalizedText;
          link_url: string;
        };
        link_2: {
          link_text: LocalizedText;
          link_url: string;
        };
        link_3: {
          link_text: LocalizedText;
          link_url: string;
        };
        link_4: {
          link_text: LocalizedText;
          link_url: string;
        };
        link_5: {
          link_text: LocalizedText;
          link_url: string;
        };
      };
    };
    footer_column_2: {
      column_title: LocalizedText;
      column_links: {
        link_1: {
          link_text: LocalizedText;
          link_url: string;
        };
        link_2: {
          link_text: LocalizedText;
          link_url: string;
        };
        link_3: {
          link_text: LocalizedText;
          link_url: string;
        };
        link_4: {
          link_text: LocalizedText;
          link_url: string;
        };
        link_5: {
          link_text: LocalizedText;
          link_url: string;
        };
      };
    };
    social_media: {
      facebook: string;
      instagram: string;
      linkedin: string;
      youtube: string;
      whatsapp: string;
      tiktok: string;
      snapchat: string;
      x: string;
    };
  };
}
