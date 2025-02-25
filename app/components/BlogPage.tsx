import { useState } from "react"
import { getBlogPosts,type BlogPost} from "@/lib/blog"
import Image from "next/image"
import { Dialog } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
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
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div>
          <h1 className="text-4xl font-bold mb-8 text-center text-black">ブログ・ニュース</h1>
          <p className="text-xl text-black mb-12 text-center max-w-3xl mx-auto">テキストテキスト</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <div key={post.id}>
              <article className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full flex flex-col">
                {post.coverImage && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <span className="absolute top-2 left-2 bg-red-600 text-red px-2 py-1 rounded-full text-sm">
                      NEW
                    </span>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-semibold mb-4 text-black">{post.title}</h2>
                  <div className="flex items-center text-black mb-4">
                    <span>{post.date}</span>
                  </div>
                  <p className="text-black mb-6 flex-grow">{post.excerpt}</p>
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition duration-300 font-semibold"
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
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          {Array.from({ length: Math.ceil(blogPosts.length / postsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-4 py-2 rounded-full text-base font-semibold transition-all duration-300 ${
                currentPage === i + 1 ? "bg-yellow-500 text-black" : "bg-gray-700 text-black hover:bg-gray-600"
              }`}
            >
              {i + 1}
            </button>
          ))}

          
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <Dialog
            open={!!selectedPost}
            onClose={() => setSelectedPost(null)}
            className="relative z-50"
          >
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <div className="fixed inset-0 bg-black bg-opacity-75" aria-hidden="true" />

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white rounded-lg max-w-4xl w-full mx-auto p-6"
              >
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
                <div className="relative h-[400px] w-full mb-4">
                  <Image
                    src={selectedPost.coverImage || "/placeholder.svg"}
                    alt={selectedPost.title}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <h2 className="text-2xl font-semibold mb-4">{selectedPost.title}</h2>
                <p className="text-gray-600 mb-4">{selectedPost.date}</p>
                <p className="text-gray-800">{selectedPost.content}</p>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  )
}
