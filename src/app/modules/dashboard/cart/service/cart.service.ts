import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartAdapter } from '../adapter/cart.adapter';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cart } from '../model/cart.model';

@Injectable()
export class CartService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer '+localStorage.getItem('username') },)
  };

  url:string="http://localhost:3000/cart/"

  private message= new BehaviorSubject(['']);
  public getMessage=this.message.asObservable();
    constructor(
      private http: HttpClient,
      private adapter: CartAdapter) { }
  
      get(): Observable<any> {
        return this.http.get(this.url).pipe(
          map((data: any[]) => {
            return data['cartProduct'].map((item: any) => this.adapter.adapt(item));
        })
      );
    }
  
    delete(id: string): Observable<any> {
      let uri=this.url+id;
       return this.http.delete(uri,this.httpOptions).pipe();
    }

    setMessage(message):void{
      this.message.next(message);
          
  }
}
  

