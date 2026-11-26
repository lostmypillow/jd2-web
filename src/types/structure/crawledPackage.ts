import type {JsonMap} from "./jsonMap.ts";
import type {Priority} from "./priority.ts";

export interface CrawledPackage {
    bytesTotal?: number | null
    childCount?: number | null
    comment?: string | null
    downloadPassword?: string | null
    enabled?: boolean | null
    hosts?: string[] | null
    name?: string | null
    offlineCount?: number | null
    onlineCount?: number | null
    priority?: Priority | null
    saveTo?: string | null
    tempUnknownCount?: number | null
    unknownCount?: number | null
    uuid?: number | null
    infoMap?: JsonMap | null
}