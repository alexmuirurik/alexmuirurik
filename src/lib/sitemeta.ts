import { z } from 'zod'

export const contactSchema = z.object({
    email: z.email(),
    name: z.string(),
    website: z.url(),
    content: z.string(),
    access_key: z.string(),
})

export const experience = {
    writing: new Date().getFullYear() - 2018,
    coding: new Date().getFullYear() - 2022,
}

export const siteMeta = {
    title: 'Welcome to my Portfolio Site',
    nameField: "I'm Alex Muiruri",
    bio: `A software engineerwith ${experience.coding} years of experience. I can help you create mobile, front-end, and backend apps and deploy them on AWS, Vercel, or Azure.`,
    jobs: 'Technical Writer, Software Engineer, Mobile App Developer, Backend Developer and Full Stack Developer',
    skills: 'Documentation Writing, React Native, NextJs, NestJs, NuxtJs, Laravel, MySQL, PostgreSQL, MongoDB, APIs, and OAuth',
    recentWork: [
        {
            name: 'Writer Workflow',
            jobTitle: 'Next.js, PostgreSQL',
            link: 'https://github.com/alexmuirurik/cms-web-app',
            image: '/img/portfolio/copyscribers.png',
            description: [
                'Built the frontend using Next.js, ShadCn UI, and React Hook Form.',
                'Developed the backend using Next.jS, PostgreSQL, and Prisma.',
            ],
            start: 'Jan 2023',
            end: 'Present',
        },
        {
            name: 'Inventory App',
            jobTitle: 'Next.js, MongoDB, Prisma',
            link: 'https://github.com/alexmuirurik/inventory-backend-api',
            image: '/img/portfolio/pos-system.png',
            description: [
                `Designed application UI using React Native and WebView.`,
                `Developed the backend using Next.js, MongoDB, and Prisma.`,
            ],
            start: 'Dec 2024',
            end: 'July 2025',
        },
        {
            name: 'Inventory Backend',
            jobTitle: 'Nest.js, MongoDB, Prisma',
            link: 'https://github.com/alexmuirurik/inventory-backend-api',
            image: '/img/portfolio/backend.png',
            description: [
                `Developed the backend using Nest.js, MongoDB, and Prisma.`,
                `Created APIs to support mobile payments using MPesa API`,
            ],
            start: 'Sep 2023',
            end: 'Dec 2024',
        },
    ],
    services: [
        'Front-end Development',
        'Backend Development',
        'Mobile App Development',
        'Freelance Content Writing',
        'WordPress Development',
        'Technical/Software Writing',
    ],
    heroImage: '/img/home/bg-hero.jpg',
    profileImage: '/img/home/logo.png',
    social: {
        github: 'https://github.com/alexmuirurik',
        hackerNoon: 'https://hackernoon.com/u/alexmuirurik',
        linkedin: 'https://linkedin.com/in/alex-muiruri-writer',
    },
}
