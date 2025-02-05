import Image from "next/image"
import type { BlogPost } from "@/lib/blog"

interface BlogPostContentProps {
  post: BlogPost
  className?: string
}

export default function BlogPostContent({ post, className = "" }: BlogPostContentProps) {
  return (
    <div className={className}>
      <article className="prose prose-invert lg:prose-xl mx-auto">
        {post.coverImage && (
          <div className="mb-8">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full rounded-lg object-cover aspect-video"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
        <div className="flex items-center text-gray-300 mb-8">
          <span>{post.date}</span>
        </div>
        <div
          className="text-white [&_figure]:my-8 [&_figure]:mx-0 [&_img]:rounded-lg [&_figcaption]:text-center [&_figcaption]:text-gray-400 [&_figcaption]:mt-2"
          dangerouslySetInnerHTML={{ __html: post.content.replace("枝川さん", "土林さん") }}
        />
      </article>
    </div>
  )
}

