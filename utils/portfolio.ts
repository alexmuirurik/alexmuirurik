export const wpPortfolio = async (page: string | number | null | undefined) => {
    const req = await fetch('https://good.alexmuiruri.com/wp-json/wp/v2/work?per_page=12&page=' + page)
    return req
}

export const singlePortfolio = async (slug: string) => {
    const req = await fetch('httsp://good.alexmuiruri.com/wp-json/wp/v2/work?slug=' + slug, { 
        cache: 'no-cache'
    })
    return req
}