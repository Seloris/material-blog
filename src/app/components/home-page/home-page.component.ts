import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ArticlePreview } from '../../models/article-preview';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'selo-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  articles: ArticlePreview[];


  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPreviews().subscribe(articles => {
      this.articles = articles;
    });
  }

}
