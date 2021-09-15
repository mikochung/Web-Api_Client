import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  books: Object;

  constructor(private data: DataService) { }

  ngOnInit(){}
  

  // tslint:disable-next-line:typedef
  firstClick() {
    this.data.firstClick();
  }

  // tslint:disable-next-line:typedef
  getBook() {
    // this.data.getBook();
    this.data.getBook().subscribe(data => {
      this.books = data;
      console.log(this.books);
    });
  }

  // tslint:disable-next-line:typedef
  deleteBook() {
    this.data.deleteBook();
  }

}
