
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-white border border-neutral-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-video w-full overflow-hidden bg-neutral-100">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-600 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-3">{project.title}</h3>
        
        <div className="space-y-3 mb-6">
          <div>
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-tight mb-1">Challenge</p>
            <p className="text-sm text-neutral-600 leading-relaxed">{project.description.problem}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-tight mb-1">Impact</p>
            <p className="text-sm text-neutral-600 leading-relaxed">{project.description.solution}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
          <a 
            href={project.liveUrl} 
            className="flex items-center gap-2 text-sm font-bold text-neutral-900 hover:text-indigo-600 transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a 
            href={project.githubUrl} 
            className="flex items-center gap-2 text-sm font-bold text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};
