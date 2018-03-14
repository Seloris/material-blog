import { NavService } from './../../services/nav.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { PostPreview } from '../../models/post-preview';

@Component({
    selector: 'selo-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
    posts: PostPreview[];

    constructor(private blogService: BlogService, private navService: NavService) { }

    ngOnInit() {
        this.blogService.getPostPreviews().subscribe(posts => {
            this.posts = posts;
        });
    }

    goToPost(post: PostPreview) {
        this.navService.goToPost(post.url);
    }
}
