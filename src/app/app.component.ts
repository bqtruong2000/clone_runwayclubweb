import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ArticleState } from './states/article.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NewProject';
  article$: Observable<ArticleState>;

  constructor(private store: Store<{ article: ArticleState }>) {
    this.article$ = this.store.select('article');
  }
}
