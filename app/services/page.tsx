"use client"

import { useState } from "react"
import Image from "next/image"
import Head from "next/head"
import { Dialog } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { motion } from "framer-motion"

// 型定義
type Item = {
  id: string | number
  title: string
  description?: string
  longDescription?: string
  image: string
  category?: string
}

// サービス・ポートフォリオ用のデータ
const services = [
  {
    id: "3d-cad-design",
    title: "3DCADデザイン",
    description:
      "オリジナル製品やプロトタイプのデザイン、製作を一貫してサポート。ユニークで実用的なアイデアを形にします。",
    longDescription:
      "最新のCADソフトウェアを駆使し、お客様のビジョンを3Dモデルへと変換します。製品設計から試作まで、革新的なソリューションを提供し、アイデアの実現をサポートします。複雑な形状や機構も、高精度で効率的に設計いたします。",
    image: "/3DCAD.jpg"
  },
  {
    id: "3d-scan-service",
    title: "3Dスキャンサービス",
    description:
      "高精度な3Dスキャンを活用し、オブジェクトや人物のデータ化を提供。製品開発や記念品制作、逆算エンジニアリングに対応可能。",
    longDescription:
      "最新の3Dスキャン技術を使用して、実物を正確にデジタルデータ化します。品質管理、文化財のデジタル保存、カスタムフィッティングなど、幅広い用途に対応します。大型の工業製品から繊細な芸術作品まで、あらゆる対象物に対応可能です。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/568CE458-8A2E-4012-98DD-FA7177087960-UHg802Qp4Wpo5aJchNPDvEoFL204w2.jpeg",
  },
  {
    id: "technical-training",
    title: "技術研修・講座",
    description:
      "3Dスキャン研修や3D CAD講座を提供。初心者からプロまで、カスタマイズされた教育プログラムで最新技術の習得を支援。",
    longDescription:
      "3Dスキャン研修：初級からプロ向けまで、最新の3Dスキャン技術の習得を支援。実践的なワークショップを通じて、効率的なスキャン手法や後処理技術を学びます。3D CAD講座：子どもからクリエイター、プロフェッショナルまで対応可能なカスタマイズされた教育プログラムを提供。Fusion 360を活用した設計の基礎から応用技術まで網羅し、3D設計スキルの向上をサポートします。",
    image: "/mozaiku.png",
  }
]

const portfolioItems: Item[] = [
  { id: 1, title: "鳥", image: "/bird.jpeg", category: "" },
  { id: 2, title: "人物を3Dスキャン", image: "/hito_before.jpeg", category: "" },
  { id: 3, title: "人物3Dスキャンしたデータを3Dプリント(フィギュア化)", image: "/hito_after.jpeg", category: "" },
  { id: 4, title: "ごえんお結び　BEFORE", image: "/onigiri_before.jpeg", category: "" },
  { id: 5, title: "ごえんお結び　AFTER", image: "/onigiri_after.jpeg", category: "" },
  { id: 6, title: "建物", image: "/house.jpeg", category: "" },
  { id: 7, title: "オリジナル名前入りゴルフマーカー⛳️", image: "/golf1.jpg", category: "" },
  { id: 8, title: "オリジナル名前入りゴルフマーカー⛳️", image: "/golf2.jpg", category: "" },
  { id: 9, title: "企業向け3D看板", image: "/skystage.jpg", category: "" },
  { id: 10, title: " 桜の根付【記念品・ノベルティ】", image: "/river.jpg", category: "" },

]

// アニメーション用の variants
const portfolioContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const portfolioItemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -10 },
  visible: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
}

const Services: React.FC = () => {
  // 型定義を明示して selectedItem の型を Item | null にする
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>サービス・ポートフォリオ - 3DCAD</title>
        <meta
          name="description"
          content="革新的な3DCADデザイン、3Dスキャンサービス、技術研修・講座の紹介と実績ポートフォリオ。最新技術とデザインで未来を切り拓くサービスを提供します。"
        />
        <meta name="keywords" content="3DCAD, 3Dスキャン, 技術研修, ポートフォリオ, サービス, デザイン" />
        <link rel="canonical" href="https://yourwebsite.com/services" />
        <meta property="og:title" content="サービス・ポートフォリオ - 3DCAD" />
        <meta
          property="og:description"
          content="革新的な3DCADデザイン、3Dスキャンサービス、技術研修・講座の紹介と実績ポートフォリオ。最新技術とデザインで未来を切り拓くサービスを提供します。"
        />
        <meta property="og:url" content="https://yourwebsite.com/services" />
        <meta property="og:image" content="https://yourwebsite.com/path/to/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="サービス・ポートフォリオ - 3DCAD" />
        <meta
          name="twitter:description"
          content="革新的な3DCADデザイン、3Dスキャンサービス、技術研修・講座の紹介と実績ポートフォリオ。最新技術とデザインで未来を切り拓くサービスを提供します。"
        />
        <meta name="twitter:image" content="https://yourwebsite.com/path/to/twitter-image.jpg" />
      </Head>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 bg-yellow-50" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
          {/* タイトル */}
          <h1 className="text-3xl md:text-6xl font-bold mb-12 text-center text-black font-display">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              サービス・ポートフォリオ
            </span>
          </h1>

          {/* サービス紹介 */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-black text-center">サービス紹介</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
                    <p className="mb-4">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ポートフォリオ（アニメーション付き） */}
          <motion.section
            className="mb-16"
            initial="hidden"
            animate="visible"
            variants={portfolioContainerVariants}
          >
            <h2 className="text-3xl font-semibold mb-8 text-black text-center">ポートフォリオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={portfolioItemVariants}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                  onClick={() => setSelectedItem(item)}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-black">{item.title}</h3>
                    <span className="text-gray-600">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* モーダル */}
          {selectedItem && (
            <Dialog open={true} onClose={() => setSelectedItem(null)} className="relative z-50">
              <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
              <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="mx-auto max-w-6xl w-full rounded-2xl bg-white bg-opacity-90 p-8 shadow-xl">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-2 right-2 text-gray-300 hover:text-white"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                  <div>
                    <Image
                      src={selectedItem.image || "/placeholder.svg"}
                      alt={selectedItem.title}
                      width={600}
                      height={400}
                      className="w-full h-48 sm:h-64 object-cover rounded-t-2xl mb-4"
                    />
                    <Dialog.Title className="text-xl sm:text-2xl font-semibold mb-2 text-black">
                      {selectedItem.title}
                    </Dialog.Title>
                    {"longDescription" in selectedItem ? (
                      <p className="text-black">{selectedItem.longDescription}</p>
                    ) : null}
                  </div>
                </Dialog.Panel>
              </div>
            </Dialog>
          )}
        </div>
      </div>
    </>
  )
}

export default Services
