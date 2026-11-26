import type {AbstractType} from "./abstractType.ts";

export interface AdvancedConfigAPIEntry {
    abstractType?: AbstractType | null
    defaultValue?: unknown
    docs?: string | null
    enumLabel?: string | null
    enumOptions?: string[][] | null
    interfaceName?: string | null
    key?: string | null
    storage?: string | null
    type?: string | null
    value?: unknown
}