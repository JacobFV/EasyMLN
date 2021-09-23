export default interface User {

    uid: number

    name: string
    email: string
    profilePicUrl: string

    created: Date

    personalWorkflowIds: number[]
    favoriteWorkflowIds: number[]
    recentlyViewedWorkflowIds: number[]
}