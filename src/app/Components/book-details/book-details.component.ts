import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../Entities/Book';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent implements OnInit {
  @Input() CurrentBook: Book;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  isEdit: boolean;
  isNew: boolean;
  isShow:boolean;
  constructor(private router: Router, public service: BooksService) {
    if (this.router.url.indexOf("AddBook") > 0) {
      this.isNew = true;
      this.CurrentBook = { Id: 0, Title: '', Author: '', PublishingDate: null } as Book;
    }
    if (this.router.url.indexOf("ShowBook") > 0) {
      this.isShow = true;
    }
  }

  ngOnInit() {
  }

  deleteItem(id) {
    this.delete.emit(id);
  }

  saveIfNew() {
    if (this.isNew) {

      this.service.addBook(this.CurrentBook.Title, this.CurrentBook.Author, this.CurrentBook.PublishingDate);
      this.router.navigate(['/BookLibrary']);
    }
  }

}
