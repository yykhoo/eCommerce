import { Product } from './product';

export class CartItem {
    cartId: number;
    cartItemId: number;
    productId: number;
    quantity: number;
    dateCreated: Date;
    product: Product;
    totalPrice: number;
  }