import { email, z } from 'zod'

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
    aboutMe: `<div class="card-body p-0 "><p>Thanks for visiting my resume website. Read on to learn about my skills and services -- hopefully I\'ll help you eliminate that initial skeptism :)</p><p>Hi there,</p><p>I\'m Alex Muiruri, a full-stack web developer. I specialize in creating Admin Dashboards and Content Management Systems. Think job boards, eCommerce shops, inventory management applications, and file management systems.</p><p>I can work with an agile team to develop a system that meets your requirements or design an entire system from scratch. I\'m well-versed in technologies like Laravel, React, NextJS, and Django and can build apps with basic to complex functionalities.</p><p>I can also help you build WordPress themes and plugins, craft UX/UI designs using JS and CSS, and create React-Native mobile applications. Contact me at <span class="font-bold text-cyan-600">content@alexmuiruri.com</span> for custom web designs.</p><p>If you\'re just scrolling through my website, read some of my articles below and tell me what you think. Your views are important to me.</p><p>Kind regards</p></div>`,
    services: [
        'Full-stack Web Development',
        'Backend Development',
        'Mobile App Development',
        'Technical/Software Writing',
        'Freelance Content Writing',
        'WordPress Development',
    ],
}
