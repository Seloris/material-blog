import { MdMultiLineEntity, MdEntityTypeEnum } from './md-entities';


// Currently only handling the multi line syntax
export class MdCode extends MdMultiLineEntity {
    type = MdEntityTypeEnum.Code;
    language: string;

    constructor(firstLine: string) {
        super([firstLine]);
        this.language = this.getLanguage(firstLine);
    }

    getCleanedContent(): string[] {
        return this.content.slice(1, -1);
    }

    getLanguage(firstLine: string) {
        const language = firstLine
            .substring(3)
            .trim();

        return language || 'not specified';
    }

    isEndingLine(line: string) {
        return line.startsWith('```');
    }
}