export interface SubscriptionResponse {
    exclusions?: string[] | null
    maxKeepalive?: number | null
    maxPolltimeout?: number | null
    subscribed?: boolean | null
    subscriptionid?: number | null
    subscriptions?: string[] | null
}