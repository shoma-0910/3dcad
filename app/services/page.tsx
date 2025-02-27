"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Dialog } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion"


const services = [
  {
    id: "3d-cad-design",
    title: "3DCADデザイン",
    description:
      "オリジナル製品やプロトタイプのデザイン、製作を一貫してサポート。ユニークで実用的なアイデアを形にします。",
    longDescription:
      "最新のCADソフトウェアを駆使し、お客様のビジョンを3Dモデルへと変換します。製品設計から試作まで、革新的なソリューションを提供し、アイデアの実現をサポートします。複雑な形状や機構も、高精度で効率的に設計いたします。",
    image: "/3DCADデザイン.jpg"
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
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_%E5%86%99%E7%9C%9F%E7%B4%A0%E6%9D%90%E3%81%A6%E3%82%99%E3%81%99_250106_85.jpg-QCgRMzOBaFxypBRGpe0msvJI74Z3r2.jpeg",
  },
]

const portfolioItems = [
  { id: 1, title: "テキスト", image: "/bird.jpeg", category: "" },
  { id: 2, title: "テキスト", image: "/hito_before.jpeg", category: "" },
  { id: 3, title: "テキスト", image: "/hito_after.jpeg", category: "" },
  { id: 4, title: "テキスト", image: "/onigiri_before.jpeg", category: "" },
  { id: 5, title: "テキスト", image: "/onigiri_after.jpeg", category: "" },
  { id: 6, title: "テキスト", image: "/house.jpeg", category: "" },
]

const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      {children}
    </motion.div>
  )
}

type Item = {
  id: string | number;
  title: string;
  description?: string;
  longDescription?: string;
  image: string;
  category?: string;
}

const Services: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0 bg-yellow-50" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        <AnimatedSection>
        <h1 className="text-5xl font-bold mb-12 text-center text-black font-display">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            サービス・ポートフォリオ
          </span>
        </h1>
        </AnimatedSection>
        <AnimatedSection>
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-black text-center">サービス紹介</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full"
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
                    <p className=" mb-4 flex-grow" >{service.description}</p>
                    <button
                      onClick={() => setSelectedItem(service)}
                      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                    >
                      詳細を見る
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>
        <AnimatedSection>
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-black text-center">ポートフォリオ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full"
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
          </section>
        </AnimatedSection>
        <AnimatePresence>
          {selectedItem && (
            <Dialog open={selectedItem !== null} onClose={() => setSelectedItem(null)} className="relative z-50">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/70"
                aria-hidden="true"
              />
              <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel>
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.9, opacity: 0 }}
    transition={{ duration: 0.3 }}
    // max-w-5xl を max-w-6xl に変更し、p-6 も少し調整
    className="mx-auto max-w-6xl w-full rounded-2xl bg-white bg-opacity-90 p-8 shadow-xl"
  >
    <button
      onClick={() => setSelectedItem(null)}
      className="absolute top-2 right-2 text-gray-300 hover:text-white"
    >
      <XMarkIcon className="h-6 w-6" />
    </button>
    {selectedItem && (
      <div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Image
            src={selectedItem.image || "/placeholder.svg"}
            alt={selectedItem.title}
            width={600}
            height={400}
            className="w-full h-48 sm:h-64 object-cover rounded-t-2xl mb-4"
          />
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Dialog.Title className="text-xl sm:text-2xl font-semibold mb-2 text-black">
            {selectedItem.title}
          </Dialog.Title>
          {"longDescription" in selectedItem ? (
            <p className="text-black">{selectedItem.longDescription}</p>
          ) : null}
        </motion.div>
      </div>
    )}
  </motion.div>
</Dialog.Panel>

              </div>
            </Dialog>
          )}
        </AnimatePresence>
          {/* Decorative curves background */}
          <div
            className="fixed inset-0 pointer-events-none overflow-hidden"
            style={{ zIndex: -2 }}
          >
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1920 1080"
              preserveAspectRatio="none"
            >
              {/* Blue curves */}
              <path
                d="M0,100 C400,150 800,50 1920,100"
                fill="none"
                stroke="rgba(135, 206, 235, 0.2)"
                strokeWidth="2"
              />
              <path
                d="M0,150 C600,200 1000,100 1920,150"
                fill="none"
                stroke="rgba(135, 206, 235, 0.15)"
                strokeWidth="2"
              />
              <path
                d="M0,200 C500,250 900,150 1920,200"
                fill="none"
                stroke="rgba(135, 206, 235, 0.1)"
                strokeWidth="2"
              />

              {/* Pink curves */}
              <path
                d="M0,400 C400,450 800,350 1920,400"
                fill="none"
                stroke="rgba(255, 182, 193, 0.2)"
                strokeWidth="2"
              />
              <path
                d="M0,450 C600,500 1000,400 1920,450"
                fill="none"
                stroke="rgba(255, 182, 193, 0.15)"
                strokeWidth="2"
              />
              <path
                d="M0,500 C500,550 900,450 1920,500"
                fill="none"
                stroke="rgba(255, 182, 193, 0.1)"
                strokeWidth="2"
              />

              {/* Green curves */}
              <path
                d="M0,700 C400,750 800,650 1920,700"
                fill="none"
                stroke="rgba(144, 238, 144, 0.2)"
                strokeWidth="2"
              />
              <path
                d="M0,750 C600,800 1000,700 1920,750"
                fill="none"
                stroke="rgba(144, 238, 144, 0.15)"
                strokeWidth="2"
              />
              <path
                d="M0,800 C500,850 900,750 1920,800"
                fill="none"
                stroke="rgba(144, 238, 144, 0.1)"
                strokeWidth="2"
              />
            </svg>
          </div>

      </div>
    </div>
  )
}

export default Services
