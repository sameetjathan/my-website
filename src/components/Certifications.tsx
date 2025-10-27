import { Award, Star } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Rockstar of the Month',
      description:
        'Awarded for outstanding performance and fast task completion during internship',
      date: 'January 2025',
      highlight: true,
    },
    {
      title: 'Certificate of Appreciation',
      description:
        'For presenting "YOLOv8Lume: Smart Home Lighting Control with Human Detection and Recognition" at IC-CCDS 2025, MULTICON-W 2025, Thakur College of Engineering & Technology',
      date: '21st-22nd Feb 2025',
      highlight: true,
    },
    {
      title: 'Java Developer with DSA Training',
      description: 'Completed comprehensive training program',
      date: '20th Jan - 20th April 2024',
      highlight: false,
    },
    {
      title: 'Best Outstanding Project',
      description: 'ODD Semester of Academic Year 2023-2024',
      date: '2024',
      highlight: true,
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Certifications & Awards
          </h2>
          <p className="text-xl text-slate-600">
            Recognition for excellence and achievement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                cert.highlight
                  ? 'border-2 border-yellow-400 hover:scale-105'
                  : 'border border-slate-100'
              }`}
            >
              <div className="flex items-start gap-4">
                {cert.highlight ? (
                  <Star className="text-yellow-500 fill-yellow-500 flex-shrink-0" size={28} />
                ) : (
                  <Award className="text-blue-600 flex-shrink-0" size={28} />
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-slate-600 mb-3 leading-relaxed">
                    {cert.description}
                  </p>
                  <p className="text-sm text-blue-600 font-semibold">
                    {cert.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
