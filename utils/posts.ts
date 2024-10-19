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
    let myHeaders = new Headers();
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');
    const req  = await fetch('https:resume.alexmuiruri.com/wp-json/wp/v2/posts?per_page=12&page=' + page, { headers: myHeaders })
    return req
}

export const singlepost = async (slug: string) => {
    let myHeaders = new Headers();
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');
    const req	= await fetch('https://resume.alexmuiruri.com/wp-json/wp/v2/posts?slug=' + slug, { headers: myHeaders })
    return req
}