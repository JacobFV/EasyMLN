import SavedMeta from "./_savedMeta";

export default interface WorkflowContent extends SavedMeta {
    experimentIds: number[];
    graph: any;
}