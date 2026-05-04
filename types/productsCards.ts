import { LocalizedText } from "./i18n";

export interface ProductCardInterface {
  id: number;
  acf: {
    product_name: LocalizedText;
    product_description: LocalizedText;
    image: string | false;
  };
}
