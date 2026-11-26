import type {JsonMap} from "./jsonMap.ts";

export interface Account {
    enabled?: boolean | null
    errorString?: string | null
    errorType?: string | null
    hostname?: string | null
    infoMap?: JsonMap | null
    trafficLeft?: number | null
    trafficMax?: number | null
    username?: string | null
    uuid?: number | null
    valid?: boolean | null
    validUntil?: number | null
}