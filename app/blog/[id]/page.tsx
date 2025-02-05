import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogPost } from '@/lib/blog'
import { motion } from 'framer-motion'

type Props = {
  params: {
    id: string
  }
}

export default function BlogPost({ params }: Props) {
  const post = getBlogPost(parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-12 relative z-10"
    >
      <article className="prose prose-black lg:prose-xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-black">{post.title}</h1>
        <div className="flex items-center text-black mb-8">
          <span>{post.date}</span>
        </div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-black"
          dangerouslySetInnerHTML={{ __html: post.content.replace('枝川さん', '土林さん') }}
        />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 transition duration-300">
            ← ブログ一覧に戻る
          </Link>
        </motion.div>
      </article>
    </motion.div>
  )
}

