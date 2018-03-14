import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { AppDataService } from './services/app-data.service';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('scrollable') scrollable: ElementRef;

  isSearchOpen: boolean;
  searchText: string;
  postTitle: string;

  isPostTitleVisible: boolean;

  constructor(private appDataService: AppDataService, private scrollDispatcher: ScrollDispatcher) { }

  ngOnInit() {
    this.appDataService.$currentPostTitle.subscribe(title => {
      this.postTitle = title;
    });
  }

  showSearch() {
    this.isSearchOpen = true;
    this.searchInput.nativeElement.focus();
  }

  onContentScroll(event) {
    const { scrollTop } = this.scrollable.nativeElement;
    this.isPostTitleVisible = scrollTop >= 60;
  }

  hideSearch() {
    this.isSearchOpen = false;
    this.searchText = '';
  }
}
