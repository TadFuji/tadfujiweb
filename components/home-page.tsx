'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Facebook, Twitter, Instagram, X, Linkedin } from 'lucide-react'
import Image from 'next/image'

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showSocialLinks, setShowSocialLinks] = useState(false)
  const [showAbout, setShowAbout] = useState(false)

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/profile.php?id=869745499', color: '#1877F2' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/yourusername', color: '#1DA1F2' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/yourusername', color: '#E4405F' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/yourusername', color: '#0A66C2' },
  ]

  const aboutContent = [
    { year: '1961', content: '神戸市須磨区で生まれる。' },
    { year: '1978', content: '高校卒業後、海外放浪の旅に出る。' },
    { year: '1982', content: '日本に強制送還される。初めての東京。' },
    { year: '1984', content: '映画や舞台、テレビ、ビデオ向けの作曲や編曲を開始。今では当たり前だが、当時はまだ珍しいコンピューターを使った音楽制作を行う。' },
    { year: '1986', content: '先輩の作曲家とともに楽曲制作専門の株式会社を設立。' },
    { year: '1988', content: '新宿に個人スタジオ開設。多額の報酬を得られるようになり、健康を害するほど生活が乱れる。' },
    { year: '1990', content: '週に４〜５回しか眠らない日々が続く。そして、ダウン…。東京女子医大の ICU に入院、生死の境をさまよう。' },
    { year: '1991', content: '結婚を機に神奈川県茅ヶ崎市に移住。仕事としての音楽を徐々に休止。共生研究会発足。地球環境問題に対して積極的な活動を展開。副業的に執筆業（ＩＴやウェブ系）を行う。' },
    { year: '1994', content: '㈱NEW VISION SUPPLY社を買収。インターネット接続業（ＩＳＰ／プロバイダ） KIWI internet を創業。並行して KIWI Radio や KIWI TV など、インターネットを介した音や映像の配信実験を行い、一定の成果を得る。' },
    { year: '1995', content: '最先端技術・最先端デザインを積極的に採り入れたウェブ制作チームを結成する。環境破壊や動物虐待、人種差別などの問題に対しさらに本格的に取り組み始める。' },
    { year: '2000', content: '事業を急速に拡大。株式の第三者割当を始める。' },
    { year: '2001', content: '本社を赤坂から原宿・表参道に移し、ＩＴ関連会社だけではなく、音楽雑誌出版社や人材派遣会社など複数の会社を経営しながら、ダイニングバー、タレントプロデュース、音楽出版などを行う。上場準備開始。並行して、代々木公園で行われている「アースデイ東京」をスポンサードするなど、企業としても地球環境改善に対して力を注ぐ。' },
    { year: '2003', content: '尊敬する経営者から「株を公開したら後悔するぞ」と言われ株式公開を中止。' },
    { year: '2007', content: 'すべての会社の代表取締役を辞任。自由人に。Twitterを使い、茅ヶ崎の情報発信を開始。' },
    { year: '2015', content: '茅ヶ崎市議会議員選挙に立候補したが、300票ほど足りず苦杯をなめる。' },
    { year: '2017', content: 'UUUMに所属。' },
    { year: '2018', content: '茅ヶ崎市内に動画・音楽制作スタジオを開設。湘南国際マラソンでフルマラソンに初挑戦。５時間57分でなんとか完走💦' },
    { year: '2019', content: 'Facebook「茅ヶ崎テレビ」の登録者数が３万人に。' },
    { year: '2020', content: '茅ヶ崎テレビの姉妹サイト「大磯・二宮なかよしテレビ」開設。茅ヶ崎テレビの１日の平均アクセスユニーク人数が3万5千人を超える。' },
    { year: '2021', content: '茅ヶ崎市明るい選挙推進協議会にて選挙啓発活動を開始' },
    { year: '2023', content: 'Stable Diffusion を活用し、静止画や動画の生成を開始' },
    { year: '2024', content: '紹介制経営者会 守成クラブ 湘南中央 入会' },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="text-xl font-semibold">Hiro</a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
          <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none`}>
            {['About', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => item === 'About' ? setShowAbout(true) : null}
                  className="block px-4 py-2 hover:text-gray-600 transition-colors duration-300"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="pt-16">
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Hiro's avatar"
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Hello, I am Hiro
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              CEO (Chotto Eroi Oyaji)
            </motion.p>
            <motion.button 
              onClick={() => setShowSocialLinks(true)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Get in touch
            </motion.button>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {showSocialLinks && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSocialLinks(false)}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Connect with me</h2>
                <button 
                  onClick={() => setShowSocialLinks(false)} 
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close social links"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                    style={{ backgroundColor: link.color }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    aria-label={`Visit my ${link.name} profile`}
                  >
                    <link.icon className="w-8 h-8 mb-2 text-white" aria-hidden="true" />
                    <span className="text-white font-semibold">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {showAbout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAbout(false)}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-8 rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">My Journey</h2>
                <button 
                  onClick={() => setShowAbout(false)} 
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close about section"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-8">
                {aboutContent.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 w-24 text-2xl font-bold text-gray-400">{item.year}</div>
                    <div className="flex-grow pl-8 border-l-2 border-gray-300">
                      <div className="relative pb-8">
                        <span className="absolute top-0 left-0 -ml-[9px] h-4 w-4 rounded-full bg-gray-300"></span>
                        <p className="text-lg">{item.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
