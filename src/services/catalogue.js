// Catalogue service — read helpers over the product/category data.
// Keep data access here so components/pages don't import raw data directly.

import { products, productById } from "../data/products.js";
import { categories, categoryById } from "../data/categories.js";

/** All products. */
export function getAllProducts() {
  return products;
}

/** All categories. */
export function getCategories() {
  return categories;
}

/** One product by id, or undefined. */
export function getProduct(id) {
  return productById[id];
}

/** One category by id, or undefined. */
export function getCategory(id) {
  return categoryById[id];
}

/** Products in a category. */
export function getProductsByCategory(categoryId) {
  return products.filter((p) => p.category === categoryId);
}

/** Products in a subcategory (e.g. "belts"). */
export function getProductsBySubcategory(subcategory) {
  return products.filter((p) => p.subcategory === subcategory);
}

/** Products still missing real name/price/description. */
export function getProductsNeedingMetadata() {
  return products.filter((p) => p.needsMetadata);
}

/** Categories with their products attached. */
export function getCatalogue() {
  return categories.map((category) => ({
    ...category,
    products: getProductsByCategory(category.id),
  }));
}
