
import { MdEntityTypeEnum, MdSingleLineEntity } from './md-entities';

export class MdText extends MdSingleLineEntity {
    type = MdEntityTypeEnum.Text;

    constructor(content: string) {
        super(content);
    }

    getCleanedContent(): string {
        return this.content;
    }
}


