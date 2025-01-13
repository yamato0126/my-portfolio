import { Trophy } from 'lucide-react'

const Awards = () => {
  const awards = [
    'PWSCUP2024 ベストデータサイエンティスト賞 (Team HAL), 2024年10月.',
    'MWSCUP2024 マルウェア分類部門 1位 (Team F.SE), 2024年10月.',
    'PWSCUP2023 総合2位 (Team F.SE), 2023年11月.',
    'DICOMO2023 優秀論文賞 / 優秀プレゼンテーション賞, 2023年7月.',
  ]

  return (
    <section id="awards" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Awards</h2>
      <div className="space-y-8">
        <ul className="space-y-2">
          {awards.map((award, index) => (
            <li key={index} className="flex items-start gap-2">
              <Trophy className="h-5 w-5 flex-shrink-0 mt-1" />
              <span>{award}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Awards

