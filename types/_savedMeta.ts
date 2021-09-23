export default interface SavedMeta {
    guid: number
    name?: string
    description: string
    previewImageURL: string
    ownerUid: number
    contributorUids: number[]
    tags: string[]
    dateCreated: Date
    dateUpdated: Date
    publicCanView: boolean
    publicCanEdit: boolean
    numberOfViews: number
}