import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Sparkles, Users, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'

export default function LandingPage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Full-screen Background */}
      <Image
        src="/bg-hero.jpg"
        alt="Cloudy Bay"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Atmospheric overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0.03_250/0.55)] via-[oklch(0.08_0.04_240/0.30)] to-[oklch(0.06_0.03_250/0.70)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

      {/* Navbar */}
      <Navbar />

      {/* Center Content */}
      <main
        className="relative z-10 h-full flex items-center justify-center px-4"
        aria-label="Landing hero"
      >
        <div className="glass iridescent-border rounded-3xl p-10 md:p-14 max-w-2xl w-full text-center flex flex-col items-center gap-8">
          {/* Logo mark */}
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl glass-heavy iridescent-border">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-glass-muted">
              Your Personal Bookshelf
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-glass leading-tight text-balance">
              Read deeply.<br />Share beautifully.
            </h1>
            <p className="text-base text-glass-muted leading-relaxed max-w-md mx-auto text-pretty">
              Curate your reading life, discover new worlds, and connect with readers who share your passion.
            </p>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: BookOpen, label: 'Personal Shelf' },
              { icon: Sparkles, label: 'Favorites' },
              { icon: Users, label: 'Explore Others' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 glass-btn rounded-full px-4 py-2"
              >
                <Icon className="w-3.5 h-3.5 text-primary" />
                <span className="text-sm font-medium text-glass">{label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <Link
              href="/shelf"
              className="glass-btn-primary rounded-2xl px-8 py-3.5 text-sm font-semibold text-glass flex items-center justify-center gap-2 group"
            >
              My Bookshelf
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/explore"
              className="glass-btn rounded-2xl px-8 py-3.5 text-sm font-semibold text-glass flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4" />
              Explore Readers
            </Link>
          </div>
        </div>
      </main>

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </div>
  )
}
