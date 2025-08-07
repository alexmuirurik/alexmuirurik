'use client'
import { SendMail } from '@/src/action/sendMail'
import { LoadingButton } from '../ui/loading-button'
import { FormEvent, useState } from 'react'
import { toast } from 'sonner'

interface ContactForm {
    name: string
    email: string
    website: string
    content: string
}

const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const target = event.target as HTMLFormElement
        const data = new FormData(event.target as HTMLFormElement)
        setLoading(true)
        try {
            const response = await SendMail(data)
            toast.success('Email sent successfully!', {
                description: response.message,
            })
            target.reset()
            setLoading(false)
        } catch (error: any) {
            toast.error('Error Sending Email', {
                description: error?.message || 'An unknown error occurred',
            })
            setLoading(false)
        }
    }

    return (
        <form className="p-4 space-y-4" onSubmit={handleSubmit}>
            <input
                type="hidden"
                name="access_key"
                value="1605b721791b4e1b8ef143fd62715908"
            />
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
                        type="email"
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
                        type="url"
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
                    className="border border-neutral-300 rounded-lg p-2 text-black w-full mt-2 !outline-1 resize-y whitespace-pre !outline-offset-0"
                    name="content"
                    rows={3}
                    required
                    placeholder="Type your message here"
                ></textarea>
            </div>
            <div className="w-full flex-[0_0_auto] form-group text-end mb-4">
                <LoadingButton
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-500 px-4 py-2 border border-teal-500 rounded-lg"
                    loading={loading}
                >
                    Submit Email
                </LoadingButton>
            </div>
        </form>
    )
}

export default ContactForm
