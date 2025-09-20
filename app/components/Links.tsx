const Links = () => {
  const links = [
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.co.jp/citations?user=YuOvoX4AAAAJ',
    },
    {
      name: 'Zenn',
      url: 'https://zenn.dev/yamato0126',
    },
    // Add more links
  ]

  return (
    <section id="links" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Links</h2>
      <div className="space-y-4">
        {links.map((link, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-[#16404D] hover:text-[#DDA853]">
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Links
