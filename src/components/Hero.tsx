import { Mail, Phone, Linkedin, Github, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Jathan Sameet Suresh
          </h1>
          <p className="text-2xl md:text-3xl text-blue-300 mb-8">
            Full Stack Developer & Software Engineer
          </p>
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Computer Science Engineering student passionate about building innovative solutions
            with deep learning, IoT, and modern web technologies
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:sameetjatan@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a
              href="tel:+919321787707"
              className="flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Phone size={20} />
              <span>Call</span>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/sameet-jathan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/sameetjathan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Github size={28} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white opacity-50" />
        </div>
      </div>
    </section>
  );
}
