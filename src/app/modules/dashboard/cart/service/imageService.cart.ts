import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class CartImageService {

    constructor(private http: HttpClient) {}
  
    public uploadImage(image: File): Observable<any> {
      const formData = new FormData();
      formData.append('image', image);
      console.log(formData);
      return this.http.post('http://localhost:3000/upload', formData);
    }
  }