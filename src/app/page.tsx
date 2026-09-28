import Link from 'next/link';

const PROJECTS = [
  {
    title: 'Biblioteca Móvil',
    description: 'Esta app permite a los usuarios centralizar la información de sus libros en un solo lugar. El proyecto se enfoca en la usabilidad y el seguimiento visual, permitiendo clasificar lecturas entre pendientes y terminadas, además de ofrecer una sección de métricas para motivar el hábito lector.',
    tech: ['.NET MAUI', 'C#', '.NET 8.0', 'MVVM'],
    github: 'https://github.com/Deniz78y1966/ProyectoFinalAppMoviles.git',
  },
  {
    title: 'Panel de control del PIB mundial',
    description: 'Una aplicación sencilla e interactiva desarrollada con Streamlit, diseñada para visualizar y analizar datos del Producto Interior Bruto (PIB) mundial.',
    tech: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
    github: 'https://github.com/Deniz78y1966/gdp-dashboard.git'
  },
  {
    title: 'Flowdy Timer',
    description: 'Página web con un temporizador de enfoque para estudiantes con estética pixelada inspirada en Minecraft. Úsalo como cronómetro o como cuenta regresiva, y lleva el control de tus tareas mientras un planeta Tierra gira lentamente de fondo.',
    tech: ['Python', 'Next.js', 'Tailwind CSS', 'TypeScript', 'FastAPI'],
    github: 'https://github.com/Deniz78y1966/flowdytimer.git'
  },
  {
    title: 'SoftEstimulation',
    description: 'Plataforma SaaS integral para la gestión de centros de estimulación temprana. Cuenta con autenticación segura y control de acceso basado en roles para administradores (gestión de niños, pagos y personal), empleados (actividades y nómina) y padres (seguimiento del niño y pagos).',
    tech: ['Python', 'Next.js', 'Tailwind CSS', 'TypeScript', 'FastAPI'],
    // Sin propiedad github para indicar que está privado / en progreso
  },

];

const SKILLS = {
  Languages: ['TypeScript', 'JavaScript', 'C#', 'SQL', 'HTML/CSS', 'Tailwind CSS', 'Python', 'PHP'],
  Frameworks: ['Next.js', 'React', 'Node.js', 'ASP.NET Core'],
  Databases: ['MySQL', 'SQL Server', 'MongoDB'],
  DevOps: ['Git', 'Docker', 'Vercel'],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(-45deg,#064e3b,#18181b,#78350f,#0f766e,#18181b)] bg-[length:300%_300%] animate-[gradientBG_10s_ease_infinite] text-zinc-100 font-sans">
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Hero Section */}
        <section className="py-12">
          <div className="grid items-center gap-6 md:grid-cols-[1.7fr_0.7fr]">
            <div className="space-y-4">
              <span className="text-[#9DF5D0] text-sm font-semibold tracking-wide uppercase">
                Software Developer
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                Hey, soy <span className="text-amber-500">Génesis Denisse Matos Rosario</span>.
              </h1>
              <p className="text-zinc-300 text-lg md:text-xl max-w-none leading-relaxed">
                Egresada del Itla en la carrera Desarrollo de Software con enfoque al backend, acttualmente adquiriendo experiencia en la creación de aplicaciones web y móviles utilizando tecnologías modernas y mejores prácticas de desarrollo que he ido aprendiendo en el camino. Paso la mayor parte del tiempo aprendiendo, y la otra mitad poniendo en práctica mis conocimientos.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/Deniz78y1966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-zinc-950 font-semibold transition shadow-lg"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/génesis-denisse-matos-rosario-54141a376"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg border border-zinc-700/80 bg-zinc-900/40 backdrop-blur-sm hover:border-amber-500 text-zinc-300 font-medium transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-[270px] aspect-[4/5] overflow-hidden rounded-3xl border border-zinc-700/60 bg-[radial-gradient(circle_at_top,_rgba(157,245,208,0.22),_transparent_40%),linear-gradient(135deg,#111827,#1f2937,#0f172a)] shadow-2xl shadow-zinc-950/50">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(245,158,11,0.22),transparent,rgba(157,245,208,0.18))]" />
                <img
                  src="/CV_image.jpg?v=2"
                  alt="Génesis Denisse Matos Rosario"
                  className="relative h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-12 border-t border-zinc-700/40">
          <h2 className="text-2xl font-bold text-white mb-8">Proyectos Destacados</h2>
          <div className="grid grid-cols-1 gap-8">
            {PROJECTS.map((project, idx) => (
              <div
                key={idx}
                className="w-full p-6 md:p-8 rounded-xl border border-zinc-700/50 bg-zinc-950/50 backdrop-blur-md hover:border-amber-500/50 transition shadow-xl"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-zinc-300 mb-6 leading-relaxed max-w-4xl text-base md:text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-900/80 text-[#9DF5D0] border border-zinc-700/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm font-medium">
                  {project.github && project.github !== '#' ? (
                    <Link href={project.github} target="_blank" className="text-zinc-300 hover:text-[#9DF5D0] transition">
                      Repositorio GitHub &rarr;
                    </Link>
                  ) : (
                    <span className="text-amber-500/90 text-sm font-medium flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                      </span>
                      En progreso
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="py-12 border-t border-zinc-700/40">
          <h2 className="text-2xl font-bold text-white mb-8">Habilidades Técnicas</h2>
          <div className="w-full p-6 md:p-8 rounded-xl border border-zinc-700/50 bg-zinc-950/50 backdrop-blur-md shadow-xl space-y-6">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category} className="space-y-2">
                <h3 className="text-amber-500 font-semibold text-sm tracking-wide uppercase">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded bg-zinc-900/80 text-[#9DF5D0] text-xs font-mono border border-zinc-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 border-t border-zinc-700/40 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Conectémos</h2>
          <p className="text-zinc-300 max-w-md mx-auto">
            Dispuesta a nuevas oportunidades y colaboraciones en este amplio mundo del desarrollo de software.
          </p>
          <div>
            <a
              href="mailto:genesis698y1966@gmail.com"
              className="inline-block px-6 py-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-zinc-950 font-semibold transition shadow-lg"
            >
              Enviar Email
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}