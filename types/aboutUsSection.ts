export interface AboutUsSectionInterface {
  acf: {
    logo: string | false;
    title: string;
    description: string;
    section_link: {
      href: string;
      text: string;
    };
    hero_image: string | false;
  };
}
