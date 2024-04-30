export const wpPortfolio = async (page: string | number | null | undefined) => {
    const req = await fetch('https://resume.alexmuiruri.com/wp-json/wp/v2/work?per_page=12&page='+ page)
    return req
}