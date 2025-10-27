export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        'AngularJS',
        'Node.js',
        'C++',
        'C',
        'Java',
        'JavaScript',
        'Python',
        'SQL',
      ],
    },
    {
      category: 'Developer Tools',
      skills: ['VS Code', 'PyCharm', 'Canva'],
    },
    {
      category: 'Specializations',
      skills: [
        'Full Stack Development',
        'Deep Learning',
        'IoT',
        'Computer Vision',
        'Face Recognition',
        'Data Processing',
        'API Development',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-slate-600">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-blue-600">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-slate-50 text-slate-700 font-medium rounded-lg hover:from-blue-100 hover:to-slate-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
