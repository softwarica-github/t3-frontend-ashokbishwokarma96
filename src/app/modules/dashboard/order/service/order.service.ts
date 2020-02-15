import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OrderAdapter } from '../adapter/order.adapter';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from '../model/order.model';

@Injectable()
export class OrderService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer '+localStorage.getItem('username') })
  };

  url:string="http://localhost:3000/order/"


  private message= new BehaviorSubject(['']);
  public getMessage=this.message.asObservable();
    constructor(
      private http: HttpClient,
      private adapter: OrderAdapter) { }
  
      get(): Observable<any> {
        return this.http.get(this.url).pipe(
          map((data: any[]) => {
            return data['order'].map((item: any) => this.adapter.adapt(item));
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
  

