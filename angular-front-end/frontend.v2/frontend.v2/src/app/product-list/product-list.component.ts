import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Product, products } from '../product';
import { ApiService } from '../service/api.service';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    

    public productList : any ;
    constructor(private api : ApiService, private cartService : CartService) {}
   
    ngOnInit(): void {
        this.api.getProduct()
        .subscribe(res=>{
            this.productList = res;

            this.productList.forEach((a:any) => {
                Object.assign(a,{quantity:1, total:a.price});
                
            });
        }) 
    }
addtocart(item : any){
    this.cartService.addtoCart(item);    

}


    share() {
        window.alert('This product has been shared!');
    }
}



