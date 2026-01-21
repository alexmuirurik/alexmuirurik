import Link from 'next/link'

const Pagination = ({ pages, current }: { pages: number; current: number }) => {
    let button = []
    if (pages > 1 && pages >= current) {
        for (let i = 1; i <= pages; i++) {
            button.push(
                <Link
                    href={'/posts?page=' + i}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                    key={i}
                >
                    {i}
                </Link>
            )
        }
    }

    return button
}

export default Pagination
