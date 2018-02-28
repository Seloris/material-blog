import { IMdEntity } from './md-entities';

export class MdDocument {
    entities: IMdEntity[] = [];

    public pushEntity(entity: IMdEntity) {
        this.entities.push(entity);
    }
}