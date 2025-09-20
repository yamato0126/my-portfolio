const Qualifications = () => {
  const qualifications = [
    {
      name: '情報処理安全確保支援士',
      year: '2021/12',
    },
    {
      name: '応用情報技術者',
      year: '2021/6',
    },
    {
      name: '基本情報技術者',
      year: '2021/2',
    },
  ]

  return (
    <section id="qualifications" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Qualifications</h2>
      <div className="space-y-4">
        {qualifications.map((qual, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{qual.name}</h3>
            <p className="text-sm text-gray-600">{qual.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Qualifications
