export type Product = {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: number | null;
  currency: string;
  image: string;
  images: string[];
  description: string;
  approved: boolean;
  needsMetadata: boolean;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  imageDir: string;
  description: string;
};
