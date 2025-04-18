export interface post { 
    id: React.Key | null | undefined; 
    featured_media: any; 
    slug: string; 
    title: { 
        rendered: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined 
    }; 
    excerpt: { rendered: string } 
}

export const wpposts = async (page: number) => {
    const req  = await fetch('http://good.alexmuiruri.com/wp-json/wp/v2/posts?per_page=12&page=' + page, { 
        cache: 'no-cache'
    })
    return req
}

export const singlepost = async (slug: string) => {
    const req	= await fetch('http://good.alexmuiruri.com/wp-json/wp/v2/posts?slug=' + slug, { 
        cache: 'no-cache'
    })
    return req
}