import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Headers': 'Content-type',
    'Access-Control-Allow-Methods': 'Get',
    'Access-Control-Allow-Origin' : '*'
  })
}
@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any=[]
  public productList = new BehaviorSubject<any>([]);
  public product_List :any;
  constructor(private http:HttpClient, private router:Router) { }
  getProducts(){
   return this.productList.asObservable();

  }
  pushOrder(products:any){
    console.log(products);
    let response= this.http.post<any>("http://localhost:3000/animeSQL/ordercontroller", products, httpOptions)
      .subscribe({
        next:(_v:1) => this.router.navigate(['']),
        error: (_e:0)=> console.error("who knows"),
        complete: () => console.log("Order successful")
      })
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
  }
    removeAllCart(){
      this.cartItemList = []
      this.productList.next(this.cartItemList);
    }
  }

