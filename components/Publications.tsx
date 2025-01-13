import { ScrollText } from 'lucide-react'

const Publications = () => {
  const peerReviewed = [
    {
      text: 'T. Matsumoto, T. Miura, T. Shibahara, M. Kii, K. Iwahana, O. Saisho and S. Okamura, "Differentially Private Sequential Data Synthesis with Structured State Space Models and Diffusion Models," NeurIPS Safe Generative AI Workshop 2024.',
      paperUrl: 'https://openreview.net/forum?id=ntsBXjkjm7',
    },
    {
      text: 'Y. Goto, T. Matsumoto, H. Rizk, N. Yanai and H. Yamaguchi, "Privacy-Preserving Taxi-Demand Prediction Using Federated Learning," 2023 IEEE International Conference on Smart Computing (SMARTCOMP), Nashville, TN, USA, 2023, pp. 297-302.',
      paperUrl: 'https://ieeexplore.ieee.org/abstract/document/10207615',
    },
    {
      text: 'T. Matsumoto, T. Miura and N. Yanai, "Membership Inference Attacks against Diffusion Models," 2023 IEEE Security and Privacy Workshops (SPW), San Francisco, CA, USA, 2023, pp. 77-83.',
      paperUrl: 'https://ieeexplore.ieee.org/abstract/document/10188618',
    },
  ]

  const nonPeerReviewed = [
    '松本 知優, 三浦 尭之, 芝原 俊樹, 紀伊 真昇, 岩花 一輝, 税所 修, 岡村 真吾, “構造化状態空間モデルと拡散モデルを用いた差分プライベートな系列データ合成,” コンピュータセキュリティシンポジウム2024 (CSS2024).',
    '松本 知優, 杉浦 一瑳, 手島 宏貴, 三浦 尭之, 矢内 直人, “処理時間を考慮に入れた匿名化コンテストの提案,” 情報処理学会 第86回全国大会.',
    '松本 知優, 三浦 尭之, 矢内 直人, “拡散モデルのメンバーシップ推論耐性の評価,” マルチメディア、分散、協調とモバイルシンポジウム 2023 (DICOMO 2023).',
  ]

  return (
    <section id="publications" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Publications</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Peer-reviewed</h3>
          <ul className="space-y-2">
            {peerReviewed.map((pub, index) => (
              <li key={index} className="flex items-start gap-2">
                <ScrollText className="h-5 w-5 flex-shrink-0 mt-1" />
                <span>
                  {pub.text}
                  {pub.paperUrl && (
                    <span className="ml-2">
                      <a href={pub.paperUrl} className="text-[#DDA853] hover:underline" target="_blank" rel="noopener noreferrer">[paper]</a>
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Non peer-reviewed</h3>
          <ul className="space-y-2">
            {nonPeerReviewed.map((pub, index) => (
              <li key={index} className="flex items-start gap-2">
                <ScrollText className="h-5 w-5 flex-shrink-0 mt-1" />
                <span>{pub}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Publications

