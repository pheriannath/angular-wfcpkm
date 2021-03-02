import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { selectBookCollection, selectBooks } from "./state/books.selectors";
import { retrievedBookList, addBook, removeBook } from "./state/books.actions";
import { increment, decrement, reset } from "./state/score.actions";
import { selectScore } from "./state/score.selectors";
import { GoogleBooksService } from "./book-list/books.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private booksService: GoogleBooksService, private store: Store) {}

  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));
  score$ = this.store.pipe(select(selectScore));

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe(Book => this.store.dispatch(retrievedBookList({ Book })));
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
