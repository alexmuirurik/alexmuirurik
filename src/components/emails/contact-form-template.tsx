import * as React from 'react'

interface EmailTemplateProps {
    firstName: string
    content: string
}

export function EmailTemplate({ firstName, content }: EmailTemplateProps) {
    return (
        <div>
            <p>{content}</p>
        </div>
    )
}
