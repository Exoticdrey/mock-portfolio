import projects from '@/data/projects.json'; 
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-purple-700">My Projects</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <div key={project.id} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                target="_blank"
                className="text-purple-600 hover:underline"
              >
                Visit Site →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
