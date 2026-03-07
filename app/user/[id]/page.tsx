import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Heart } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { BookCard } from '@/components/book-card'
import { otherUsers } from '@/lib/mock-data'

export default function UserShelfPage({ params }: { params: { id: string } }) {
  const user = otherUsers.find((u) => u.id === params.id) ?? otherUsers[0]

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <Image src="/bg-hero.jpg" alt="" fill className="object-cover" quality={60} aria-hidden="true" />
        <div className="absolute inset-0 bg-[oklch(0.07_0.025_255/0.83)]" />
      </div>

      <Navbar />

      <main className="pt-24 pb-20 px-4 max-w-6xl mx-auto">
        <Link
          href="/explore"
          className="inline-flex items-center gap-2 glass-btn rounded-xl px-4 py-2.5 text-sm font-medium text-glass-muted hover:text-glass mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          探索に戻る
        </Link>

        {/* User header */}
        <header className="glass iridescent-border rounded-3xl p-7 md:p-10 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 rounded-2xl glass-heavy overflow-hidden ring-1 ring-white/20 shrink-0">
              <Image
                src={user.avatar}
                alt={user.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <h1 className="font-serif text-2xl md:text-3xl font-semibold text-glass mb-1">
                {user.name}
              </h1>
              <p className="text-sm text-glass-muted mb-2">{user.handle}</p>
              <p className="text-sm text-glass-muted leading-relaxed">{user.bio}</p>
            </div>
            <div className="flex items-center gap-6 shrink-0">
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-glass">{user.bookCount}</span>
                </div>
                <span className="text-xs text-glass-muted">冊</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span className="font-semibold text-glass">{user.favoriteCount}</span>
                </div>
                <span className="text-xs text-glass-muted">お気に入り</span>
              </div>
            </div>
          </div>
        </header>

        {/* Books */}
        <section>
          <h2 className="font-serif text-xl font-semibold text-glass mb-5">
            {user.name.split(' ')[0]}さんの本棚
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
            {user.books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
