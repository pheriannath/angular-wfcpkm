import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { of, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Book } from "./books.model";

@Injectable({ providedIn: "root" })
export class GoogleBooksService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Array<Book>> {
    return this.http
      .get<{ items: Book[] }>(
        "https://www.googleapis.com/books/v1/volumes?maxResults=20&orderBy=relevance&q=neil%20gaiman"
      )
      .pipe(map(books => books.items || []));
  }
}
