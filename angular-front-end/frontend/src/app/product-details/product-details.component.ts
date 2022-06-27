import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../models/products';

import { CartService } from '../cart.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    addToCart(product: Product) {
        this.cartService.addToCart(product);
        window.alert("you have added this item to your shopping cart!");
    
    }

    product: Product | undefined;
    
    constructor(
        private route: ActivatedRoute,
        private cartService: CartService
        ) { }
    ngOnInit(): void {
    //get the product id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //find the product that correspond w the id that is in the route
    this.product = products.find(product => product.Id === productIdFromRoute);
    }
}
