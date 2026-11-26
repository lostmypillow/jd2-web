import type {ArchiveFileStatus} from "./archiveFileStatus.ts";
import type {ControllerStatus} from "./controllerStatus.ts";

export interface ArchiveStatus {
    archiveId?: string | null
    archiveName?: string | null
    controllerId?: number | null
    controllerStatus?: ControllerStatus | null
    states?: Record<string, ArchiveFileStatus> | null
    type?: string | null
}