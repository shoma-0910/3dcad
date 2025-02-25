"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Service = {
  id: string;
  title: string;
  description: string;
  icon?: string;
};

const FadeInWhenVisible: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem("pageHasAnimated") === "true") {
      setHasAnimated(true);
    }
  }, []);

  // クライアントでマウント完了するまでレンダリングを控える
  if (!mounted) return null;

  return (
    <motion.div
      initial={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        if (!hasAnimated) {
          sessionStorage.setItem("pageHasAnimated", "true");
          setHasAnimated(true);
        }
      }}
    >
      {children}
    </motion.div>
  );
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={service.icon || "/placeholder.svg"}
        alt={service.title}
        width={240}
        height={240}
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-yellow-400">{service.title}</h3>
      
      <Link
        href={`/services#${service.id}`}
        className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition duration-300 group"
      >
        <span className="mr-2">詳細を見る</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};

export default function Home() {
  return (
    // relative z-50 を追加して、ページ全体を最前面に表示する
    <div className="container mx-auto px-4 py-16 space-y-32 relative z-50">
      <section className="mb-32">
        <FadeInWhenVisible>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 artistic-text-shadow text-gray-900"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block text-yellow-600 mb-2">アイデアをカタチに、</span>
              <span className="block">未来をデザインする。</span>
            </motion.h1>
            <p className="text-xl text-black mb-12 max-w-2xl mx-auto">
              革新的な3Dソリューションで、あなたの夢や課題を具現化し、新しい価値を創造します。
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/services"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-10 py-4 rounded-full transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl inline-flex items-center justify-center glow"
              >
                サービス一覧
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/blog"
                className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-10 py-4 rounded-full transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl inline-flex items-center justify-center hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700"
              >
                ブログ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </FadeInWhenVisible>
      </section>

      <section className="mb-32">
        <div className="bg-gray-100 bg-opacity-100 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
          <FadeInWhenVisible>
            <h2 className="text-5xl font-bold mb-16 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700 artistic-text-shadow">
                サービス概要
              </span>
            </h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mb-32">
        <FadeInWhenVisible>
          <h2 className="text-4xl font-bold mb-16 text-center artistic-text-shadow">
            <span className="text-yellow-400">ブログ</span>
          </h2>
          <p className="text-xl text-black mb-12 text-center max-w-3xl mx-auto">
            3D技術の最新トレンド、業界のニュース、そして私たちのサービスに関する情報をお届けします。
          </p>
        </FadeInWhenVisible>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post) => (
            <FadeInWhenVisible key={post.id}>
              <motion.div
                className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-yellow-500/30"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-yellow-500">{post.title}</h3>
                <p className="text-black text-sm mb-4">{post.date}</p>
                <p className="text-black mb-6">{post.excerpt}</p>
                <Link
                  href="blog"
                  className="text-yellow-500 hover:text-yellow-400 inline-flex items-center transition duration-300"
                >
                  続きを読む
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
        <FadeInWhenVisible>
          <div className="text-center mt-16">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-10 py-4 rounded-full transition duration-300 inline-flex items-center justify-center font-semibold text-lg shadow-lg hover:shadow-xl glow"
            >
              すべての記事を見る
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </FadeInWhenVisible>
      </section>
    </div>
  );
}

const services = [
  {
    id: "3d-cad-design",
    title: "3D CADデザイン",
    description:
      "オリジナル製品やプロトタイプのデザイン、製作を一貫してサポート。ユニークで実用的なアイデアを形にします。",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_%E5%86%99%E7%9C%9F%E7%B4%A0%E6%9D%90%E3%81%A6%E3%82%99%E3%81%99_250106_17.jpg-c2UQchBvMHZEGxH6EU0RjijCuTatLn.jpeg",
  },
  {
    id: "3d-scan-service",
    title: "3Dスキャンサービス",
    description:
      "高精度な3Dスキャンを活用し、オブジェクトや人物のデータ化を提供。製品開発や記念品制作、逆算エンジニアリングに対応可能。",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_%E5%86%99%E7%9C%9F%E7%B4%A0%E6%9D%90%E3%81%A6%E3%82%99%E3%81%99_250106_8.jpg-onhvEqPLwjbNlCZg8QvCrZDjJESL6M.jpeg",
  },
  {
    id: "technical-training",
    title: "技術研修・講座",
    description:
      "3Dスキャン研修や3D CAD講座を提供。初心者からプロまで、カスタマイズされた教育プログラムで最新技術の習得を支援。",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINE_ALBUM_%E5%86%99%E7%9C%9F%E7%B4%A0%E6%9D%90%E3%81%A6%E3%82%99%E3%81%99_250106_85.jpg-QCgRMzOBaFxypBRGpe0msvJI74Z3r2.jpeg",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "3Dプリンティングが製造業にもたらす革新",
    date: "2023年6月15日",
    excerpt: "3Dプリンティング技術の進化が、製造業にどのような変革をもたらしているかを解説します。",
    content:
      "3Dプリンティング技術は、製造業に革命をもたらしています。従来の製造方法と比較して、3Dプリンティングは複雑な形状の製品を効率的に作成できるだけでなく、カスタマイズ製品の製造も容易にします。さらに、プロトタイピングの速度を大幅に向上させ、製品開発サイクルを短縮することができます。この技術は、航空宇宙産業、医療機器産業、自動車産業など、様々な分野で活用されており、今後さらなる発展が期待されています。",
  },
  {
    id: 2,
    title: "3D技術を活用した文化財のデジタル保存",
    date: "2023年5月22日",
    excerpt: "3Dスキャンと3Dプリンティング技術を用いた文化財のデジタル保存と活用について紹介します。",
    content:
      "3D技術の進歩により、文化財のデジタル保存が可能になりました。高精度の3Dスキャナーを使用することで、文化財の形状や表面のテクスチャを正確にデジタルデータとして記録することができます。このデータは、文化財の研究や修復に活用されるだけでなく、3Dプリンティング技術を用いてレプリカを作成することも可能です。さらに、バーチャルリアリティ技術と組み合わせることで、世界中の人々がインターネットを通じて文化財を体験できるようになります。このように、3D技術は文化財の保存と普及に大きく貢献しています。",
  },
];
