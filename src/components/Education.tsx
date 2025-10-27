import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: 'Xavier Institute of Engineering, Mahim',
      degree: 'BE - Computer Science and Engineering',
      location: 'Mumbai, Maharashtra',
      period: '2022 - 2026',
      current: true,
    },
    {
      institution: 'PRN Amratha Bharathi PU College, Hebri',
      degree: 'HSC - Karnataka State Board',
      location: 'Udupi, Karnataka',
      period: '2022',
      current: false,
    },
    {
      institution: 'Holy Family High School, Andheri',
      degree: 'SSC - Maharashtra State Board',
      location: 'Mumbai, Maharashtra',
      period: '2020',
      current: false,
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Education
          </h2>
          <p className="text-xl text-slate-600">
            Academic background and qualifications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100"
            >
              <div className="flex items-start gap-3 mb-4">
                <GraduationCap className="text-blue-600 flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {edu.institution}
                  </h3>
                </div>
              </div>

              <p className="text-blue-700 font-semibold mb-4">{edu.degree}</p>

              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-slate-400" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-slate-400" />
                  <span>{edu.period}</span>
                  {edu.current && (
                    <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                      Current
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
