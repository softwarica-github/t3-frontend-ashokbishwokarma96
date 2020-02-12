import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductAdapter } from '../adapter/product.adapter';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/product.model';

@Injectable()
export class ProductService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  url:string="http://localhost:3000/products/";

  private message= new BehaviorSubject(['']);
  public getMessage=this.message.asObservable();
    constructor(
      private http: HttpClient,
      private adapter: ProductAdapter) { }
  
      get(): Observable<any> {
        return this.http.get(this.url).pipe(
          map((data: any[]) => {
            return data.map((item: any) => this.adapter.adapt(item));
        })
      );
    }
    add(data:any): Observable<Product> {
      return this.http.post(this.url, data)
          .pipe(
              map((data: any) => {console.log(data); return data})
          );

    }

    getByID(id: string): Observable<any> {

      let uri=this.url+id;
      return this.http.get(uri).pipe();

    }
    
    update(data:any,id:any): Observable<any> {

      return this.http.patch(this.url+id, data).pipe();

    }
    
    delete(id: string): Observable<any> {

      let uri=this.url+id;
       return this.http.delete(uri).pipe();

    }

    setMessage(message):void{

      this.message.next(message);

  }
}
  

