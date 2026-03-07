'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Heart, Star, BookOpen, Calendar, Hash, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { myBooks } from '@/lib/mock-data'
import { Navbar } from '@/components/navbar'

function StarRating({
  value,
  onChange,
}: {
  value: number
  onChange: (v: number) => void
}) {
  const [hover, setHover] = useState(0)
  return (
    <div className="flex gap-1" role="group" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => onChange(s)}
          onMouseEnter={() => setHover(s)}
          onMouseLeave={() => setHover(0)}
          aria-label={`${s} stars`}
          className="transition-transform hover:scale-110"
        >
          <Star
            className={cn(
              'w-6 h-6 transition-colors',
              (hover || value) >= s
                ? 'fill-amber-400 text-amber-400'
                : 'text-glass-muted'
            )}
          />
        </button>
      ))}
    </div>
  )
}

export default function BookDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const book = myBooks.find((b) => b.id === params.id) ?? myBooks[0]
  const [isFav, setIsFav] = useState(book.isFavorite)
  const [reviews, setReviews] = useState(book.reviews)
  const [newRating, setNewRating] = useState(0)
  const [newText, setNewText] = useState('')

  function submitReview() {
    if (!newText.trim() || newRating === 0) return
    setReviews((prev) => [
      {
        id: `r${Date.now()}`,
        userId: 'u1',
        userName: 'Aiko Yamamoto',
        userAvatar: '/avatar-1.jpg',
        rating: newRating,
        text: newText,
        date: new Date().toISOString().split('T')[0],
      },
      ...prev,
    ])
    setNewText('')
    setNewRating(0)
  }

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image src="/bg-hero.jpg" alt="" fill className="object-cover" quality={60} aria-hidden="true" />
        <div className="absolute inset-0 bg-[oklch(0.07_0.025_255/0.85)]" />
      </div>

      <Navbar />

      <main className="pt-24 pb-20 px-4 max-w-5xl mx-auto">
        {/* Back */}
        <Link
          href="/shelf"
          className="inline-flex items-center gap-2 glass-btn rounded-xl px-4 py-2.5 text-sm font-medium text-glass-muted hover:text-glass mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          本棚に戻る
        </Link>

        {/* Hero section */}
        <section className="glass iridescent-border rounded-3xl overflow-hidden mb-6">
          <div className="flex flex-col md:flex-row gap-0">
            {/* Cover */}
            <div className="relative w-full md:w-64 shrink-0 aspect-2/3 md:aspect-auto">
              <Image
                src={book.cover}
                alt={`${book.title} cover`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/30 hidden md:block" />
            </div>

            {/* Info */}
            <div className="flex-1 p-7 md:p-10 flex flex-col justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-glass-muted mb-2">{book.genre}</p>
                <h1 className="font-serif text-3xl md:text-4xl font-semibold text-glass leading-tight mb-2 text-balance">
                  {book.title}
                </h1>
                <p className="text-lg text-glass-muted font-medium mb-5">{book.author}</p>

                {/* Meta chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { icon: Star, label: `${book.rating} / 5` },
                    { icon: BookOpen, label: `${book.pages}ページ` },
                    { icon: Calendar, label: `${book.year}年` },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-1.5 glass-btn rounded-full px-3 py-1.5">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-medium text-glass">{label}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-glass-muted leading-relaxed">{book.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 glass rounded-full px-3 py-1 text-xs text-glass-muted"
                  >
                    <Hash className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setIsFav((v) => !v)}
                  className={cn(
                    'flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-200',
                    isFav
                      ? 'glass-heavy border border-red-400/40 text-glass'
                      : 'glass-btn text-glass-muted hover:text-glass'
                  )}
                  aria-pressed={isFav}
                >
                  <Heart
                    className={cn(
                      'w-4 h-4 transition-all',
                      isFav && 'fill-red-400 text-red-400'
                    )}
                  />
                  {isFav ? 'お気に入り済み' : 'お気に入りに追加'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews section */}
        <section className="glass iridescent-border rounded-3xl p-7 md:p-10">
          <h2 className="font-serif text-xl font-semibold text-glass mb-6">
            レビュー
            <span className="ml-2 text-glass-muted font-sans text-sm font-normal">
              ({reviews.length})
            </span>
          </h2>

          {/* Write review */}
          <div className="glass-heavy rounded-2xl p-5 mb-8">
            <p className="text-sm font-medium text-glass mb-3">レビューを書く</p>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/avatar-1.jpg"
                alt="Your avatar"
                width={36}
                height={36}
                className="rounded-xl object-cover"
              />
              <StarRating value={newRating} onChange={setNewRating} />
            </div>
            <div className="flex gap-3">
              <textarea
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="感想や考えを共有しましょう..."
                rows={3}
                className="glass-input flex-1 rounded-xl p-3 text-sm text-glass placeholder:text-glass-muted resize-none outline-none"
                aria-label="Review text"
              />
              <button
                onClick={submitReview}
                disabled={!newText.trim() || newRating === 0}
                className="glass-btn-primary rounded-xl px-4 py-3 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed self-end"
                aria-label="Submit review"
              >
                <Send className="w-4 h-4 text-glass" />
              </button>
            </div>
          </div>

          {/* Review list */}
          <div className="flex flex-col gap-4">
            {reviews.length === 0 && (
              <p className="text-sm text-glass-muted text-center py-8">
                まだレビューはありません。最初のレビューを書きましょう!
              </p>
            )}
            {reviews.map((r) => (
              <article key={r.id} className="glass-card rounded-2xl p-5 flex gap-4">
                <Image
                  src={r.userAvatar}
                  alt={r.userName}
                  width={40}
                  height={40}
                  className="rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                    <span className="text-sm font-semibold text-glass">{r.userName}</span>
                    <span className="text-xs text-glass-muted">{r.date}</span>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'w-3.5 h-3.5',
                          i < r.rating ? 'fill-amber-400 text-amber-400' : 'text-glass-muted'
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-glass-muted leading-relaxed">{r.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
