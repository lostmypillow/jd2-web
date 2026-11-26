import type {JsonMap} from "./jsonMap.ts";

export interface PollingResult {
    eventData?: JsonMap | null
    eventName?: string | null
}