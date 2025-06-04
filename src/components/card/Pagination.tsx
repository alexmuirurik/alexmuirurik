import Link from 'next/link'
import React from 'react'

const Pagination = ({ pages, current }: { pages: number; current: number }) => {
    let button = []
    if (pages > 1 && pages >= current) {
        for (let i = 1; i <= pages; i++) {
            button.push(
                <Link href={'/posts?page=' + i} className="join-item btn">
                    {i}
                </Link>
            )
        }
    }

    return button
}

export default Pagination
