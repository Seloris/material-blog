import { Post } from './../../models/post';
import { NavService } from './../../services/nav.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { PostPreview } from '../../models/post-preview';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'selo-post-page',
    templateUrl: './post-page.component.html',
    styleUrls: ['./post-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostPageComponent implements OnInit {
    post: Post;

    constructor(private blogService: BlogService, private route: ActivatedRoute, private cdRef: ChangeDetectorRef) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.fetchPost(params['postUrl']);
        });
    }

    private fetchPost(postUrl: string) {
        this.blogService.getPost(postUrl).subscribe(post => {
            this.post = post;
            this.cdRef.markForCheck();
        });
    }
}
