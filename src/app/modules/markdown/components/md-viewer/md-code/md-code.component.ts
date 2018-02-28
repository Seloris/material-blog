import { Component, ChangeDetectionStrategy, Input, ViewChild, ElementRef, OnChanges, AfterViewChecked } from '@angular/core';
import { MdEntityBaseComponent } from '../md-entity-base.component';
import { MdCode } from '@selo/md';

declare var hljs: any;

@Component({
    selector: 'app-md-code',
    templateUrl: './md-code.component.html',
    styleUrls: ['./md-code.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdCodeComponent extends MdEntityBaseComponent<MdCode> implements AfterViewChecked {
    @ViewChild('codeRef') codeRef: ElementRef;

    ngAfterViewChecked() {
        if (this.codeRef != null) {
            hljs.highlightBlock(this.codeRef.nativeElement);
        }
    }
}
