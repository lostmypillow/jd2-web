import type {LinkVariant} from "./linkVariant.ts";
import type {JsonMap} from "./jsonMap.ts";
import type {Priority} from "./priority.ts";
import type {AvailableLinkState} from "./availableLinkState.ts";

export interface CrawledLink {
    availability?: AvailableLinkState | null
    bytesTotal?: number | null
    comment?: string | null
    downloadPassword?: string | null
    enabled?: boolean | null
    host?: string | null
    name?: string | null
    packageUUID?: number | null
    priority?: Priority | null
    url?: string | null
    uuid?: number | null
    variant?: LinkVariant | null
    variants?: boolean | null
    infoMap?: JsonMap | null
    uniqueID?: number | null
}