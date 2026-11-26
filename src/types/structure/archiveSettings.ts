export interface ArchiveSettings {
    archiveId?: string | null
    autoExtract?: boolean | null
    extractPath?: string | null
    finalPassword?: string | null
    passwords?: string[] | null
    removeDownloadLinksAfterExtraction?: boolean | null
    removeFilesAfterExtraction?: boolean | null
}