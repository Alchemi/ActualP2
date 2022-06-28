import { Component, OnInit } from "@angular/core";
import { CartService } from "../service/cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public products : any = [];
public grandTotal !: number;

//this might be stupid delete comma in component and lines15-17 and 21  if needed
checkoutForm = this.formBuilder.group({
    name: "",
    address: "",
    email:""
    
})

constructor(private cartService : CartService,
    private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void{
        this.cartService.getProducts()
        .subscribe(res=>{
            this.products = res;
            this.grandTotal = this.cartService.getTotalPrice();
        })
    }     
    removeItem(item: any){
        this.cartService.removeCartItem(item);
        
    }
    emptycart(){
        this.cartService.removeAllCart();
    }
    purchase(){
        console.warn('Congratulations! Please check your email for purchase confirmation!')
    }
//this also might be stupid 39-44
onSubmit(): void{
    this.cartService.pushOrder(this.products);
    this.products = this.cartService.removeAllCart();
    window.alert("Your order has been placed. Thank you for your money <3");
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();

}
onCheckout(products:any):void{
    this.cartService.pushOrder(this.products);
    this.emptycart();
}

}