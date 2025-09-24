// app/data/products.ts
export type Product = {
  id: number;
  image: string;
  size: string;
  name: string;
  price: string; // keep currency string to match your home page
  originalPrice: string;
};

export const products: Product[] = [
  {
    id: 1,
    image: "/wooden-pressed-flaxseed-oil-bottle-with-yellow-oil.png",
    size: "1 LITRE",
    name: "Jeevan Shailee - Pure Home Made Cow Ghee",
    price: "₹1550",
    originalPrice: "₹1950",
  },
  {
    id: 2,
    image: "/Joint-Care.png",
    size: "150 GM",
    name: "Jeevan Shailee - Joint Care",
    price: "₹899",
    originalPrice: "₹1060",
  },
  {
    id: 3,
    image: "/wooden-pressed-almond-oil-bottle-with-golden-oil-a.jpg",
    size: "150 GM",
    name: "Jeevan Shailee - Bye Sugar",
    price: "₹499",
    originalPrice: "₹680",
  },
  {
    id: 4,
    image: "/Mardana-power.png",
    size: "100 GM",
    name: "Jeevan Shailee - Mardana Power",
    price: "₹999",
    originalPrice: "₹1800",
  },
  {
    id: 5,
    image: "/piles-care.png",
    size: "50 GM",
    name: "Jeevan Shailee - Piles Relief",
    price: "₹799",
    originalPrice: "₹1060",
  },
  {
    id: 6,
    image: "/shetal-churan.png",
    size: "150 GM",
    name: "Jeevan Shailee - Shetla Churan",
    price: "₹499",
    originalPrice: "₹680",
  },
  {
    id: 7,
    image: "/vain-care.png",
    size: "100 GM",
    name: "Jeevan Shailee - Vain Care",
    price: "₹499",
    originalPrice: "₹750",
  },
  {
    id: 8,
    image: "/Shakti-Chyawanprash.png",
    size: "1000 GM",
    name: "Jeevan Shailee - Shakti Chyawanprash",
    price: "₹850",
    originalPrice: "₹1250",
  },
];
