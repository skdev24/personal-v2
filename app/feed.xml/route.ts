import assert from 'assert'
import * as cheerio from 'cheerio'
import { Feed } from 'feed'
import { readdirSync, accessSync } from 'fs'
import { join } from 'path'
import { BLOG_POSTS } from '../data'

export async function GET(req: Request) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'Shivam Dev',
    email: 'skdev24@gmail.com',
  }

  let feed = new Feed({
    title: author.name,
    description:
      'Engineering insights, AI projects, and fintech development stories',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    // Add more feed metadata
    language: 'en-US',
    category: 'Technology',
    generator: 'Next.js RSS Feed',
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
      json: `${siteUrl}/feed.json`,
    },
  })

  // Replace webpack require.context with Node.js filesystem operations
  const blogDir = join(process.cwd(), 'app', 'blog')
  console.log('Blog directory:', blogDir)

  const articleIds = readdirSync(blogDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((name) => {
      try {
        // Check if page.mdx exists in the directory
        const pagePath = join(blogDir, name, 'page.mdx')
        accessSync(pagePath)
        console.log('Found blog post:', name)
        return true
      } catch {
        console.log('No page.mdx found in:', name)
        return false
      }
    })

  console.log('Article IDs found:', articleIds)

  for (let id of articleIds) {
    let url = String(new URL(`/blog/${id}`, req.url))
    let html = await (await fetch(url)).text()
    let $ = cheerio.load(html)

    let publicUrl = `${siteUrl}/blog/${id}`
    let title = $('h1').first().text()
    let content = $('main').html() || $('body').html()

    // Get description from your data.ts or extract from content
    let blogPost = BLOG_POSTS.find((post) => post.link === `/blog/${id}`)
    let description =
      blogPost?.description ||
      $('main p').first().text().substring(0, 160) + '...'

    if (!title || !content) continue

    feed.addItem({
      title,
      id: publicUrl,
      link: publicUrl,
      description, // Add description
      content, // This creates <content:encoded>
      author: [author],
      contributor: [author],
      date: new Date(), // You can add actual dates to your MDX frontmatter later
      // Add more metadata
      guid: publicUrl,
      published: new Date(),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
