import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MetaData } from './types'

const getMDXFiles = (dir: fs.PathLike) => {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.md')
}

const readMDXFile = (filePath: fs.PathOrFileDescriptor) => {
    let rawContent = fs.readFileSync(filePath).toString()
    return matter(rawContent)
}

const getMDXData = (dir: any) => {
    let mdxFiles = getMDXFiles(dir)
    return mdxFiles.map((file) => {
        let { data, content } = readMDXFile(path.join(dir, file))
        let slug = path.basename(file, path.extname(file))

        return {
            metaData: data as MetaData,
            slug: slug,
            content: content,
        }
    })
}

export const getPosts = (posts: 'posts' | 'portfolio') => {
    return getMDXData(path.join(process.cwd(), 'src', 'content', posts))
}
