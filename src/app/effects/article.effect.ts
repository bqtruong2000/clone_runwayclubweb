import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as ArticleAction from '../actions/article.action';
import { ArticleModel } from '../models/article.model';
import { ArticleService } from '../services/article.service';

@Injectable()
export class ArticleEffect {
  constructor(
    private action$: Actions,
    private articleService: ArticleService
  ) {}

  getArticles$ = createEffect(() =>
    this.action$.pipe(
      ofType(ArticleAction.getPerginate),
      switchMap((action) => {
        return this.articleService.getArticle(action.page, action.itemPerPage);
      }),
      map((response) => {
        return ArticleAction.getPerginateSuccess({
          article: <Array<ArticleModel>>response,
        });
      }),
      catchError((error) => {
        return of(ArticleAction.getPerginateFailure({ error: error.message }));
      })
    )
  );
}
