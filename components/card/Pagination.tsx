import Link from 'next/link'
import React from 'react'

const Pagination = ({hdr}: {hdr: Headers}) => {
    if(Number(hdr.get('x-wp-totalpages')) < 2) return '' 
    var button = []
    for (let i = 1; i <= Number(hdr.get('x-wp-totalpages')); i++) {
        button.push(<Link href={'/posts?page='+i} className="join-item btn">{i}</Link>)
    }
    return button
}

export default Pagination