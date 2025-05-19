import React from 'react'

const PageHero = ({pagename} : any) => {
    return (
        <section className="hero p-0 h-28 mb-4 " id="hero">
            <div className="container-fluid px-0">
                <div className="hero-container mix-blend-exclusion dark:mix-blend-normal" style={{ backgroundImage: 'url(\'/img/home/bg-hero.jpg\')' }} >
                    <div className="aside text-center m-auto">
                        <h1 className='text-4xl font-bold'>{pagename}</h1>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageHero