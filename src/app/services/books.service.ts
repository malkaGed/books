import { Injectable } from '@angular/core';
import {Book} from '../Entities/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksList;


  constructor() { 
    this.booksList=[
      {Id:1, Title:'book 1', Author:'moshe gold', PublishingDate:new Date("08/17/2019")},
      {Id:2, Title:"book 2", Author:"moshe gold", PublishingDate:new Date("04/05/2019")},
      {Id:3, Title:"book 3", Author:"moshe gold", PublishingDate:new Date("08/03/2018")},
      {Id:4, Title:"book 4", Author:"moshe gold", PublishingDate:new Date("04/01/2019")},
      {Id:5, Title:"book 5", Author:"moshe gold", PublishingDate:new Date("01/22/2019")},
      {Id:6, Title:"book 6", Author:"moshe gold", PublishingDate:new Date("02/28/2019")}
   ];
  }

  getBooks()
  {
     return this.booksList;
  }

  addBook(title,author,publishingDate)
  {
    let newId= this.booksList.length;
    let newBook={Id:newId, Title:title, Author:author, PublishingDate:publishingDate};

    let found =this.booksList.some(el => el.Title === title);
    if(!found)
        this.booksList.push(newBook);
    else
      alert('הספר קיים במערכת');
  }

  delete(id)
  {
    for(let i=0;i<this.booksList.length;i++)
    {
      if(this.booksList[i].Id==id)
        this.booksList.splice(i, 1);
    }
  }
}
