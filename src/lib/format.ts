/** Format a price given in ZAR minor units (cents). Null = not yet priced. */
export function formatPrice(cents: number | null): string {
  if (cents == null) return "Price on request";
  return `R ${(cents / 100).toLocaleString("en-ZA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export const categoryLabel: Record<string, string> = {
  clothing: "Clothing",
  shoes: "Shoes",
  accessories: "Accessories",
};
