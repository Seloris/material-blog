import { Injectable } from '@angular/core';

@Injectable()
export class MarkdownService {

  getLines(md: string): string[] {
    if (!md) {
      return [];
    }

    return md.split('\n');
  }
}
