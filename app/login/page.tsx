'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { BookOpen, Shield, Star, Users } from 'lucide-react'
// import { useAuth } from '@/context/auth-context'
import { cn } from '@/lib/utils'

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

const FEATURES = [
  { icon: BookOpen, text: 'パーソナル本棚を管理' },
  { icon: Star, text: 'お気に入りをキュレーション' },
  { icon: Users, text: '読書仲間とつながる' },
  { icon: Shield, text: 'GitHubアカウントで安全にログイン' },
]

export default function LoginPage() {
  // const { user, isLoading, signInWithGitHub } = useAuth()
  const router = useRouter()

  // useEffect(() => {
  //   if (!isLoading && user) {
  //     router.replace('/shelf')
  //   }
  // }, [user, isLoading, router])

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background */}
      <Image
        src="/bg-hero.jpg"
        alt="Misty mountain lake at twilight"
        fill
        className="object-cover"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-linear-to-b from-[oklch(0.06_0.03_250/0.60)] via-[oklch(0.08_0.04_240/0.35)] to-[oklch(0.06_0.03_250/0.75)]" />
      <div className="absolute inset-0 bg-linear-to-r from-black/25 via-transparent to-black/20" />

      {/* Login card */}
      <main
        className="relative z-10 w-full max-w-sm mx-auto px-4"
        aria-label="Login"
      >
        <div className="glass iridescent-border rounded-3xl p-8 md:p-10 flex flex-col items-center gap-7">

          {/* Brand mark */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl glass-heavy iridescent-border flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <div className="text-center">
              <h1 className="font-serif text-2xl font-semibold text-glass tracking-wide">
                Liqra
              </h1>
              <p className="text-xs text-glass-muted mt-0.5 tracking-wide">
                Your Personal Bookshelf
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10" />

          {/* Headline */}
          <div className="text-center">
            <h2 className="text-lg font-semibold text-glass text-balance">
              ようこそ
            </h2>
            <p className="text-sm text-glass-muted mt-1.5 leading-relaxed text-pretty">
              GitHubアカウントでサインインして、<br />
              あなたの読書ライフをはじめましょう。
            </p>
          </div>

          {/* Feature list */}
          <ul className="w-full flex flex-col gap-2" aria-label="Features">
            {FEATURES.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-3 px-4 py-2.5 rounded-2xl glass"
              >
                <div className="w-7 h-7 rounded-xl glass-btn flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-sm text-glass-muted">{text}</span>
              </li>
            ))}
          </ul>

          {/* GitHub Sign-in button */}
          <button
            // onClick={signInWithGitHub}
            // disabled={isLoading}
            className={cn(
              'w-full flex items-center justify-center gap-3 rounded-2xl px-6 py-3.5',
              'text-sm font-semibold text-glass',
              'glass-heavy iridescent-border',
              'border border-white/20',
              'transition-all duration-200',
              'hover:bg-white/18 hover:border-white/30',
              'active:scale-[0.98]',
              'disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60'
            )}
            aria-label="Sign in with GitHub"
          >
            {/* {isLoading ? (
              <>
                <span
                  className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                  aria-hidden="true"
                />
                <span>認証中...</span>
              </>
            ) : (
              <>
                <GitHubIcon className="w-5 h-5" />
                <span>GitHubでサインイン</span>
              </>
            )} */}
            <>
              <GitHubIcon className="w-5 h-5" />
              <span>GitHubでサインイン</span>
            </>
          </button>

          {/* Legal note */}
          <p className="text-xs text-glass-muted text-center leading-relaxed px-2">
            サインインすることで、
            <span className="text-glass/70">利用規約</span>
            および
            <span className="text-glass/70">プライバシーポリシー</span>
            に同意したものとみなされます。
          </p>
        </div>
      </main>

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black/30 to-transparent pointer-events-none" />
    </div>
  )
}
