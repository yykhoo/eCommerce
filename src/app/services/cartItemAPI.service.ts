//https://localhost:44335/gateway/Cart
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartItem } from '../class/cartItem';

@Injectable()
export class cartAPIService
{
    constructor(private httpclient: HttpClient){}

    // addCartItems(cartId: number): Observable<any>
    addCartItems(cartItem: CartItem): Observable<any>
    {
        var linkId = "https://localhost:44335/gateway/cartitem";
        return this.httpclient.post<CartItem>(linkId,cartItem);
    }
    updateCartItem(cartItem: CartItem): Observable<any>
    {
        var linkId = "https://localhost:44335/gateway/cartitem";
        return this.httpclient.put<CartItem>(linkId,cartItem);
    }
    getCartItem(productId: number): Observable<any>
    {
        var linkId = "https://localhost:44335/gateway/cartitem/ProductId/" + productId;
        return this.httpclient.get(linkId);
    }
    getCartItems(cartId: number): Observable<any>
    {
        cartId = 1; //testing - to be updated as per user
        var linkId = "https://localhost:44335/gateway/cartitem/CartId/" + cartId;
        return this.httpclient.get(linkId);
    }
    getCartbyId(userId: number): Observable<any>
    {
        userId = 1; //testing - to be updated as per user
        var linkId = "https://localhost:44335/gateway/cart/id/" + userId;
        return this.httpclient.get(linkId);
    }
}