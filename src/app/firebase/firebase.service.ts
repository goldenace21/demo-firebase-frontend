import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../class/product";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private httpClient: HttpClient) { }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL + '/api/product');
  }

  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(API_URL + '/api/product', product);
  }
}
