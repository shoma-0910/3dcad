export interface BlogPost {
    id: number
    title: string
    date: string
    excerpt: string
    content: string
    coverImage?: string
    images?: {
      url: string
      caption: string
    }[]
  }
  
  // blogPosts配列が正しく定義されていることを確認してください
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "テキスト",
      date: "2023年6月15日",
      excerpt: "テキストテキストテキストテキストテキストテキスト。",
      coverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9CB9EE6A-06CB-465C-922C-5C399A34D477-UGBzxT5wLo6yCb9gzHQYELHUw4vcLM.jpeg",
      images: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/568CE458-8A2E-4012-98DD-FA7177087960-UHg802Qp4Wpo5aJchNPDvEoFL204w2.jpeg",
          caption: "テキストテキストテキストテキストテキスト",
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CEB6CA3F-F442-4966-BB1D-C7F6336AAF89-0Pd8cDCog7miTVCqoINqCZhiZLtmKK.jpeg",
          caption: "テキストテキストテキストテキストテキスト",
        },
      ],
      content: `
        <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        
        <h2>テキストテキストテキストテキスト</h2>
        <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        
        <figure>
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/568CE458-8A2E-4012-98DD-FA7177087960-UHg802Qp4Wpo5aJchNPDvEoFL204w2.jpeg" alt="3Dスキャナーでのデータ収集" />
          <figcaption>テキストテキストテキストテキストテキスト</figcaption>
        </figure>
        
        <h2>テキストテキストテキストテキストテキスト</h2>
        <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        
        <figure>
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CEB6CA3F-F442-4966-BB1D-C7F6336AAF89-0Pd8cDCog7miTVCqoINqCZhiZLtmKK.jpeg" alt="3D試作モデル" />
          <figcaption>テキストテキストテキストテキストテキスト</figcaption>
        </figure>
        
        <h2>テキストテキストテキストテキスト</h2>
        <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
        
        <h2>テキストテキストテキスト</h2>
        <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        
        <p>テキストテキストテキストテキストテキスト</p>
      `,
    },
    {
      id: 2,
      title: "テキスト",
      date: "2023年5月22日",
      excerpt: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。",
     
      content: `
       
      `,
    },
  ]
  
  // getBlogPosts関数が正しく実装されていることを確認してください
  export function getBlogPosts() {
    return blogPosts
  }
  
  export function getBlogPost(id: number): BlogPost | undefined {
    return blogPosts.find((post) => post.id === id)
  }
  
  