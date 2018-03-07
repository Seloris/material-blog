import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostPreview } from '../models/post-preview';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BlogService {
    constructor(private httpClient: HttpClient) { }
    getPostPreviews(): Observable<PostPreview[]> {
        const newPreviews: PostPreview[] = [];
        for (let i = 0; i < 10; i++) {
            newPreviews.push(
                {
                    id: i,
                    title: 'Un article #' + i,
                    summary: 'Un sommaire avec un peu de texte pour faire genre',
                    publicationDate: new Date(),
                    url: 'id-' + i
                });
        }

        return Observable.of(newPreviews);
    }

    getPost(postUrl: string): Observable<Post> {
        const post: Post = {
            id: 0,
            url: '',
            title: 'Un titre d\'article',
            summary: 'Un sommaire',
            publicationDate: new Date(),
            mdContent: '',
            tags: ['Angular', 'Gros Paquet']
        };

        return this.getFakeMd().flatMap(sampleMd => {
            post.mdContent = sampleMd;
            return Observable.of(post);
        });
    }

    getFakeMd(): Observable<string> {
        const path = 'assets/sample.md';
        return this.httpClient.get(path, { responseType: 'text' });
    }
}
