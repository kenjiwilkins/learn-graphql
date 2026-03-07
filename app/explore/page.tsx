import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Heart, Users, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { BookCard } from '@/components/book-card'
import { otherUsers } from '@/lib/mock-data'

export default function ExplorePage() {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image src="/bg-hero.jpg" alt="" fill className="object-cover" quality={60} aria-hidden="true" />
        <div className="absolute inset-0 bg-[oklch(0.07_0.025_255/0.83)]" />
      </div>

      <Navbar />

      <main className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
        {/* Page header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl glass-btn flex items-center justify-center">
              <Users className="w-4 h-4 text-primary" />
            </div>
            <p className="text-xs uppercase tracking-widest text-glass-muted font-medium">
              Discover Readers
            </p>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-glass text-balance">
            他のユーザーの本棚
          </h1>
          <p className="text-sm text-glass-muted mt-2 leading-relaxed">
            さまざまな読者の本棚を覗いて、新しい一冊との出会いを見つけましょう。
          </p>
        </header>

        {/* User cards */}
        <div className="flex flex-col gap-10">
          {otherUsers.map((user) => (
            <section
              key={user.id}
              className="glass iridescent-border rounded-3xl overflow-hidden"
              aria-label={`${user.name}'s bookshelf`}
            >
              {/* User header */}
              <div className="flex items-start sm:items-center justify-between gap-4 p-6 md:p-8 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-2xl glass-heavy overflow-hidden ring-1 ring-white/20 shrink-0">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-serif text-lg font-semibold text-glass leading-tight">
                      {user.name}
                    </h2>
                    <p className="text-sm text-glass-muted">{user.handle}</p>
                    <p className="text-sm text-glass-muted mt-0.5 hidden sm:block">{user.bio}</p>
                  </div>
                </div>

                {/* User stats */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-primary" />
                      <span className="font-semibold text-glass text-sm">{user.bookCount}</span>
                    </div>
                    <span className="text-xs text-glass-muted">冊</span>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-red-400" />
                      <span className="font-semibold text-glass text-sm">{user.favoriteCount}</span>
                    </div>
                    <span className="text-xs text-glass-muted">お気に入り</span>
                  </div>
                </div>
              </div>

              {/* Bio (mobile) */}
              <p className="text-sm text-glass-muted px-6 pt-4 pb-0 sm:hidden">{user.bio}</p>

              {/* Books preview */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
                  {user.books.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>

                <Link
                  href={`/user/${user.id}`}
                  className="inline-flex items-center gap-2 glass-btn-primary rounded-2xl px-5 py-2.5 text-sm font-semibold text-glass group"
                >
                  本棚をすべて見る
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}
