import type {LinkStatus} from "./linkStatus.ts";

import type {LinkCheckStatus} from "./linkCheckStatus.ts";

export interface LinkCheckResult {
    links?: LinkStatus[] | null
    status?: LinkCheckStatus | null
}