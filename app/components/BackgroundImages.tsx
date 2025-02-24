"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const getImagePositions = (path: string) => {
  switch (path) {
    case "/":
      return [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DA353703-B188-4055-9268-0E3559D02CE5-rkbNLrpFPLzICro0szvT1dnnetQR9y.jpeg",
          className: "top-[-5%] left-[-10%] rotate-[-8deg]",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A2548763-E06C-4DF2-8EF2-A5CA566ABDAC-HZspYDAL4M5jzuu9qg2MjHzIJ0imXy.jpeg",
          className: "top-[20%] right-[-15%] rotate-[12deg]",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB04AD86-4266-4C67-AB6F-F15BF495A455-dLIKh2tdBnzBHlTSYe17JwFooZnPcT.jpeg",
          className: "bottom-[-10%] left-[25%] rotate-[5deg]",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CEB6CA3F-F442-4966-BB1D-C7F6336AAF89-0Pd8cDCog7miTVCqoINqCZhiZLtmKK.jpeg",
          className: "bottom-[15%] right-[-5%] rotate-[-10deg]",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BB2848FC-4AD3-4BDE-9C95-F5536EAAEAA8-gv5lUGq9HtT1AZAEnXgaQlHxxQKD0R.jpeg",
          className: "top-[40%] left-[-5%] rotate-[15deg]",
        },
      ]
    default:
      return []
  }
}

export default function BackgroundImages() {
  const pathname = usePathname()
  const images = getImagePositions(pathname)

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -999 }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
            ease: "easeOut",
          }}
          // このスタイルで各画像コンテナを最も背面に配置
          style={{ zIndex: -1 }}
          className={`absolute w-64 h-64 md:w-96 md:h-96 ${image.className} overflow-hidden`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={`Decorative background element ${index + 1}`}
            fill
            className="object-cover w-full h-full opacity-40"
            sizes="(max-width: 768px) 256px, 384px"
          />
          <div className="absolute inset-0 opacity-50" />
        </motion.div>
      ))}
      {/* SVG を画像より上に表示する場合は z-index を 0 に設定 */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        style={{ zIndex: 0 }}
      >
        <path
          d="M0,1000 C200,800 400,900 600,850 S800,700 1000,800 L1000,1000 Z"
          fill="rgba(255,255,255,0.1)"
        />
        <path
          d="M0,1000 C300,950 500,850 700,950 S900,850 1000,950 L1000,1000 Z"
          fill="rgba(255,255,255,0.05)"
        />
        <path
          d="M0,1000 C150,950 350,900 550,950 S750,850 1000,900 L1000,1000 Z"
          fill="rgba(255,255,255,0.025)"
        />
      </svg>
    </div>
  )
}
