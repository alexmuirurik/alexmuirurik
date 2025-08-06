---
title: Writer CMS
techStack: MongoDB, Google Docs
description: Ten years ago, tech pundits predicted the demise of PHP in web development. They claimed that the rise of modern frameworks, like Ruby on Rails and Node.js, would render the programming language obsolete. 
featuredImage: /img/portfolio/copyscribers.png
updatedAt: 2021-08-22
author: Bojack Horseman
---
This project serves as the backend and admin interface for a content creation and article management platform designed specifically for writers. It's like Google Docs meets Google Drive, but tailored to help writers organize, write, and manage long-form content within structured projects.

🔧 Tech Stack
Framework: Next.js (App Router)

Auth: NextAuth.js with Prisma Adapter

Database: Prisma ORM (likely PostgreSQL or SQLite)

UI & Styling:

Tailwind CSS

Radix UI components

ShadCN UI

Lucide icons

Forms & Validation:

React Hook Form

Zod

Editor: TinyMCE (@tinymce/tinymce-react)

Other Tools:

resend for email handling

@tanstack/react-table for complex data tables

next-themes for dark/light mode

📁 Core Features (inferred)
User Authentication & Sessions via NextAuth.js

Project & Article Management - writers can create writing projects and manage articles within them

Rich Text Editing using TinyMCE

Team or Role-Based Views (possible with Radix UI menu structure)

Notifications & UX Enhancements via toast, loaders, and top progress bars

Dark/Light Theming

💡 How it Supports Writers
This app provides:

A focused workspace to draft and organize articles

A system to group writing into projects or folders

Rich text capabilities without the complexity of WordPress or full CMSs

Authentication and session management for personal or team-based writing