'use server'
import { Resend } from 'resend'
import { EmailTemplate } from '../components/emails/contact-form-template'

const resend = new Resend(process.env.RESEND_API_KEY)
export const SendMail = async (formData: FormData) => {
    try {
        const accessKey = formData.get('access_key') as string
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const website = formData.get('website') as string
        const content = formData.get('content') as string

        if (!accessKey || !name || !email || !website || !content) {
            return Promise.reject({
                success: false,
                message: 'All fields are required',
            })
        }

        if (accessKey !== process.env.ACCESS_KEY) {
            return Promise.reject({
                success: false,
                message: 'Invalid access key',
            })
        }

        const { data, error } = await resend.emails.send({
            from: `${process.env.ADMIN_NAME} <${process.env.ADMIN_EMAIL}>`,
            replyTo: email,
            to: [`${process.env.ADMIN_EMAIL}`],
            subject: `${name} via ${process.env.WEBSITE_URL}`,
            react: EmailTemplate({
                firstName: `${process.env.ADMIN_NAME}`,
                content: `${content}`,
            }),
        })

        if (error) {
            return Promise.reject({
                success: false,
                message: error,
            })
        }

        return Promise.resolve({
            success: true,
            message: data?.id || 'Email sent successfully',
        })
    } catch (error: any) {
        return Promise.reject({
            success: false,
            message: error?.message || 'Unknown error',
        })
    }
}
