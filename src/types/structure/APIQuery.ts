export interface APIQuery<V = unknown> {
    empty?: boolean | null
    forNullKey?: V | null
    maxResults?: number | null
    startAt?: number | null
}