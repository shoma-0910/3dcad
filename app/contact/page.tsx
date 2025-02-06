"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import BackgroundImages from "../components/BackgroundImages"

export default function Contact() {
  const [isHovered, setIsHovered] = useState("")

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <BackgroundImages />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10"
      >
        <h1 className="text-5xl font-bold mb-12 text-center text-black font-display">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            お問い合わせ・会社概要
          </span>
        </h1>

        <div className="max-w-5xl mx-auto">
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold mb-6 text-center text-black">お問い合わせ</h2>
            <div className="text-center">
              <motion.a
                href="mailto:cs.tkst.4strings@gmail.com?subject=お問い合わせ&body=以下にお問い合わせ内容をご記入ください。"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-full transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                メールでのお問い合わせ
              </motion.a>
            </div>
          </motion.section>

          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold mb-6 text-center text-black">会社概要</h2>
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
              <Image src="/logo.svg" alt="" width={200} height={200} className="mx-auto mb-6" />
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white bg-opacity-20 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">ミッション</h3>
                  <p className="text-black">
                    「創造をサポートし、誰もが技術を楽しめる世界を実現する。」クリエイターや企業が抱える課題に寄り添い、3D技術や教育を通じて、アイデアを実現しやすい環境を提供します。
                  </p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="bg-white bg-opacity-20 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">ビジョン</h3>
                  <p className="text-black">
                    「3D技術の力で、次世代のクリエイティブスタンダードを築く。」教育、製造、デザイン分野で3D技術を普及させ、人々の創造力を最大限に引き出す未来を目指します。
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-black text-center">連絡先情報</h2>
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setIsHovered("address")}
                  onHoverEnd={() => setIsHovered("")}
                  className="bg-white bg-opacity-20 p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center"
                >
                  <MapPin
                    className={`w-12 h-12 mb-4 ${isHovered === "address" ? "text-yellow-400" : "text-gray-400"} transition-colors duration-300`}
                  />
                  <p className="text-black">〒100-0001 東京都千代田区千代田1-1-1</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setIsHovered("phone")}
                  onHoverEnd={() => setIsHovered("")}
                  className="bg-white bg-opacity-20 p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center"
                >
                  <Phone
                    className={`w-12 h-12 mb-4 ${isHovered === "phone" ? "text-yellow-400" : "text-gray-400"} transition-colors duration-300`}
                  />
                  <p className="text-black">03-1234-5678</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setIsHovered("email")}
                  onHoverEnd={() => setIsHovered("")}
                  className="bg-white bg-opacity-20 p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center"
                >
                  <Mail
                    className={`w-12 h-12 mb-4 ${isHovered === "email" ? "text-yellow-400" : "text-gray-400"} transition-colors duration-300`}
                  />
                  <p className="text-black">cs.tkst.4strings@gmail.com</p>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  )
}

