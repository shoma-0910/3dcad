/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import { Home, Briefcase, Mail, Book, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import BackgroundImages from "./components/BackgroundImages";
import Footer from "./components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-notojp",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(1);
  // usePathname を使って現在のパスを取得
  const pathname = usePathname();

  useEffect(() => {
    // mounted 状態は不要なため setMounted を削除
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 200;
      const minOpacity = pathname === "/" ? 0.3 : 0.5;
      if (scrollPosition <= maxScroll) {
        const newOpacity = 1 - (scrollPosition / maxScroll) * (1 - minOpacity);
        setHeaderOpacity(newOpacity);
      } else {
        setHeaderOpacity(minOpacity);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navItems = [
    { href: "/", label: "TOP", icon: Home },
    { href: "/services", label: "サービス一覧", icon: Briefcase },
    { href: "/blog", label: "ブログ", icon: Book },
    { href: "/contact", label: "お問い合わせ", icon: Mail },
  ];

  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="bg-yellow-50 text-gray-900 flex flex-col min-h-screen">
        {/* Top Navigation Bar */}
        <header
          className="fixed top-0 left-0 w-full bg-white bg-opacity-80 backdrop-blur-md z-20 transition-opacity duration-300"
          style={{
            backgroundColor: `rgba(255, 255, 255, ${
              pathname === "/" ? headerOpacity * 0.8 : headerOpacity * 0.9
            })`,
          }}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center">
                <div className="text-2xl font-bold text-gray-900">3DCAD</div>
              </Link>
              {/* Desktop Navigation */}
              <nav className="hidden md:block">
                <ul className="flex space-x-8">
                  {navItems.map((item) => (
                    <li key={item.href} className="transition-colors duration-300">
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-2 text-sm ${
                          pathname === item.href
                            ? "text-yellow-500"
                            : "text-black hover:text-yellow-500"
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              {/* Mobile Menu Button */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-900">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-x-0 top-16 bg-black bg-opacity-50 backdrop-blur-md z-50 md:hidden">
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-3 ${
                        pathname === item.href ? "text-yellow-500" : "text-white"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}

        {/* Main Content */}
        <div className="pt-16 flex-grow">{children}</div>

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

        {/* Footer */}
        <Footer />

        {/* Background Elements */}
        <div className="fixed inset-0 z-0">
          <BackgroundImages />
        </div>
      </body>
    </html>
  );
}
