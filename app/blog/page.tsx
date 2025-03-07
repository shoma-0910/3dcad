"use client"

import { useState } from "react"
import { getBlogPosts, type BlogPost } from "@/lib/blog"
import { Dialog } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import BlogPostContent from "@/app/components/BlogPostContent"
import { motion, AnimatePresence } from "framer-motion"

export default function BlogPage() {
  const blogPosts = getBlogPosts()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const postsPerPage = 6
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl md:text-6xl font-bold mb-12 text-center text-black font-display">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              ブログ・ニュース
            </span>
          </h1>
        </motion.div>

        <div className="space-y-8">
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col md:flex-row">
                
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-semibold mb-3 text-black">{post.title}</h2>
                  <div className="flex items-center text-black mb-3">
                    <span>{post.date}</span>
                  </div>
                  <p className="text-black mb-4 flex-grow">{post.excerpt}</p>
                  <motion.button
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition duration-300 font-semibold hover:scale-105 transform self-start"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    続きを読む
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.button>
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          {Array.from({ length: Math.ceil(blogPosts.length / postsPerPage) }, (_, i) => (
            <motion.button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-4 py-2 rounded-full text-base font-semibold transition-all duration-300 ${
                currentPage === i + 1 ? "bg-yellow-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {i + 1}
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selectedPost && (
            <Dialog open={selectedPost !== null} onClose={() => setSelectedPost(null)} className="relative z-50">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70"
                aria-hidden="true"
              />
              <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
                <Dialog.Panel>
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mx-auto max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-xl relative"
                  >
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                    <BlogPostContent post={selectedPost} className="overflow-y-auto text-gray-800" />
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

