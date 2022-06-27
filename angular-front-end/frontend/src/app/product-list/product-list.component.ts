
import { Component, OnInit, } from '@angular/core';
import { CartService } from '../cart.service';
import { Product, products } from '../models/products';



@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    productList: any;
    filterCategory: any; 
    CartService: any;

    ngOnInit(): void {
        this.CartService.getProduct(type)
       // this.api.getProduct()
        .subscribe((res: any)=>{
          this.productList = res;
          this.filterCategory = res;
          this.productList.forEach((a:any) => { 
            if(a.type ==="figures" || a.type ==="manga"){
              a.type = "videos"
            }
            });
        });



        function type(type: any) {
            throw new Error('Function not implemented.');
        }
    }
}
       // function type(type: any) {
         //   throw new Error('Function not implemented.');
        //}
        //filter(type:string) {
        //this.filterCategory = this.productList
       // .filter((a:any)=>{
       // if(a.type == type || type ==''){
          //  return a;
         // }
       // })
      //}
        //  }
        //}//
    




    //public productlist: any;
    //constructor(private api: apiservice, private cartservice: cartservivce) {}
    //ngoninit(): void {
        //this.api.getproduct()
        //.subscribe(res=>{
            //this.productlist = res;
            //this.productlist.foreach((a:any)=> {
                //object.assign(a,{quantity:1, total:a.price});
            //})
        //})
    //}
   // b4---->  Product = products;
   //addtocart(item : any){
    //this.cartservice.addtocart(item); 

   


   














              //function subscribe(arg0: (res: any) => void) {
                //  throw new Error('Function not implemented.');
              //}

              //function subscribe(arg0: (res: any) => void) {
                //  throw new Error('Function not implemented.');
             // }

              //function type(type: any, string: any) {
                //  throw new Error('Function not implemented.');
              //}
// product alerts. how and would we like to do that?? things dont go here, this is just my thinks


