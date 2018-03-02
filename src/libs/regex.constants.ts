export namespace RegexConstants {
    export const emphasis = /([\*|_]+)(.*?)[\*|_]+/g;
    export const strike = /~~(.*?)~~/g;


    export const isList = /^(\s*)[-|*]/;
    export const isHeader = /^(#*)/;

    export const cleanList = /^(\s*[-|*]\s*)/;
    export const cleanHeader = /^(#*\s*)/;

    export const extractCodeData = /```\s+([\S]+)[\s*]?(.*)/;
}
