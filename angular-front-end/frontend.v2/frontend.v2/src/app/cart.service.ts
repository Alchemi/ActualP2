//DO NOT USE DO NOT USE DO NOT USE
//this is COMPLETE buttcheeks.


import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
    providedIn: 'root'
})
export class CartService {
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

//im testing the page again. i think i fucking broke it 
//// this is  BUTTCHEEKS. MIGHT DELETE.....NO I WILL DELETE I JUST NEED TO TALK TO FRIENDS TO MAKE SURE OK