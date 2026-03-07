'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Book } from '@/lib/mock-data'

interface BookCardProps {
  book: Book
  className?: string
}

export function BookCard({ book, className }: BookCardProps) {
  return (
    <Link href={`/book/${book.id}`} className={cn('block group', className)}>
      <article className="glass-card rounded-2xl overflow-hidden cursor-pointer">
        {/* Cover Image */}
        <div className="relative aspect-2/3 overflow-hidden">
          <Image
            src={book.cover}
            alt={`${book.title} cover`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

          {/* Favorite badge */}
          {book.isFavorite && (
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center">
              <Heart className="w-4 h-4 fill-red-400 text-red-400" />
            </div>
          )}

          {/* Rating */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1 glass rounded-full px-2.5 py-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="text-xs font-medium text-glass">{book.rating}</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-xs text-glass-muted font-medium uppercase tracking-widest mb-1">
            {book.genre}
          </p>
          <h3 className="font-serif text-base font-semibold text-glass leading-tight mb-1 line-clamp-2">
            {book.title}
          </h3>
          <p className="text-sm text-glass-muted line-clamp-1">{book.author}</p>
        </div>
      </article>
    </Link>
  )
}
