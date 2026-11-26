import type {JsonMap} from "./jsonMap.ts";
import type {Priority} from "./priority.ts";

export interface DownloadLink {
    addedDate?: number | null
    bytesLoaded?: number | null
    bytesTotal?: number | null
    comment?: string | null
    downloadPassword?: string | null
    enabled?: boolean | null
    eta?: number | null
    extractionStatus?: string | null
    finished?: boolean | null
    finishedDate?: number | null
    host?: string | null
    name?: string | null
    packageUUID?: number | null
    priority?: Priority | null
    running?: boolean | null
    skipped?: boolean | null
    speed?: number | null
    status?: string | null
    statusIconKey?: string | null
    url?: string | null
    uuid?: number | null
    infoMap?: JsonMap | null
}