import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'The Red Arc',
      role: 'Angular Full Stack Developer Intern',
      period: 'Jan 2025 - Aug 2025',
      current: true,
      highlights: [
        'Working on live projects such as TNL and ECRF, gaining hands-on experience in both frontend and backend development',
        'Contributed to the frontend of the TNL project, enhancing the user interface and improving functionality',
        'Developed and managed backend logic and database operations for the ECRF project, ensuring efficient data handling and system performance',
      ],
    },
    {
      company: 'CodeSprint Technologies',
      role: 'Python Developer Intern',
      period: 'Jul 2024 - Aug 2024',
      current: false,
      highlights: [
        'Developed Python scripts to automate processes, enhancing operational efficiency through weekly projects assigned by a mentor',
        'Collaborated on data processing projects, delivering insights and meeting weekly project deadlines',
      ],
    },
    {
      company: 'IBM SkillsBuild',
      role: 'Front-end Web Development Internship',
      period: 'Jul 2024 - Aug 2024',
      current: false,
      highlights: [
        'Completed a 6-week program on front-end web development, gaining skills in HTML, CSS, and JavaScript through practical applications',
        'Collaborated with CSRBOX on a group project, focusing on enhancing user experience and interface design for web applications',
      ],
    },
    {
      company: 'Cornflakes Digital',
      role: 'Digital Marketing Executive',
      period: 'Nov 2023 - Dec 2023',
      current: false,
      highlights: [
        'Assisted in scheduling and posting content on social media, enhancing audience engagement through timely updates',
        'Supported the creation of graphics and written content for campaigns, while tracking performance metrics to improve future strategies',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-slate-600">
            Building real-world solutions and gaining hands-on experience
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-white to-slate-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="text-blue-600" size={24} />
                    <h3 className="text-2xl font-bold text-slate-900">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-xl text-blue-600 font-semibold mb-2">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-slate-600 mt-2 md:mt-0">
                  <Calendar size={18} />
                  <span className="font-medium">{exp.period}</span>
                  {exp.current && (
                    <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                      Current
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-slate-600 flex items-start gap-3 leading-relaxed"
                  >
                    <span className="text-blue-600 mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
