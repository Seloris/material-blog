import { MdCode } from './../../../../../../libs/markdown/markdown-manager';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MdEntityBaseComponent } from '../md-entity-base.component';

@Component({
    selector: 'app-md-code',
    templateUrl: './md-code.component.html',
    styleUrls: ['./md-code.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdCodeComponent extends MdEntityBaseComponent<MdCode> {
}
