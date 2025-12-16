import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()

  const isActive = (href: string, isAnchor = false) => {
    if (isAnchor) {
      // anchor links only active on home page and when hash matches
      return router.pathname === '/' && router.asPath.includes(href)
    }
    if (href === '/') {
      // Home active when on root and no hash
      return router.pathname === '/' && !router.asPath.includes('#')
    }
    return router.pathname === href
  }

  const linkBase = 'text-slate-700 hover:text-primary'
  const activeClass = 'text-primary font-semibold'

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/taksha_logo.png" alt="Taksha Engineering logo" width={160} height={48} className="logo-size" />
        </Link>

        <nav className="space-x-4 text-sm">
          <Link href="/" className={`${linkBase} ${isActive('/') ? activeClass : ''}`}>Home</Link>
          <Link href="/about" className={`${linkBase} ${isActive('/about') ? activeClass : ''}`}>About</Link>
          <Link href="/services" className={`${linkBase} ${isActive('/services') ? activeClass : ''}`}>Services</Link>
          <Link href="/projects" className={`${linkBase} ${isActive('/projects') ? activeClass : ''}`}>Projects</Link>
          <Link href="/contact" className={`${linkBase} ${isActive('/contact') ? activeClass : ''}`}>Contact</Link>
          <Link href="/contact" className="ml-2 inline-block bg-primary text-white px-4 py-2 rounded-md">Book a Site Visit</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
