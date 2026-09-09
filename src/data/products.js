// Revolve product catalogue.
//
// Built from the APPROVED product images currently in the repo. Image paths are
// real; `name`, `price` and `description` are PLACEHOLDERS — set `needsMetadata`
// to false once real values are filled in. `price` is in minor units (cents);
// null means not yet priced.
//
// Branding images (public/images/revolve/branding) are brand marks, not
// products, so they are intentionally NOT in this catalogue.

/**
 * @typedef {Object} Product
 * @property {string} id           Stable slug id.
 * @property {string} name         Display name (placeholder until confirmed).
 * @property {string} category     Category id — see categories.js.
 * @property {string=} subcategory Optional finer grouping (e.g. "belts").
 * @property {number|null} price   Price in minor units (cents); null = unpriced.
 * @property {string} currency     ISO currency code.
 * @property {string} image        Primary image, public path.
 * @property {string[]} images     All images for this product, public paths.
 * @property {string} description  Short description (placeholder).
 * @property {boolean} approved    Image is approved for the catalogue.
 * @property {boolean} needsMetadata  Real name/price/description still pending.
 */

/** @type {Product[]} */
export const products = [
  // --- Shoes ---
  {
    id: "shoe-01",
    name: "Revolve Shoe 01",
    category: "shoes",
    price: null,
    currency: "USD",
    image: "/images/revolve/shoes/1000825611.jpg",
    images: ["/images/revolve/shoes/1000825611.jpg"],
    description: "Placeholder — confirm name, price and description.",
    approved: true,
    needsMetadata: true,
  },
  {
    id: "shoe-02",
    name: "Revolve Shoe 02",
    category: "shoes",
    price: null,
    currency: "USD",
    image: "/images/revolve/shoes/1000825614.jpg",
    images: ["/images/revolve/shoes/1000825614.jpg"],
    description: "Placeholder — confirm name, price and description.",
    approved: true,
    needsMetadata: true,
  },
  {
    id: "shoe-03",
    name: "Revolve Shoe 03",
    category: "shoes",
    price: null,
    currency: "USD",
    image: "/images/revolve/shoes/1000825617.jpg",
    images: ["/images/revolve/shoes/1000825617.jpg"],
    description: "Placeholder — confirm name, price and description.",
    approved: true,
    needsMetadata: true,
  },
  {
    id: "shoe-04",
    name: "Revolve Shoe 04",
    category: "shoes",
    price: null,
    currency: "USD",
    image: "/images/revolve/shoes/1000825620.jpg",
    images: ["/images/revolve/shoes/1000825620.jpg"],
    description: "Placeholder — confirm name, price and description.",
    approved: true,
    needsMetadata: true,
  },

  // --- Accessories: belts (folded in from the old belts folder) ---
  {
    id: "belt-01",
    name: "Revolve Belt 01",
    category: "accessories",
    subcategory: "belts",
    price: null,
    currency: "USD",
    image: "/images/revolve/accessories/1000825623.jpg",
    images: ["/images/revolve/accessories/1000825623.jpg"],
    description: "Placeholder — confirm name, price and description.",
    approved: true,
    needsMetadata: true,
  },
  {
    id: "belt-02",
    name: "Revolve Belt 02",
    category: "accessories",
    subcategory: "belts",
    price: null,
    currency: "USD",
    image: "/images/revolve/accessories/1000825625.jpg",
    images: ["/images/revolve/accessories/1000825625.jpg"],
    description: "Placeholder — confirm name, price and description.",
    approved: true,
    needsMetadata: true,
  },
  {
    id: "belt-03",
    name: "Revolve Belt 03",
    category: "accessories",
    subcategory: "belts",
    price: null,
    currency: "USD",
    image: "/images/revolve/accessories/1000825654.jpg",
    images: ["/images/revolve/accessories/1000825654.jpg"],
    description: "Placeholder — confirm name, price and description.",
    approved: true,
    needsMetadata: true,
  },

  // --- Accessories: other ---
  {
    id: "accessory-01",
    name: "Revolve Accessory 01",
    category: "accessories",
    price: null,
    currency: "USD",
    image: "/images/revolve/accessories/1000825656.jpg",
    images: ["/images/revolve/accessories/1000825656.jpg"],
    description: "Placeholder — confirm name, price and description.",
    approved: true,
    needsMetadata: true,
  },
  {
    id: "accessory-02",
    name: "Revolve Accessory 02",
    category: "accessories",
    price: null,
    currency: "USD",
    image: "/images/revolve/accessories/1000825657.jpg",
    images: ["/images/revolve/accessories/1000825657.jpg"],
    description: "Placeholder — confirm name, price and description.",
    approved: true,
    needsMetadata: true,
  },
];

export const productById = Object.fromEntries(products.map((p) => [p.id, p]));
