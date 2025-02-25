import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-70 backdrop-blur-md text-white relative z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <Link href="/top">
                <h3 className="text-lg font-semibold mb-4">TOP</h3>
              </Link>
          <div>
  
              <Link href="/services">
                <h3 className="text-lg font-semibold mb-4">3D CADデザイン</h3>
              </Link>

        
          </div>
          <div>
          <Link href="/contact">
            <h3 className="text-lg font-semibold mb-4">会社情報</h3>
          </Link>
                        
             
         
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

