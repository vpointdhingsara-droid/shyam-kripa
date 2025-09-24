// app/lib/cart.ts
// Simple cart helper using localStorage and a custom "cart-updated" event.
// Stored shape: [{ id, name, price (number), qty }]

type CartItem = {
  id: string | number;
  name?: string;
  price: number; // numeric rupee amount (e.g. 1550)
  qty: number;
};

const STORAGE_KEY = "jeevan_cart_v1";

function parseCurrencyStringToNumber(priceStr: string | number) {
  if (typeof priceStr === "number") return priceStr;
  if (!priceStr) return 0;
  // remove non digits, except dot
  const digits = String(priceStr).replace(/[^\d.]/g, "");
  const n = Number.parseFloat(digits);
  return Number.isFinite(n) ? n : 0;
}

function readCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as CartItem[];
  } catch (e) {
    console.error("cart read error", e);
    return [];
  }
}

function writeCart(items: CartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error("cart write error", e);
  }
}

function dispatchCartUpdate(items?: CartItem[]) {
  const cart = items ?? readCart();
  const count = cart.reduce((s, it) => s + it.qty, 0);
  const total = cart.reduce((s, it) => s + it.qty * it.price, 0);
  const event = new CustomEvent("cart-updated", { detail: { count, total, items: cart } });
  window.dispatchEvent(event);
}

/**
 * addToCart(product, qty=1)
 * product must have { id, name?, price } where price can be string like "₹1550" or number 1550
 */
export function addToCart(product: { id: string | number; name?: string; price: string | number }, qty = 1) {
  if (typeof window === "undefined") return;
  const priceNumeric = parseCurrencyStringToNumber(product.price);
  if (!product.id) return;

  const items = readCart();
  const idx = items.findIndex((it) => String(it.id) === String(product.id));

  if (idx >= 0) {
    items[idx].qty += qty;
  } else {
    items.push({ id: product.id, name: product.name, price: priceNumeric, qty });
  }

  writeCart(items);
  dispatchCartUpdate(items);
}

/** returns total item count (sum of qty) */
export function getCartCount(): number {
  if (typeof window === "undefined") return 0;
  const items = readCart();
  return items.reduce((s, it) => s + it.qty, 0);
}

/** returns total price as number (e.g. 3250) */
export function getCartTotal(): number {
  if (typeof window === "undefined") return 0;
  const items = readCart();
  return items.reduce((s, it) => s + it.qty * it.price, 0);
}

/** clear cart (optional util) */
export function clearCart() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    dispatchCartUpdate([]);
  } catch (e) {
    console.error(e);
  }
}
