import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ArticleModel } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { ArticleState } from 'src/app/states/article.state';
import * as ArticleActions from '../../actions/article.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  article$: Observable<ArticleState>;
  constructor(
    private articleService: ArticleService,
    private articleStore: Store<{ article: ArticleState }>
  ) {
    this.article$ = this.articleStore.select('article');
    // this.articleService.getArticle(1, 2).subscribe((data) => {
    //   console.log(data);
    // });
  }

  ngOnInit(): void {
    this.articleStore.dispatch(
      ArticleActions.getPerginate({ page: 1, itemPerPage: 2 })
    );
  }
}
