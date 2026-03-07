'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, Compass, User, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/shelf', label: 'My Shelf', icon: BookOpen },
  { href: '/explore', label: 'Explore', icon: Compass },
  { href: '/profile', label: 'Profile', icon: User },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl glass-btn flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-primary" />
          </div>
          <span className="font-serif text-lg font-semibold text-glass tracking-wide">
            Pegma
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'glass-btn text-glass'
                    : 'text-glass-muted hover:text-glass hover:bg-white/5'
                )}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Nav */}
        <nav className="flex md:hidden items-center gap-1">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'flex flex-col items-center gap-0.5 p-2 rounded-xl text-xs transition-all duration-200',
                  isActive
                    ? 'glass-btn text-glass'
                    : 'text-glass-muted hover:text-glass hover:bg-white/5'
                )}
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
