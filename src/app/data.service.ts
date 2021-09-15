import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  firstClick() {
    return console.log('clicled');
  }

  // tslint:disable-next-line:typedef
  getBook() {
    console.log('book');
    return this.http.get('http://localhost:10888/book');
  }

  // tslint:disable-next-line:typedef
  deleteBook() {
    console.log('delete');
    return this.http.delete('http://localhost:10888/delete');
  }
}
