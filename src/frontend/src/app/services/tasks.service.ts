
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL = 'http://localhost:4000/api/products';
  constructor(private http: HttpClient) { }

  uploadIt(product: any) {

    return this.http.post<any>(this.URL + "/", product)

  }

  getProduct() {

    return this.http.get<any>(this.URL + "/")

  }

}