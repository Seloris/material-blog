import { Input } from '@angular/core';
import { MdEntity, IMdEntity } from '@selo/markdown';

export abstract class MdEntityBaseComponent<T extends IMdEntity> {
    @Input() entity: T;
}
