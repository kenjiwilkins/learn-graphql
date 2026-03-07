export interface Book {
  id: string
  title: string
  author: string
  cover: string
  genre: string
  year: number
  pages: number
  rating: number
  description: string
  isFavorite: boolean
  tags: string[]
  reviews: Review[]
}

export interface Review {
  id: string
  userId: string
  userName: string
  userAvatar: string
  rating: number
  text: string
  date: string
}

export interface User {
  id: string
  name: string
  handle: string
  avatar: string
  bio: string
  bookCount: number
  favoriteCount: number
  books: Book[]
}

export const myBooks: Book[] = [
  {
    id: '1',
    title: '海辺のカフカ',
    author: '村上春樹',
    cover: '/book-cover-1.jpg',
    genre: '文学小説',
    year: 2002,
    pages: 592,
    rating: 4.8,
    description:
      '15歳の少年カフカは、父の予言を逃れるために家出し、高松の図書館に辿り着く。一方、東京では老人ナカタが奇妙な事件に巻き込まれていく。二つの物語が交差する、現実と幻想の境界を描いた長編小説。',
    isFavorite: true,
    tags: ['日本文学', 'マジックリアリズム', 'ビルドゥングスロマン'],
    reviews: [
      {
        id: 'r1',
        userId: 'u2',
        userName: 'Hiroshi Tanaka',
        userAvatar: '/avatar-2.jpg',
        rating: 5,
        text: '村上春樹の作品の中でも特に好きな一冊。現実と夢の境が溶け合う描写が圧倒的に美しい。',
        date: '2024-11-20',
      },
      {
        id: 'r2',
        userId: 'u3',
        userName: 'Yuki Nakamura',
        userAvatar: '/avatar-3.jpg',
        rating: 4,
        text: '複雑な物語構造だけど、読み終えた後の余韻が忘れられない。',
        date: '2024-10-05',
      },
    ],
  },
  {
    id: '2',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: '/book-cover-2.jpg',
    genre: '古典文学',
    year: 1925,
    pages: 180,
    rating: 4.5,
    description:
      '1920年代のアメリカを舞台に、謎めいた大富豪ギャツビーと語り手ニックの物語。アメリカン・ドリームの光と影を鮮やかに描いた20世紀文学の傑作。',
    isFavorite: false,
    tags: ['古典', 'アメリカ文学', '1920年代'],
    reviews: [
      {
        id: 'r3',
        userId: 'u3',
        userName: 'Yuki Nakamura',
        userAvatar: '/avatar-3.jpg',
        rating: 5,
        text: '詩的な文章と悲劇的なロマンスが心に刺さる。何度読んでも新しい発見がある。',
        date: '2024-09-15',
      },
    ],
  },
  {
    id: '3',
    title: '人間失格',
    author: '太宰治',
    cover: '/book-cover-3.jpg',
    genre: '私小説',
    year: 1948,
    pages: 176,
    rating: 4.6,
    description:
      '「恥の多い生涯を送って来ました」という有名な一節で始まる、太宰治の半自伝的傑作。社会に馴染めない主人公の孤独と苦悩を赤裸々に描く。',
    isFavorite: true,
    tags: ['日本文学', '私小説', '太宰治'],
    reviews: [
      {
        id: 'r4',
        userId: 'u2',
        userName: 'Hiroshi Tanaka',
        userAvatar: '/avatar-2.jpg',
        rating: 4,
        text: '読むたびに自分の内面と向き合わされる。太宰の文章は痛々しいほど正直だ。',
        date: '2024-08-30',
      },
    ],
  },
  {
    id: '4',
    title: 'Dune',
    author: 'Frank Herbert',
    cover: '/book-cover-4.jpg',
    genre: 'SF',
    year: 1965,
    pages: 688,
    rating: 4.9,
    description:
      '砂漠の惑星アラキスを舞台に、貴族の若者ポールが宇宙の覇権を巡る壮大な陰謀に巻き込まれる。SF史上最大の叙事詩的傑作。',
    isFavorite: true,
    tags: ['SF', 'スペースオペラ', '古典SF'],
    reviews: [
      {
        id: 'r5',
        userId: 'u3',
        userName: 'Yuki Nakamura',
        userAvatar: '/avatar-3.jpg',
        rating: 5,
        text: 'これほど緻密に構築された世界観はほかにない。読み応えが半端ではない傑作。',
        date: '2024-12-01',
      },
    ],
  },
  {
    id: '5',
    title: '雪国',
    author: '川端康成',
    cover: '/book-cover-5.jpg',
    genre: '純文学',
    year: 1935,
    pages: 176,
    rating: 4.4,
    description:
      '「国境の長いトンネルを抜けると雪国であった」という名文句で始まる、ノーベル賞作家・川端康成の代表作。雪深い温泉地で繰り広げられる儚い恋愛を描く。',
    isFavorite: false,
    tags: ['日本文学', '純文学', 'ノーベル賞'],
    reviews: [],
  },
  {
    id: '6',
    title: 'Normal People',
    author: 'Sally Rooney',
    cover: '/book-cover-6.jpg',
    genre: '現代小説',
    year: 2018,
    pages: 273,
    rating: 4.3,
    description:
      'アイルランドの二人の若者コナーとマリアンが織りなす複雑な恋愛と友情の物語。現代の若者の孤独と繋がりを鋭く描いた話題作。',
    isFavorite: false,
    tags: ['現代文学', 'アイルランド', 'ロマンス'],
    reviews: [
      {
        id: 'r6',
        userId: 'u2',
        userName: 'Hiroshi Tanaka',
        userAvatar: '/avatar-2.jpg',
        rating: 4,
        text: '心理描写が繊細で、キャラクターの感情の揺れが手に取るようにわかる。',
        date: '2024-07-10',
      },
    ],
  },
]

export const otherUsers: User[] = [
  {
    id: 'u2',
    name: 'Hiroshi Tanaka',
    handle: '@hiro_reads',
    avatar: '/avatar-2.jpg',
    bio: '文学と哲学が好き。特に日本近代文学を中心に読んでいます。',
    bookCount: 48,
    favoriteCount: 12,
    books: [myBooks[0], myBooks[2], myBooks[3]],
  },
  {
    id: 'u3',
    name: 'Yuki Nakamura',
    handle: '@yuki_bookworm',
    avatar: '/avatar-3.jpg',
    bio: 'SF・ファンタジー専門。海外文学も積極的に読んでいます。',
    bookCount: 72,
    favoriteCount: 24,
    books: [myBooks[1], myBooks[3], myBooks[4]],
  },
]
