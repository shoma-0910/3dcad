"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Dialog } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion"
import { useState } from "react"

const services = [
  {
    id: "3d-cad-design",
    title: "3D CADデザイン・製作支援",
    description:
      "オリジナル製品やプロトタイプのデザイン、製作を一貫してサポート。ユニークで実用的なアイデアを形にします。",
    longDescription:
      "最新のCADソフトウェアを駆使し、お客様のビジョンを3Dモデルへと変換します。製品設計から試作まで、革新的なソリューションを提供し、アイデアの実現をサポートします。複雑な形状や機構も、高精度で効率的に設計いたします。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9CB9EE6A-06CB-465C-922C-5C399A34D477-UGBzxT5wLo6yCb9gzHQYELHUw4vcLM.jpeg",
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
  { id: 1, title: "自動車部品の設計", image: "/placeholder.svg?height=400&width=600", category: "CAD" },
  { id: 2, title: "建築物の3Dスキャン", image: "/placeholder.svg?height=400&width=600", category: "スキャン" },
  { id: 3, title: "医療機器のプロトタイプ", image: "/placeholder.svg?height=400&width=600", category: "CAD" },
  { id: 4, title: "企業向け3D技術研修", image: "/placeholder.svg?height=400&width=600", category: "研修" },
  { id: 5, title: "文化財のデジタル保存", image: "/placeholder.svg?height=400&width=600", category: "スキャン" },
  { id: 6, title: "工業製品の品質管理", image: "/placeholder.svg?height=400&width=600", category: "スキャン" },
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-black">
            サービス・ポートフォリオ
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
                  className="bg-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full"
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
                  className="bg-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full"
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
                    className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl w-full rounded-2xl bg-gray-800 bg-opacity-90 p-4 sm:p-6 shadow-xl"
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
                            <p className="text-gray-600">{selectedItem.longDescription}</p>
                          ) : (
                            <p className="text-gray-600">カテゴリー: {selectedItem.category}</p>
                          )}
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                </Dialog.Panel>
              </div>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Services

