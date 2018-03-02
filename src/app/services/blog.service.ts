import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ArticlePreview } from '../models/article-preview';

@Injectable()
export class BlogService {
    getPreviews(): Observable<ArticlePreview[]> {
        const newArticles = [];
        for (let i = 0; i < 10; i++) {
            newArticles.push(
                {
                    title: 'Un article ' + i,
                    description: 'Une description',
                    date: new Date()
                });
        }

        return Observable.of(newArticles);
    }
}
