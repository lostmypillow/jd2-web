export interface CrawledPackageQuery {
    availableOfflineCount?: boolean | null
    availableOnlineCount?: boolean | null
    availableTempUnknownCount?: boolean | null
    availableUnknownCount?: boolean | null
    bytesTotal?: boolean | null
    childCount?: boolean | null
    comment?: boolean | null
    enabled?: boolean | null
    hosts?: boolean | null
    maxResults?: number | null
    packageUUIDs?: number[] | null
    priority?: boolean | null
    saveTo?: boolean | null
    startAt?: number | null
    status?: boolean | null
}