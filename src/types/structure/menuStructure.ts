import type {MenuStructureType} from "./menuStructureType.ts";

export interface MenuStructure {
    children?: MenuStructure[] | null
    icon?: string | null
    id?: string | null
    name?: string | null
    type?: MenuStructureType | null
}