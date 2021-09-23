import SavedMeta from './_savedMeta';

export interface Experiment extends SavedMeta {
    inputs: any
    outputs: any
    dateRun: Date
    reportBlocks: ReportBlock[]
    workflowGuid: number
    workflowContentVersionGuid: number
}

// TODO: use editorjs.io block formatting and editing
export interface ReportBlock {
    type: string
    data: any
    nodeId?: number
}