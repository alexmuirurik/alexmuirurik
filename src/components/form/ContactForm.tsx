import React from 'react'

const ContactForm = () => {
    return (
        <form
            className="p-4 space-y-4"
            id="contactme-form"
            action="/contact-me"
            method="post"
        >
            <div className="grid lg:grid-cols-3 gap-4">
                <div className="space-y-4">
                    <label className="form-label" htmlFor="name">
                        Names
                    </label>
                    <input
                        id="name"
                        name="name"
                        className="rounded-lg border border-neutral-300 text-black p-2 w-full mt-2 !outline-1 !outline-offset-0"
                        placeholder="Type Your Name Here"
                        required
                    />
                </div>
                <div className="space-y-4">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        className="rounded-lg border border-neutral-300 text-black p-2 w-full mt-2 !outline-1 !outline-offset-0"
                        placeholder="Enter Your Email Here"
                        required
                    />
                </div>
                <div className="space-y-4">
                    <label className="form-label" htmlFor="website">
                        Website
                    </label>
                    <input
                        id="website"
                        name="website"
                        className="rounded-lg border border-neutral-300 text-black p-2 w-full mt-2 !outline-1 !outline-offset-0"
                        placeholder="Enter Your Website Here"
                        required
                    />
                </div>
            </div>

            <div className="flex flex-col form-group flex-1 mb-3">
                <label className="form-label" htmlFor="content">
                    Email body
                </label>
                <textarea
                    id="content"
                    className="border border-neutral-300 rounded-lg p-2 text-black w-full mt-2 !outline-1 !outline-offset-0"
                    name="content"
                    rows={3}
                    required
                ></textarea>
            </div>
            <div className="w-full flex-[0_0_auto] form-group text-end mb-4">
                <button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-500 px-4 py-2 border border-teal-500 rounded-lg"
                >
                    Submit Email
                </button>
            </div>
        </form>
    )
}

export default ContactForm
