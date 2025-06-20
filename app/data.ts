type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  location?: string
  link: string
  id: string
  roles: {
    title: string
    start: string
    end: string
  }[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'FitMate: Your Fitness Journey',
    description: 'Personalized fitness app for all levels.',
    link: 'https://fitmateai.app/',
    image: 'https://fitmateai.app/fitmate-card.png',
    id: 'project1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Otio',
    location: 'London, United Kingdom',
    link: 'https://otio.ai',
    id: 'work1',
    roles: [
      {
        title: 'Chief Technology Officer',
        start: 'January 2025',
        end: 'Present',
      },
      {
        title: 'Head of Engineering',
        start: 'October 2023',
        end: 'January 2025',
      },
    ],
  },
  {
    company: 'Striga (YC W21)',
    link: 'https://striga.com',
    location: 'Tallinn, Estonia',
    id: 'work2',
    roles: [
      {
        title: 'VP of Engineering',
        start: 'April 2022',
        end: 'May 2023',
      },
    ],
  },
  {
    company: 'Lastbit/Striga (YC W21)',
    link: 'https://striga.com',
    id: 'work3',
    location: 'Tallinn, Estonia & Bangalore, India',
    roles: [
      {
        title: 'Senior Software Engineer',
        start: 'April 2021',
        end: 'April 2022',
      },
      {
        title: 'Mobile Software Engineer',
        start: 'June 2019',
        end: 'April 2021',
      },
    ],
  },
  {
    company: 'Upwork/Groovecat/GroceriStar',
    link: 'https://upwork.com',
    id: 'work4',
    location: 'Remote',
    roles: [
      {
        title: 'Freelance Developer',
        start: 'August 2018',
        end: 'May 2019',
      },
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'FitMate AI: Personalizing Fitness Through AI',
    description:
      'Built an AI-powered fitness app that got 1k+ downloads in 2 months.',
    link: '/blog/fitmate-ai-personalizing-fitness',
    uid: 'blog-3',
  },
  {
    title: 'Striga Dashboard: From B2C to B2B',
    description:
      "Building B2B dashboard while getting Estonia's first crypto license.",
    link: '/blog/striga-dashboard-b2c-to-b2b',
    uid: 'blog-2',
  },
  {
    title: 'My Mobile Dev Journey: Lastbit to Striga',
    description:
      'How I built crypto wallets and banking apps at Lastbit & Striga.',
    link: '/blog/my-journey-lastbit-striga',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Twitter',
    link: 'https://twitter.com/skdev24',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/crypto.dev/',
  },
  {
    label: 'Github',
    link: 'https://github.com/skdev24',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/skdev24',
  },
]

export const EMAIL = 'skdev24@gmail.com'
