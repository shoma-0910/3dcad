import Link from "next/link"
import { Facebook, Instagram, HomeIcon, Youtube } from "lucide-react"
import { useState } from "react"
import {  X } from "lucide-react"

const Footer = () => {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false)

  return (
    <>
      <footer className="bg-white text-gray-800 relative z-20 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
          {/* Top section with logo and social links */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-8 border-b border-gray-200">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold tracking-tight">3DCAD</h2>
            </div>

            <div>
         
              <div className="flex space-x-5">
                <a
                  href="https://www.instagram.com/tsucchiii1"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/takumi.tsuch"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.faiz.jp/"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                >
                  <HomeIcon size={20} />
                </a>
                <a
                  href="https://twitter.com/tsucchiii0901"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X（旧Twitter）"
                >
                  <X size={20} />
                </a>
                <a
                  href="https://youtube.com/channel/UC9kBw_65gQDvSqeW1143B3w"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Main links section */}
          <div className="flex flex-col md:flex-row md:justify-evenly items-center mb-10 space-y-4 md:space-y-0">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 inline-block border-b-2 border-primary pb-1">
                <Link href="/" className="hover:text-primary transition-colors duration-300">
                  TOP
                </Link>
              </h3>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 inline-block border-b-2 border-primary pb-1">
                <Link href="/services" className="hover:text-primary transition-colors duration-300">
                  3D CADデザイン
                </Link>
              </h3>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 inline-block border-b-2 border-primary pb-1">
                <Link href="/blog" className="hover:text-primary transition-colors duration-300">
                  ブログ
                </Link>
              </h3>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 inline-block border-b-2 border-primary pb-1">
                <Link href="/contact" className="hover:text-primary transition-colors duration-300">
                  お問い合わせ・会社概要
                </Link>
              </h3>
            </div>
          </div>



          {/* Bottom section with copyright */}
          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} 土林さん. All rights reserved.</p>
            <button
                    onClick={() => setIsPrivacyPolicyOpen(true)}
                    className="text-sm text-gray-600 hover:text-yellow-500 transition-colors duration-300 underline"
                    style={{ cursor: "pointer" }}
                  >
                    プライバシーポリシー
                  </button>
          </div>
        </div>
      </footer>

      {/* プライバシーポリシーモーダル */}
      {isPrivacyPolicyOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">プライバシーポリシー</h2>
              <button onClick={() => setIsPrivacyPolicyOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
         
              </button>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <section>
                  <h3 className="text-lg font-semibold">はじめに</h3>
                  <p className="mt-2">
                    当社（以下「当社」）は、お問い合わせフォームなどを通じて取得するお客様の個人情報の保護を重要視し、適切な管理・運用に努めます。本プライバシーポリシーは、当社が取得する情報、利用目的、管理方法などについて定めたものです。
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">取得する情報</h3>
                  <p className="mt-2">当社は、お問い合わせフォームを通じて、以下の情報を取得する場合があります。</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>お名前</li>
                    <li>メールアドレス</li>
                    <li>お問い合わせ内容</li>
                    <li>その他、必要に応じて追加でご入力いただく情報</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">利用目的</h3>
                  <p className="mt-2">取得した個人情報は、以下の目的で利用いたします。</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>お問い合わせ内容に対する回答、連絡、サービス提供のため</li>
                    <li>サービスの向上・改善のための分析やマーケティング調査のため</li>
                    <li>必要に応じたご案内やお知らせの送付のため（同意を得た場合）</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">個人情報の第三者提供について</h3>
                  <p className="mt-2">
                    当社は、法令に基づく場合を除き、お客様の同意なく第三者に個人情報を提供することはありません。また、サービス提供のために業務委託先（信頼のおけるパートナー）に委託する場合、その範囲内でのみ利用し、適切な管理を行います。
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">個人情報の管理</h3>
                  <p className="mt-2">
                    お客様の個人情報を不正アクセス、紛失、改ざん、漏洩等から保護するため、必要かつ適切な安全管理措置を講じています。
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">お客様ご自身の情報に関する権利</h3>
                  <p className="mt-2">
                    お客様は、当社が保有するご自身の個人情報について、開示、訂正、利用停止、削除等を求める権利を有します。これらのご希望がある場合は、下記の問い合わせ窓口までご連絡ください。
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">クッキー（Cookie）の使用</h3>
                  <p className="mt-2">
                    当社のウェブサイトでは、利用者の利便性向上やアクセス解析のため、クッキーを使用する場合があります。クッキーの利用については、ブラウザの設定により拒否することも可能ですが、その場合、一部機能が正しく動作しない場合があります。
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">プライバシーポリシーの改定</h3>
                  <p className="mt-2">
                    法令の変更やサービス内容の変更に伴い、本プライバシーポリシーを改定する場合があります。改定内容は当社ウェブサイト上で公表し、改定後はその内容が適用されます。
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold">お問い合わせ窓口</h3>
                  <p className="mt-2">本プライバシーポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
                  <div className="mt-2">
                    <p>
                      <strong>【お問い合わせ窓口】</strong>
                    </p>
                    <p>会社名／運営者名：〇〇〇〇</p>
                    <p>メールアドレス：tsuchibayashi.t@gmail.com</p>
                    <p>電話番号：080-6107-7514</p>
                  </div>
                </section>
              </div>
            </div>

            <div className="sticky bottom-0 bg-gray-50 p-4 border-t flex justify-end">
              <button
                onClick={() => setIsPrivacyPolicyOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-300"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer

