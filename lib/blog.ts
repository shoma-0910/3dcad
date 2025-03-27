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
      title: "Coming Soon",
      date: "",
      excerpt: "",
      coverImage:
        "",
      images: [
        {
          url: "",
          caption: "",
        },
        {
          url: "",
          caption: "",
        },
      ],
      content: `
        <p></p>
        
        <h2></h2>
        <p></p>
        
        <figure>
          <img src="" />
          <figcaption></figcaption>
        </figure>
        
        <h2></h2>
        <p></p>
        
        <figure>
          <img src="" />
          <figcaption></figcaption>
        </figure>
        
        <h2></h2>
        <p></p>
        
        <h2></h2>
        <p></p>
        
        <p></p>
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
  
  