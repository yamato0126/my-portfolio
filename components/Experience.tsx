const Experience = () => {
  const experiences = [
    {
      title: 'Osaka University',
      company: 'Master student',
      date: 'Apr 2023 - Present',
      description: 'Graduate School of Information Science and Technology',
    },
    {
      title: 'Osaka University',
      company: "Bachelor's Degree",
      date: 'Apr 2019 - Mar 2023',
      description: 'School of Engineering Science',
    },
    // Add more experiences as needed
  ]

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-[#DDA853]">{exp.company}</p>
            <p className="text-sm text-gray-600 mb-2">{exp.date}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

