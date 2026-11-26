/**
 * Query filter for crawled links.
 */
export interface CrawledLinkQuery {
    /** Whether to fetch link availability status. Defaults to true. */
    availability?: boolean | null
    /** Whether to include total bytes. Defaults to true. */
    bytesTotal?: boolean | null
    /** Optional comment filter. */
    comment?: boolean | null
    /** Whether link is enabled. Defaults to true. */
    enabled?: boolean | null
    /** Whether to include host info. Defaults to true. */
    host?: boolean | null
    /** Target job UUIDs. Pass `null` to target all jobs. */
    jobUUIDs?: number[] | null
    /** Maximum results to return. Pass `-1` or `null` for all results. */
    maxResults?: number | null
    /** Target package UUIDs. */
    packageUUIDs?: number[] | null
    /** Password requirement filter. */
    password?: boolean | null
    /** Priority filter. */
    priority?: boolean | null
    /** Pagination start offset. Defaults to 0. */
    startAt?: number | null
    /** Status filter. Defaults to true. */
    status?: boolean | null
    /** Whether to include URL. Defaults to true. */
    url?: boolean | null
    /** Variant ID filter. */
    variantID?: boolean | null
    /** Variant icon filter. */
    variantIcon?: boolean | null
    /** Variant name filter. */
    variantName?: boolean | null
    /** Variants filter. */
    variants?: boolean | null
}
