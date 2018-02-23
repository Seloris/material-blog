export class MarkdownManager {
    private lines: string[] = [];
    private mdDocument: MdDocument = new MdDocument();

    private convertMarkdownToArray(md: string): string[] {
        if (!md) {
            return [];
        }

        return md.split('\n');
    }

    public buildDocument(markdownAsString: string) {
        const lines = this.convertMarkdownToArray(markdownAsString);
        this.buildDocumentFromLines(lines);
        return this.mdDocument;
    }


    private buildDocumentFromLines(lines: string[]) {
        let entityBuilt: MdMultiLineEntity = null;
        // https://jsfiddle.net/crkum8mL/19/ test ing
        lines.forEach((line: string, i: number) => {
            if (entityBuilt) {
                entityBuilt.pushContent(line);

                if (entityBuilt.isComplete) {
                    this.mdDocument.pushEntity(entityBuilt);
                    entityBuilt = null;
                }

            } else {
                const newEntity = this.mdEntityFactory(line);

                if (newEntity.isComplete) {
                    this.mdDocument.pushEntity(newEntity);
                } else {
                    // currently, only multiline can be incomplete
                    entityBuilt = <MdMultiLineEntity>newEntity;
                }
            }
        });
    }

    private mdEntityFactory(line: string): IMdEntity {
        if (line.startsWith('#')) {
            return new MdHeader(line);
        }

        if (line.startsWith('```')) {
            return new MdCode(line);
        }

        return new MdText(line);

    }
}



export class MdDocument {
    entities: IMdEntity[] = [];

    public pushEntity(entity: IMdEntity) {
        this.entities.push(entity);
    }
}

export enum MdEntityTypeEnum {
    Text,
    Header,
    Code
}

export interface IMdEntity {
    isComplete: boolean;
    type: MdEntityTypeEnum;
    content: string | string[];
    getCleanedContent(): string | string[];
}

export abstract class MdEntity<T extends string | string[]> implements IMdEntity {
    public isComplete: boolean;
    abstract type: MdEntityTypeEnum;
    constructor(public content: T) { }

    abstract getCleanedContent(): T;

}

export abstract class MdMultiLineEntity extends MdEntity<string[]> {
    constructor(content: string[]) {
        super(content);
    }

    pushContent(line: string) {
        this.content.push(line);
        this.isComplete = this.isEndingLine(line);
    }

    abstract isEndingLine(line: string): boolean;
}

export abstract class MdSingleLineEntity extends MdEntity<string> {
    constructor(content: string) {
        super(content);
        this.isComplete = true;
    }
}


export class MdText extends MdSingleLineEntity {
    type = MdEntityTypeEnum.Text;

    constructor(content: string) {
        super(content);
    }

    getCleanedContent(): string {
        return this.content;
    }
}

export class MdHeader extends MdText {
    type = MdEntityTypeEnum.Header;
    level = 0;

    constructor(content: string) {
        super(content);
        const limit = Math.min(content.length, 5);
        while (this.level < limit) {
            if (content[this.level] !== '#') {
                break;
            }

            this.level++;
        }
    }
    getCleanedContent(): string {
        return this.content.substring(this.level);
    }
}


// Currently only endling the multi line syntax
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
        return line.endsWith('```');
    }
}
