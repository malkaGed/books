import { Component, OnInit } from '@angular/core';
import{Book} from '../../Entities/Book';
import{BooksService} from '../../services/books.service'

@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html'
})
export class BooksContainerComponent implements OnInit {
   books:Book[];

  constructor(private service:BooksService) { 
    this.books=this.service.getBooks() as Book[];
  }

  ngOnInit() {
    
  }

  deleteItem(id)
  {
    this.service.delete(id);
  }

}
