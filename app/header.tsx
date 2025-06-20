'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Image from 'next/image'
import Link from 'next/link'
import avatar from '../images/avatar.png'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={avatar}
          alt="Shivam Dev Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <Link href="/" className="font-medium text-black dark:text-white">
            Shivam Dev
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-600 dark:text-zinc-500"
            delay={0.5}
          >
            Software Engineer
          </TextEffect>
        </div>
      </div>
    </header>
  )
}
