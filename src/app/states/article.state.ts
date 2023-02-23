import { ArticleModel } from '../models/article.model';

export interface ArticleState {
  article: ArticleModel[];
  isSuccess: boolean;
  error: string;
  loading: boolean;
}
