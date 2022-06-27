import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CartService } from "../cart.service";
import { Product } from "../service/product.service";


@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
    public product : any = [];
    public grandTotal !: number;
    constructor(private cartService : CartService) { }
        
    ngOnInit(): any {
        
    }
    }

/*export class CartComponent {

    items = this.cartService.getItems();

    checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
    });

    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder,
    ) { }

    onSubmit(): void {
        //process checkout data
        this.items=this.cartService.clearCart();
        console.warn('Your order has been submitted', this.checkoutForm.value);
        this.checkoutForm.reset();
        
    }

} */