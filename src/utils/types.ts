export interface MetaData {
    title: string
    description: string
    featuredImage?: string
    author?: string
    updatedAt?: string
    createdAt?: string
}

export interface Post {
    slug: string
    content: string
    metaData: MetaData
}
