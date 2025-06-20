import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import DustSVG from '@/components/ui/dust-svg'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://shivx.dev/'),
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  title: {
    template: '%s - Shivam Dev',
    default:
      'shivam dev - Full-Stack Developer, Tech Strategist, and Problem Solver',
  },
  description: `I've spent the last six years turning ambitious ideas into market-shaping software solutions.`,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://shivx.dev',
    title: 'Shivam Dev',
    description: 'Web & Mobile Technology Expert',
    images: [
      {
        url: 'https://shivam.bio/shivam-card.png',
        alt: 'Shivam Dev',
      },
    ],
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <DustSVG />
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
