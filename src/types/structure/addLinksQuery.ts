import type {Priority} from "./priority.ts";

export interface AddLinksQuery {
    assignJobID?: boolean | null
    autoExtract?: boolean | null
    autostart?: boolean | null
    dataURLs?: string[] | null
    deepDecrypt?: boolean | null
    destinationFolder?: string | null
    downloadPassword?: string | null
    extractPassword?: string | null
    links?: string | null
    overwritePackagizerRules?: boolean | null
    packageName?: string | null
    priority?: Priority | null
    sourceUrl?: string | null
}