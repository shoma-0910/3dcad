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
      title: "3Dプリンティングが製造業にもたらす革新",
      date: "2023年6月15日",
      excerpt: "3Dプリンティング技術の進化が、製造業にどのような変革をもたらしているかを解説します。",
      coverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9CB9EE6A-06CB-465C-922C-5C399A34D477-UGBzxT5wLo6yCb9gzHQYELHUw4vcLM.jpeg",
      images: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/568CE458-8A2E-4012-98DD-FA7177087960-UHg802Qp4Wpo5aJchNPDvEoFL204w2.jpeg",
          caption: "最新の3Dスキャナーを使用したデータ収集の様子",
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CEB6CA3F-F442-4966-BB1D-C7F6336AAF89-0Pd8cDCog7miTVCqoINqCZhiZLtmKK.jpeg",
          caption: "3Dプリントで作成された試作モデル",
        },
      ],
      content: `
        <p>3Dプリンティング技術は、製造業に革命をもたらしています。本記事では、この技術が様々な産業にどのような影響を与えているかを詳しく見ていきます。</p>
        
        <h2>1. カスタマイズ製品の製造</h2>
        <p>3Dプリンティングにより、個々の顧客ニーズに合わせた製品を効率的に製造することが可能になりました。医療機器から家具まで、様々な分野でカスタマイズ製品の需要が高まっています。</p>
        
        <figure>
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/568CE458-8A2E-4012-98DD-FA7177087960-UHg802Qp4Wpo5aJchNPDvEoFL204w2.jpeg" alt="3Dスキャナーでのデータ収集" />
          <figcaption>最新の3Dスキャナーを使用したデータ収集の様子</figcaption>
        </figure>
        
        <h2>2. 試作品開発の迅速化</h2>
        <p>従来の方法と比べ、3Dプリンティングを使用することで試作品の開発時間を大幅に短縮できます。これにより、製品開発サイクルが加速し、市場投入までの時間が短縮されます。</p>
        
        <figure>
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CEB6CA3F-F442-4966-BB1D-C7F6336AAF89-0Pd8cDCog7miTVCqoINqCZhiZLtmKK.jpeg" alt="3D試作モデル" />
          <figcaption>3Dプリントで作成された試作モデル</figcaption>
        </figure>
        
        <h2>3. 複雑な形状の実現</h2>
        <p>従来の製造方法では困難だった複雑な形状や構造を、3Dプリンティングで容易に実現できるようになりました。これにより、製品デザインの可能性が大きく広がっています。</p>
        
        <h2>4. 材料の革新</h2>
        <p>3Dプリンティング技術の発展に伴い、使用可能な材料の種類も増加しています。金属、プラスチック、セラミックスなど、多様な材料を使用することで、様々な用途に対応できるようになりました。</p>
        
        <p>3Dプリンティング技術は今後も進化を続け、製造業にさらなる革新をもたらすことが期待されます。私たち土林さんは、この技術を活用し、お客様のニーズに応える革新的なソリューションを提供し続けていきます。</p>
      `,
    },
    {
      id: 2,
      title: "3D技術を活用した文化財のデジタル保存",
      date: "2023年5月22日",
      excerpt: "3Dスキャンと3Dプリンティング技術を用いた文化財のデジタル保存と活用について紹介します。",
      coverImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB04AD86-4266-4C67-AB6F-F15BF495A455-dLIKh2tdBnzBHlTSYe17JwFooZnPcT.jpeg",
      images: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BB2848FC-4AD3-4BDE-9C95-F5536EAAEAA8-gv5lUGq9HtT1AZAEnXgaQlHxxQKD0R.jpeg",
          caption: "高精度3Dスキャンで取得された文化財のメッシュデータ",
        },
      ],
      content: `
        <p>文化財の保存と活用は、私たちの歴史と文化を次世代に伝えるために重要な課題です。3D技術の発展により、この分野に革新的なアプローチがもたらされています。本記事では、3Dスキャンと3Dプリンティング技術を用いた文化財のデジタル保存と活用について紹介します。</p>
        
        <h2>1. 高精度3Dスキャン</h2>
        <p>最新の3Dスキャン技術を使用することで、文化財を非接触かつ高精度でデジタル化することができます。これにより、文化財の現状を詳細に記録し、将来の修復や研究に活用することが可能になります。</p>
        
        <figure>
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BB2848FC-4AD3-4BDE-9C95-F5536EAAEAA8-gv5lUGq9HtT1AZAEnXgaQlHxxQKD0R.jpeg" alt="3Dスキャンデータ" />
          <figcaption>高精度3Dスキャンで取得された文化財のメッシュデータ</figcaption>
        </figure>
        
        <h2>2. デジタルアーカイブの作成</h2>
        <p>3Dスキャンデータを用いてデジタルアーカイブを作成することで、貴重な文化財をオンラインで公開し、世界中の人々がアクセスできるようになります。これにより、文化財の研究や教育の機会が大きく広がります。</p>
        
        <h2>3. 3Dプリンティングによるレプリカ作成</h2>
        <p>3Dスキャンデータを基に、3Dプリンティング技術を使用して高精度なレプリカを作成することができます。これにより、貴重な文化財を安全に展示したり、触れて体験することが可能になります。</p>
        
        <h2>4. 仮想現実（VR）と拡張現実（AR）への応用</h2>
        <p>3Dデータを活用することで、VRやAR技術を用いた没入型の文化財体験を提供することができます。これにより、文化財の理解と魅力の伝達が促進されます。</p>
        
        <p>3D技術を活用した文化財のデジタル保存と活用は、私たちの文化遺産を守り、次世代に伝えるための重要なツールとなっています。土林さんでは、これらの技術を駆使して、文化財保護に貢献するプロジェクトを積極的に推進しています。文化財のデジタル化についてさらに詳しく知りたい方は、ぜひお問い合わせください。</p>
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
  
  