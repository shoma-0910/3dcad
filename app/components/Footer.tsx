import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-70 backdrop-blur-md text-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">土林さん</h3>
            <p className="text-sm text-gray-300">
              3D技術で未来をデザインする。私たちは、革新的なソリューションで、あなたのビジョンを現実にします。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">サービス</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#3d-cad-design" className="text-gray-300 hover:text-white transition duration-300">
                  3D CADデザイン
                </Link>
              </li>
              <li>
                <Link
                  href="/services#3d-scan-service"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  3Dスキャンサービス
                </Link>
              </li>
              <li>
                <Link
                  href="/services#technical-training"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  技術研修・講座
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">会社情報</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition duration-300">
                  ブログ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">フォローする</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-500 text-center">
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} 土林さん. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

