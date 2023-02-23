import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  url = 'http://social.runwayclub.dev/api/articles/';
  constructor(private httpClient: HttpClient) {}

  getArticle(page: number, itemPerPage: number) {
    return this.httpClient.get(
      `${this.url}latest?page=${page}&per_page=${itemPerPage}`
    );
  }
}
