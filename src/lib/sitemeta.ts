import { profile } from 'console'
import { email, z } from 'zod'
import { he } from 'zod/v4/locales'

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
            employer: 'QuartzByte',
            jobTitle: 'Mobile App Developer',
            description: `Designed application UI using React Native and Figma documentation. Researched new fields to find alternative ways of doing things. Configured mobile app to work seamlessly with web application`,
            start: 'Dec 2024',
            end: 'July 2025',
        },
        {
            employer: 'NetraScale',
            jobTitle: 'Javascript Developer',
            description: `I created a full-stack web application using React/NextJS, PostgreSQL, and ShadCN. Worked on APIs to support mobile payments etc...`,
            start: 'Sep 2023',
            end: 'Dec 2024',
        },
        {
            employer: 'Stickyeyes',
            jobTitle: 'Casino Writer',
            description: `I write interesting guides on how to play, win, and strategize casino gameplays. Interesting topics I've worked on include 'Getting The Best Out of an Online Bingo Site', 'How To Enjoy a Night of Playing Bingo', etc.`,
            start: 'Jan 2023',
            end: 'Present',
        },
    ],
    services: [
        'Full-stack Web Development',
        'Backend Development',
        'Mobile App Development',
        'Technical/Software Writing',
        'Freelance Content Writing',
        'WordPress Development',
    ],
    heroImage: '/img/home/bg-hero.jpg',
    profileImage: '/img/home/alexmuiruri.jpg',
    social: {
        github: 'https://github.com/alexmuiruri',
        hackerNoon: 'https://hackernoon.com/u/alexmuirurik',
        linkedin: 'https://linkedin.com/in/alex-muiruri-writer',
    }
}
