import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MdEntityBaseComponent } from '../md-entity-base.component';
import { MdText } from '@selo/md';

@Component({
    selector: 'selo-md-text',
    templateUrl: './md-text.component.html',
    styleUrls: ['./md-text.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdTextComponent extends MdEntityBaseComponent<MdText> {

}
