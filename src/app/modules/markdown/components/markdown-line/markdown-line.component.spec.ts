import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownLineComponent } from './markdown-line.component';

describe('MarkdownLineComponent', () => {
  let component: MarkdownLineComponent;
  let fixture: ComponentFixture<MarkdownLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
