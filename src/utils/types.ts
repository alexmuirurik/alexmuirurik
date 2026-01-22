export interface MetaData {
    title: string
    description: string
    techStack?: string
    featuredImage?: string
    linkRel?: string
    author?: string
    updatedAt: string
    createdAt?: string
}

export interface Post {
    slug: string
    content: string
    metaData: MetaData
}
