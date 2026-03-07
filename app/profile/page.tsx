import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Heart, Star, Edit3, Settings } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { BookCard } from '@/components/book-card'
import { myBooks } from '@/lib/mock-data'

const favoriteBooks = myBooks.filter((b) => b.isFavorite)
const recentBooks = myBooks.slice(0, 4)

export default function ProfilePage() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <Image src="/bg-hero.jpg" alt="" fill className="object-cover" quality={60} aria-hidden="true" />
        <div className="absolute inset-0 bg-[oklch(0.07_0.025_255/0.83)]" />
      </div>

      <Navbar />

      <main className="pt-24 pb-20 px-4 max-w-5xl mx-auto">
        {/* Profile card */}
        <section className="glass iridescent-border rounded-3xl p-7 md:p-10 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-3xl glass-heavy overflow-hidden ring-2 ring-white/20">
                <Image
                  src="/avatar-1.jpg"
                  alt="Aiko Yamamoto"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <button
                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl glass-btn flex items-center justify-center"
                aria-label="Edit profile photo"
              >
                <Edit3 className="w-3.5 h-3.5 text-glass" />
              </button>
            </div>

            <div className="flex-1">
              <h1 className="font-serif text-2xl md:text-3xl font-semibold text-glass mb-1">
                Aiko Yamamoto
              </h1>
              <p className="text-sm text-glass-muted mb-3">@aiko_reads</p>
              <p className="text-sm text-glass-muted leading-relaxed max-w-md">
                本を読むことは人生を広げること。文学・哲学・SFが好きで、読んだ本についての考えを共有することが趣味です。
              </p>
            </div>

            <button className="glass-btn rounded-2xl px-5 py-2.5 flex items-center gap-2 text-sm font-medium text-glass-muted hover:text-glass shrink-0">
              <Settings className="w-4 h-4" />
              設定
            </button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
            {[
              { icon: BookOpen, label: '蔵書数', value: myBooks.length.toString() },
              { icon: Heart, label: 'お気に入り', value: favoriteBooks.length.toString() },
              { icon: Star, label: '平均評価', value: '4.6' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-11 h-11 rounded-2xl glass flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-serif text-2xl font-semibold text-glass">{value}</span>
                <span className="text-xs text-glass-muted">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Favorites */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl font-semibold text-glass flex items-center gap-2">
              <Heart className="w-5 h-5 fill-red-400 text-red-400" />
              お気に入り
            </h2>
            <Link href="/shelf" className="text-sm text-glass-muted hover:text-glass transition-colors">
              すべて見る
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {favoriteBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        {/* Recent reads */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl font-semibold text-glass flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              最近読んだ本
            </h2>
            <Link href="/shelf" className="text-sm text-glass-muted hover:text-glass transition-colors">
              本棚へ
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {recentBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
