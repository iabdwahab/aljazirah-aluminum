export interface ProductCardInterface {
  id: number;
  acf: {
    product_name: string;
    product_description: string;
    image: string | false;
  };
}
