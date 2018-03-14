import { MdMultiLineEntity, MdEntityTypeEnum } from './md-entities';
import { RegexConstants } from '../../regex.constants';

// Currently only handling the multi line syntax
export class MdCode extends MdMultiLineEntity {
    type = MdEntityTypeEnum.Code;
    language: string;
    title: string;

    constructor(firstLine: string) {
        super([firstLine]);
        this.extractData(firstLine);
    }

    getCleanedContent(): string[] {
        return this.content.slice(1, -1);
    }

    extractData(firstLine: string) {
        const match = RegexConstants.extractCodeData.exec(firstLine);
        if (match) {
            if (match.length >= 2) {
                this.language = match[1];
                if (match.length >= 3) {
                    this.title = match[2];
                }
            }

        }
    }

    isEndingLine(line: string) {
        return line.startsWith('```');
    }
}
