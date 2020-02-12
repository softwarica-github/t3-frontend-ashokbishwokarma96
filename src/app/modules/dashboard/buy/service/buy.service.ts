import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BuyAdapter } from '../adapter/buy.adapter';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Buy } from '../model/buy.model';
import { Product } from '@dashboard/dashboard/product/model/product.model';

@Injectable()
export class BuyService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  url:string="http://localhost:3000/products/";
  urlfororder:string="http://localhost:3000/order/"
  urlfordelete="http://localhost:3000/cart/delete/"

  private message= new BehaviorSubject(['']);
  public getMessage=this.message.asObservable();
    constructor(
      private http: HttpClient,
      private adapter: BuyAdapter) { }
  
      get(): Observable<any> {
        return this.http.get(this.url).pipe(
          map((data: any[]) => {
            return data.map((item: any) => this.adapter.adapt(item));
        })
      );
    }

    add(data:any): Observable<Product> {
      return this.http.post(this.urlfororder, data)
          .pipe(
              map((data: any) => {console.log(data); return data})
          );

    }
  

    setMessage(message):void{
      this.message.next(message);
          
  }
}
  

