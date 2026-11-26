import type {AvailableLinkState} from "./availableLinkState.ts";

export interface LinkStatus {
    host?: string | null
    linkCheckID?: string | null
    name?: string | null
    size?: number | null
    status?: AvailableLinkState | null
    url?: string | null
}