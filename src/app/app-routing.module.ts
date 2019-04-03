import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { BooksContainerComponent } from './Components/books-container/books-container.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'BookLibrary',component:BooksContainerComponent},
  {path:'AddBook',component:BookDetailsComponent},
  {path:'ShowBook/:id',component:BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
