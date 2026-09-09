// Revolve product categories.
// `imageDir` is the public path prefix where that category's images live.

export const categories = [
  {
    id: "clothing",
    name: "Clothing",
    slug: "clothing",
    imageDir: "/images/revolve/clothing",
    description: "Apparel — the Revolve clothing line.",
  },
  {
    id: "shoes",
    name: "Shoes",
    slug: "shoes",
    imageDir: "/images/revolve/shoes",
    description: "Footwear from the Revolve collection.",
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    imageDir: "/images/revolve/accessories",
    description: "Belts and other Revolve accessories.",
  },
];

export const categoryById = Object.fromEntries(
  categories.map((c) => [c.id, c])
);
