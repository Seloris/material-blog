export function cleanRegexMatch(content: string, regex: RegExp): string {
    const substr = regex.exec(content)[1].length;
    return content.substring(substr);
}
