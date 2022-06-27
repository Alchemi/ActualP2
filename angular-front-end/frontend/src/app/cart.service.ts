import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Product } from './models/products';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    getProduct() {
        throw new Error("Method not implemented.");
    }
    getTotalPrice(): number {
        throw new Error("Method not implemented.");
    }
    items: Product[] = [];
    constructor(
        private http: HttpClient
    ) { }

    addToCart(product: Product) {
        this.items.push(product);
    }
    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }

    getShippingPrices() {
        return this.http.get<{type: String, price: number} []>
        ('/assets/shipping.json');
    }

}