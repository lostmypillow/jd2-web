import type {AbstractType} from "./abstractType.ts";

export interface Plugin {
    abstractType?: AbstractType | null
    className?: string | null
    defaultValue?: unknown
    displayName?: string | null
    docs?: string | null
    enumLabel?: string | null
    enumOptions?: string[][] | null
    interfaceName?: string | null
    key?: string | null
    pattern?: string | null
    storage?: string | null
    type?: string | null
    value?: unknown
    version?: string | null
}