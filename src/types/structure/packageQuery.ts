export interface PackageQuery {
    bytesLoaded?: boolean | null
    bytesTotal?: boolean | null
    childCount?: boolean | null
    comment?: boolean | null
    enabled?: boolean | null
    eta?: boolean | null
    finished?: boolean | null
    hosts?: boolean | null
    maxResults?: number | null
    packageUUIDs?: number[] | null
    priority?: boolean | null
    running?: boolean | null
    saveTo?: boolean | null
    speed?: boolean | null
    startAt?: number | null
    status?: boolean | null
}