import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'YOLOv8Lume',
      subtitle: 'Smart Home Lighting Control with Human Detection',
      year: '2024',
      description: [
        'Leverages deep learning (YOLOv8) and IoT (ESP32) to optimize energy use through real-time human detection and recognition',
        'Features app-controlled lighting adjustments and scheduling, enhancing user experience and energy efficiency in smart homes',
      ],
      tags: ['YOLOv8', 'IoT', 'ESP32', 'Deep Learning', 'Python'],
    },
    {
      title: 'SnapIn TimeLog',
      subtitle: 'Face Recognition Attendance System',
      year: '2024',
      description: [
        'A face recognition system that accurately tracks attendance by distinguishing real faces from 2D images, with options for data download or email',
        'Supports customizable timetables, attendance marking by time slots and zones, and long-distance attendance for flexibility',
      ],
      tags: ['Face Recognition', 'Python', 'Computer Vision', 'OpenCV'],
    },
    {
      title: 'Cipher Shield',
      subtitle: 'File Encryption - Decryption',
      year: '2023',
      description: [
        'Encrypts any file type with unique encryption keys, ensuring only authorized access to data',
        'Provides robust protection against unauthorized access, offering secure file handling for personal and professional use',
      ],
      tags: ['Python', 'Cryptography', 'Security'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600">
            Innovative solutions combining AI, IoT, and security
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white">
                <span className="text-sm font-semibold opacity-80">
                  {project.year}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-1">{project.title}</h3>
                <p className="text-sm opacity-90">{project.subtitle}</p>
              </div>

              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-slate-600 text-sm leading-relaxed">
                      • {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
