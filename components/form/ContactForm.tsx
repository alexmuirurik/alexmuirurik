import React from 'react'

const ContactForm = () => {
    return (
        <form className="row m-0 p-0" id="contactme-form" action="/contact-me" method="post">
            <div className="flex flex-col w-full md:w-1/3 flex-[0_0_auto] form-group mb-3">
                <label className="form-label" htmlFor="name">Names</label>
                <input id="name" name="name" className="input input-bordered w-full mt-2 !outline-1 !outline-offset-0" placeholder="Type Your Name Here" required />
            </div>
            <div className="flex flex-col w-full md:w-1/3 flex-[0_0_auto] form-group mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input id="email" name="email" className="input input-bordered w-full mt-2 !outline-1 !outline-offset-0" placeholder="Enter Your Email Here" required />
            </div>
            <div className="flex flex-col w-full md:w-1/3 flex-[0_0_auto] form-group mb-3">
                <label className="form-label" htmlFor="website">Website</label>
                <input id="website" name="website" className="input input-bordered w-full mt-2 !outline-1 !outline-offset-0" placeholder="Enter Your Website Here" required />
            </div>
            <div className="flex flex-col form-group flex-1 mb-3">
                <label className="form-label" htmlFor="content">Email body</label>
                <textarea id="content" className="textarea textarea-bordered textarea-md w-full mt-2 !outline-1 !outline-offset-0" name="content" rows={3} required></textarea>
            </div>
            <div className="w-full flex-[0_0_auto] form-group text-end mb-4">
                <button type="submit" className="btn btn-sm btn-success">
                    Submit Email
                </button>
            </div>
        </form>
    )
}

export default ContactForm