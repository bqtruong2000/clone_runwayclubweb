import { createAction, props } from '@ngrx/store';
import { ArticleModel } from 'src/app/models/article.model';

export const getPerginate = createAction(
  '[Article] Get Perginate',
  props<{ page: number; itemPerPage: number }>()
);
export const getPerginateSuccess = createAction(
  '[Article] Get Peginate Success',
  props<{ article: ArticleModel[] }>()
);
export const getPerginateFailure = createAction(
  '[Article] Get Peginate Failure',
  props<{ error: string }>()
);
