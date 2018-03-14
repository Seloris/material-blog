import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Post } from '../models/post';

@Injectable()
export class AppDataService {

  private currentPostTitle = new BehaviorSubject<string>(null);
  public $currentPostTitle = this.currentPostTitle.asObservable();

  setNewPost(post: Post) {
    this.currentPostTitle.next(post.title);
  }
}
