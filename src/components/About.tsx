import { Code, Lightbulb, Rocket } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'Experienced in Angular, Node.js, and modern web technologies',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Creating smart solutions with AI, IoT, and deep learning',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Fast Learner',
      description: 'Rockstar performer with multiple certifications and awards',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a Computer Science Engineering student at Xavier Institute of Engineering,
            currently working as an Angular Full Stack Developer Intern at The Red Arc.
            I specialize in creating innovative solutions that combine modern web technologies
            with emerging fields like AI and IoT.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-blue-600 mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-slate-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
