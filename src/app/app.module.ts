import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { booksReducer } from "./state/books.reducer";
import { collectionReducer } from "./state/collection.reducer";
import { scoreReducer } from "./state/score.reducer";
import { StoreModule } from "@ngrx/store";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookCollectionComponent } from "./book-collection/book-collection.component";
import { ScoreComponent } from "./score/score.component";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer,
      score: scoreReducer
    }),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent,
    ScoreComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
