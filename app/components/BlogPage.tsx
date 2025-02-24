/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react"
import { getBlogPosts,type BlogPost} from "@/lib/blog"
import Image from "next/image"

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
                currentPage === i + 1 ? "bg-yellow-500 text-white" : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
            >
              {i + 1}
            </button>
          ))}

          
        </div>
      </div>
    </div>
    
  )
}
