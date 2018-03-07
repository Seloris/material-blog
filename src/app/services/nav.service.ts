import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class NavService {
    constructor(private router: Router) {
    }

    goToPost(postUrl: string): Promise<boolean> {
        return this.router.navigate([`/posts/${postUrl}`]);
    }
}
