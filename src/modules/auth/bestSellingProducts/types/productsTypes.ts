export type ProductTypes = {
  id: number;
  src: string;
  alt: string;
  title: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
};

export interface CartItem extends ProductTypes {
  qty: number;
  priceNumber: number;
}
