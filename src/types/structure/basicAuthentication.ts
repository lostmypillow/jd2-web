import type {BasicAuthenticationType} from "./basicAuthenticationType.ts";

export interface BasicAuthentication {
    created?: number | null
    enabled?: boolean | null
    hostmask?: string | null
    id?: number | null
    lastValidated?: number | null
    password?: string | null
    type?: BasicAuthenticationType | null
    username?: string | null
}