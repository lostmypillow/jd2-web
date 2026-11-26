import type {JsonMap} from "./jsonMap.ts";
import type {Priority} from "./priority.ts";

export interface FilePackage {
    activeTask?: string | null
    bytesLoaded?: number | null
    bytesTotal?: number | null
    childCount?: number | null
    comment?: string | null
    downloadPassword?: string | null
    enabled?: boolean | null
    eta?: number | null
    finished?: boolean | null
    hosts?: string[] | null
    name?: string | null
    priority?: Priority | null
    running?: boolean | null
    saveTo?: string | null
    speed?: number | null
    status?: string | null
    statusIconKey?: string | null
    uuid?: number | null
    infoMap?: JsonMap | null
}