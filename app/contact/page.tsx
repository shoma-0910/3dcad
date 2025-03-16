"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import Head from "next/head"
import BackgroundImages from "../components/BackgroundImages"

export default function Contact() {
  const [isHovered, setIsHovered] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <>
      <Head>
        {/* 基本設定 */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>お問い合わせ・会社概要 - 3DCAD</title>
        <meta
          name="description"
          content="お問い合わせフォームと会社概要。3DCADが提供する最新のサービス情報、連絡先、ミッション、ビジョンを掲載。お気軽にご連絡ください。"
        />
        <meta name="keywords" content="お問い合わせ, 3DCAD, 会社概要, サービス, 連絡先, ミッション, ビジョン" />
        <link rel="canonical" href="https://yourwebsite.com/contact" />

        {/* Open Graph / SNS 用 */}
        <meta property="og:title" content="お問い合わせ・会社概要 - 3DCAD" />
        <meta
          property="og:description"
          content="お問い合わせフォームと会社概要。3DCADが提供する最新のサービス情報、連絡先、ミッション、ビジョンを掲載。お気軽にご連絡ください。"
        />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
        <meta property="og:image" content="https://yourwebsite.com/path/to/og-image.jpg" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="お問い合わせ・会社概要 - 3DCAD" />
        <meta
          name="twitter:description"
          content="お問い合わせフォームと会社概要。3DCADが提供する最新のサービス情報、連絡先、ミッション、ビジョンを掲載。お気軽にご連絡ください。"
        />
        <meta name="twitter:image" content="https://yourwebsite.com/path/to/twitter-image.jpg" />
      </Head>
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
          <h1 className="text-3xl md:text-6xl font-bold mb-12 text-center text-black font-display">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              お問い合わせ・会社概要
            </span>
          </h1>

          <div className="flex justify-center items-center mb-6">
            <h2 className="text-3xl font-semibold text-black">会社概要</h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <motion.section>
              <div className="relative z-50" style={{ zIndex: 9999 }}>
                {/* フォームコンテナ */}
                <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                  <div className="px-6 py-4">
                    <p className="text-sm text-gray-600 mt-1">
                      ご質問やご意見がございましたら、お気軽にお問い合わせください。
                    </p>
                  </div>

                  <form
                    action="https://formsubmit.co/cs.tkst.4strings@gmail.com"
                    method="POST"
                    onSubmit={() => setIsSubmitting(true)}
                    className="px-6 py-4"
                  >
                    {/* FormSubmit.co 設定 */}
                    <input type="hidden" name="_subject" value="新しいお問い合わせが届きました" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="text" name="_honey" style={{ display: "none" }} />
                    <input type="hidden" name="_template" value="table" />

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          お名前
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="山田 太郎"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          style={{ pointerEvents: "auto" }}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          メールアドレス
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="example@example.com"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          style={{ pointerEvents: "auto" }}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          メッセージ
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          placeholder="お問い合わせ内容をご記入ください"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          style={{ pointerEvents: "auto" }}
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                          isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                        }`}
                        style={{ pointerEvents: "auto" }}
                      >
                        {isSubmitting ? "送信中..." : "送信する"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.section>
            <div className="max-w-5xl mx-auto mt-10">
              <motion.section
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mb-16"
              >
                <div className="flex justify-center items-center mb-6">
                  <h2 className="text-3xl font-semibold text-black">会社概要</h2>
                </div>

                <div className="bg-white backdrop-blur-md p-8 rounded-2xl shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="text-xl font-semibold mb-3 text-yellow-400">ミッション</h3>
                      <p className="text-black">
                        「創造をサポートし、誰もが技術を楽しめる世界を実現する。」クリエイターや企業が抱える課題に寄り添い、3D技術や教育を通じて、アイデアを実現しやすい環境を提供します。
                      </p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-xl shadow-md">
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
                <div className="bg-white backdrop-blur-md p-8 rounded-2xl shadow-lg">
                  <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      onHoverStart={() => setIsHovered("address")}
                      onHoverEnd={() => setIsHovered("")}
                      className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center"
                    >
                      <MapPin
                        className={`w-12 h-12 mb-4 ${
                          isHovered === "address" ? "text-yellow-400" : "text-gray-400"
                        } transition-colors duration-300`}
                      />
                      <p className="text-black">〒552-0011</p>
                      <p>大阪府大阪市港区南市岡2-12-27</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      onHoverStart={() => setIsHovered("phone")}
                      onHoverEnd={() => setIsHovered("")}
                      className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center"
                    >
                      <Phone
                        className={`w-12 h-12 mb-4 ${
                          isHovered === "phone" ? "text-yellow-400" : "text-gray-400"
                        } transition-colors duration-300`}
                      />
                      <p className="text-black">080-6107-7514</p>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      onHoverStart={() => setIsHovered("email")}
                      onHoverEnd={() => setIsHovered("")}
                      className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center"
                    >
                      <Mail
                        className={`w-12 h-12 mb-4 ${
                          isHovered === "email" ? "text-yellow-400" : "text-gray-400"
                        } transition-colors duration-300`}
                      />
                      <p className="text-black">tsuchibayashi.t@gmail.com</p>
                    </motion.div>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
