import type {UnorderedList} from "./unorderedList.ts";

export interface AccountQuery {
    enabled?: boolean | null
    error?: boolean | null
    maxResults?: number | null
    startAt?: number | null
    trafficLeft?: boolean | null
    trafficMax?: boolean | null
    userName?: boolean | null
    uuidlist?: UnorderedList<number> | null
    valid?: boolean | null
    validUntil?: boolean | null
}