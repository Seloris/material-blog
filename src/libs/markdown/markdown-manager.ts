export class MarkdownManager {
    private lines: string[] = [];
    public mdDocument: MdDocument = new MdDocument();

    private convertMarkdownToArray(md: string): string[] {
        if (!md) {
            return [];
        }

        return md.split('\n');
    }

    public buildDocument(markdownAsString: string) {
        const lines = this.convertMarkdownToArray(markdownAsString);
        this.buildDocumentFromLines(lines);
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

    private mdEntityFactory(line: string): MdEntity {
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
    entities: MdEntity[] = [];

    public pushEntity(entity: MdEntity) {
        this.entities.push(entity);
    }
}

export abstract class MdEntity {
    public isComplete: boolean;
    abstract getFormattedContent(): string;
}

export abstract class MdMultiLineEntity extends MdEntity {
    constructor(protected content: string[]) {
        super();
    }

    pushContent(line: string) {
        this.content.push(line);
        this.isComplete = this.isEndingLine(line);
    }

    abstract isEndingLine(line: string): boolean;
}

export abstract class MdSingleLineEntity extends MdEntity {
    constructor(protected content: string) {
        super();
        this.isComplete = true;
    }
}


export class MdText extends MdSingleLineEntity {
    getFormattedContent(): string {
        return this.content;
    }

    constructor(content: string) {
        super(content);
    }
}

export class MdHeader extends MdText {
    getFormattedContent(): string {
        return this.content;
    }
}

export class MdCode extends MdMultiLineEntity {
    getFormattedContent(): string {
        return this.content.join('-JOIN-');
    }

    constructor(firstLine: string) {
        super([firstLine]);
        this.isComplete = this.isEndingLine(firstLine);
    }

    isEndingLine(line: string) {
        return line.endsWith('```');
    }
}
