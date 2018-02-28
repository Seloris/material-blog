import { Input } from '@angular/core';
import { MdEntity, IMdEntity } from '@selo/md';

export abstract class MdEntityBaseComponent<T extends IMdEntity> {
    @Input() entity: T;
}
