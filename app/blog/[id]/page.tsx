"use client";

// app/blog/[id]/page.tsx
import { useParams } from "next/navigation";
import { getBlogPost, type BlogPost } from "@/lib/blog";
import BlogPostContent from "@/app/components/BlogPostContent";

export default function BlogPostPage() {
  const params = useParams();
  const postId = params.id; // URLの [id] を取得

  const maybePost = getBlogPost(Number(postId));
  if (!maybePost) {
    return <div>記事が見つかりません。</div>;
  }
  const post: BlogPost = maybePost;

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogPostContent post={post} />
    </div>
  );
}
