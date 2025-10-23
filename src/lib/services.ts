import { IconType } from "react-icons";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { IoServer } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { AiOutlineCode } from "react-icons/ai";
import { GrSystem } from "react-icons/gr";
import { FaWordpressSimple } from "react-icons/fa";

export type Service = {
    name: string
    icon: IconType
    description: string
}

export const services: Service[] = [
    {
        name: 'Full-stack Web Development',
        icon: LiaLaptopCodeSolid,
        description: 'Create a full-stack web applications using technologies like NextJS and Laravel.',
    },
    {
        name: 'Backend Development',
        icon: IoServer,
        description: 'Create a REST or GraphQL API using NodeJS, MongoDB, and Prisma',
    },
    {
        name: 'Mobile App Development',
        icon: CiMobile1,
        description: 'Build mobile apps using React Native, Figma, and Tailwind CSS.',
    },
    {
        name: 'System Maintenance',
        icon: GrSystem,
        description: "Write technical documentation using Markdown, GitHub, and GitHub Actions.",
    },
    {
        name: 'Freelance Tech Writing',
        icon: AiOutlineCode,
        description: "Write expert blog posts and articles for your blog, website, or magazine.",
    },
    {
        name: 'WordPress Development',
        icon: FaWordpressSimple,
        description: "Build Wordpress headless headless CMS or a basic theme using Gutenberg.",
    },
]
