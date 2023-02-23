import { createReducer, on, State } from '@ngrx/store';
import { ArticleState } from '../states/article.state';
import * as ArticleAction from '../actions/article.action';

const initialState: ArticleState = {
  article: [],
  isSuccess: true,
  error: '',
  loading: false,
};

export const articleReducer = createReducer(
  initialState,
  on(ArticleAction.getPerginate, (state) => ({ ...state, loading: true })),
  on(ArticleAction.getPerginateSuccess, (state, action) => ({
    ...state,
    article: action.article,
    loading: false,
  })),
  on(ArticleAction.getPerginateFailure, (state, action) => ({
    ...state,
    loading: true,
    isSuccess: false,
  }))
);
