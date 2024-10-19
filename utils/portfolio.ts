export const wpPortfolio = async (page: string | number | null | undefined) => {
    let myHeaders = new Headers();
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');
    const req = await fetch('https://resume.alexmuiruri.com/wp-json/wp/v2/work?per_page=12&page=' + page, { headers: myHeaders })
    return req
}

export const singlePortfolio = async (slug: string) => {
    let myHeaders = new Headers();
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');
    const req = await fetch('https://resume.alexmuiruri.com/wp-json/wp/v2/work?slug=' + slug, { headers: myHeaders})
    return req
}