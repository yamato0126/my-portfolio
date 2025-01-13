const Publications = () => {
  const peerReviewed = [
    'T. Matsumoto, T. Miura, T. Shibahara, M. Kii, K. Iwahana, O. Saisho and S. Okamura, “Differentially Private Sequential Data Synthesis with Structured State Space Models and Diffusion Models,” NeurIPS Safe Generative AI Workshop 2024.',
    'Y. Goto, T. Matsumoto, H. Rizk, N. Yanai and H. Yamaguchi, “Privacy-Preserving Taxi-Demand Prediction Using Federated Learning,” 2023 IEEE International Conference on Smart Computing (SMARTCOMP), Nashville, TN, USA, 2023, pp. 297-302.',
    'T. Matsumoto, T. Miura and N. Yanai, “Membership Inference Attacks against Diffusion Models,” 2023 IEEE Security and Privacy Workshops (SPW), San Francisco, CA, USA, 2023, pp. 77-83.',
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
          <ul className="list-disc pl-6 space-y-2">
            {peerReviewed.map((pub, index) => (
              <li key={index}>{pub}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Non peer-reviewed</h3>
          <ul className="list-disc pl-6 space-y-2">
            {nonPeerReviewed.map((pub, index) => (
              <li key={index}>{pub}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Publications

