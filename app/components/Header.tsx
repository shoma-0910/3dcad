import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-yellow-100 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-yellow-800 hover:text-yellow-600 transition duration-300">枝川さん</Link>
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-yellow-700 hover:text-yellow-500 transition duration-300 border-b-2 border-transparent hover:border-yellow-500">ホーム</Link></li>
            <li><Link href="/services" className="text-yellow-700 hover:text-yellow-500 transition duration-300 border-b-2 border-transparent hover:border-yellow-500">サービス・ポートフォリオ</Link></li>
            <li><Link href="/contact" className="text-yellow-700 hover:text-yellow-500 transition duration-300 border-b-2 border-transparent hover:border-yellow-500">問い合わせ・会社概要</Link></li>
            <li><Link href="/blog" className="text-yellow-700 hover:text-yellow-500 transition duration-300 border-b-2 border-transparent hover:border-yellow-500">ブログ</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header

