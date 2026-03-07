'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, Heart, BookOpen, Star, SlidersHorizontal } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { BookCard } from '@/components/book-card'
import { myBooks } from '@/lib/mock-data'
import { cn } from '@/lib/utils'

type FilterType = 'all' | 'favorites' | 'reading'

const STATS = [
  { label: '蔵書数', value: '6', icon: BookOpen },
  { label: 'お気に入り', value: '3', icon: Heart },
  { label: '平均評価', value: '4.6', icon: Star },
]

export default function ShelfPage() {
  const [filter, setFilter] = useState<FilterType>('all')
  const [search, setSearch] = useState('')

  const filtered = myBooks.filter((b) => {
    const matchFilter =
      filter === 'all' ? true : filter === 'favorites' ? b.isFavorite : false
    const matchSearch =
      search === '' ||
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
    return matchFilter && matchSearch
  })

  return (
    <div className="min-h-screen relative">
      {/* Layered background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/bg-hero.jpg"
          alt=""
          fill
          className="object-cover"
          quality={75}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[oklch(0.07_0.025_255/0.82)]" />
      </div>

      <Navbar />

      <main className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        {/* Profile header */}
        <header className="glass iridescent-border rounded-3xl p-6 md:p-8 mb-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl glass-heavy overflow-hidden ring-2 ring-white/20">
              <Image
                src="/avatar-1.jpg"
                alt="Your profile photo"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-white/10" />
          </div>

          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-glass-muted mb-1">My Bookshelf</p>
            <h1 className="font-serif text-2xl md:text-3xl font-semibold text-glass mb-1">
              Aiko Yamamoto
            </h1>
            <p className="text-sm text-glass-muted">@aiko_reads · 読書家として日々精進中</p>
          </div>

          {/* Stats */}
          <div className="flex gap-4 md:gap-6">
            {STATS.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-serif text-xl font-semibold text-glass">{value}</span>
                <span className="text-xs text-glass-muted">{label}</span>
              </div>
            ))}
          </div>
        </header>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-glass-muted pointer-events-none" />
            <input
              type="search"
              placeholder="タイトル・著者で検索..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="glass-input w-full rounded-2xl pl-11 pr-4 py-3 text-sm text-glass placeholder:text-glass-muted outline-none"
              aria-label="Search books"
            />
          </div>

          {/* Filter pills */}
          <div className="flex items-center gap-2 glass rounded-2xl p-1.5">
            <SlidersHorizontal className="w-4 h-4 text-glass-muted ml-2" />
            {(['all', 'favorites'] as FilterType[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                  filter === f
                    ? 'glass-heavy text-glass'
                    : 'text-glass-muted hover:text-glass hover:bg-white/5'
                )}
              >
                {f === 'all' ? 'すべて' : 'お気に入り'}
              </button>
            ))}
          </div>
        </div>

        {/* Book grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5">
            {filtered.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="glass rounded-3xl p-16 flex flex-col items-center gap-4 text-center">
            <BookOpen className="w-12 h-12 text-glass-muted" />
            <p className="text-glass-muted text-sm">該当する本が見つかりません</p>
          </div>
        )}
      </main>
    </div>
  )
}
