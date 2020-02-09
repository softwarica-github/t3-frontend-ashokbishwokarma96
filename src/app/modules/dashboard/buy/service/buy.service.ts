import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BuyAdapter } from '../adapter/buy.adapter';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Buy } from '../model/buy.model';

@Injectable()
export class BuyService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  url:string="http://localhost:3000/product";
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
  

    setMessage(message):void{
      this.message.next(message);
          
  }
}
  

