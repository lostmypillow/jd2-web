import type {MenuStructure} from "./menuStructure.ts";

import type {MenuStructureType} from "./menuStructureType.ts";

export interface MyJDMenuItem {
    children?: MenuStructure[] | null
    icon?: string | null
    id?: string | null
    name?: string | null
    type?: MenuStructureType | null
}