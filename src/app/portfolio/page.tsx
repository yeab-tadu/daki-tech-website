
'use client';

import React, { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import { projects } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { Project } from '@/lib/types';
import Link from 'next/link';
import { ExternalLink, FolderKanban, Layers, Server, Database, Rocket, CodeXml } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';


const projectIcons: { [key: string]: React.ReactNode } = {
    'proj-bms': <FolderKanban className="h-12 w-12" />,
    'proj-menu': <CodeXml className="h-12 w-12" />,
    'proj-bizcard': <ExternalLink className="h-12 w-12" />,
    'proj-sms': <Layers className="h-12 w-12" />,
    'proj-hms': <Server className="h-12 w-12" />,
    'default': <Rocket className="h-12 w-12" />
};

const projectGradients: { [key: string]: string } = {
    'proj-bms': 'from-blue-500 to-cyan-400',
    'proj-menu': 'from-green-500 to-teal-400',
    'proj-bizcard': 'from-purple-500 to-indigo-400',
    'proj-sms': 'from-orange-500 to-amber-400',
    'proj-hms': 'from-red-500 to-rose-400',
    'default': 'from-gray-500 to-gray-400'
}

const ProjectModal = ({ project }: { project: Project }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>View Project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">{project.title}</DialogTitle>
          <DialogDescription>
             {project.description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <h4 className="font-semibold mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
            </div>
          </div>
          {project.link && (
            <Button asChild>
                <Link href={project.link} target="_blank">Visit Site <ExternalLink className="ml-2 h-4 w-4" /></Link>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

const PortfolioHero = () => {
    const [icons, setIcons] = useState<React.ReactNode[]>([]);
    const techIcons = [FolderKanban, Layers, Server, Database, Rocket, CodeXml];

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const generatedIcons = [...techIcons, ...techIcons, ...techIcons, ...techIcons].map((Icon, index) => {
                const sizeClass = ['w-12 h-12', 'w-16 h-16', 'w-20 h-20'][index % 3];
                const leftPosition = `${(index * (100 / techIcons.length) + (Math.random() - 0.5) * 5) % 95}%`;
                const delay = Math.random() * 10;
                const duration = 7 + Math.random() * 8;
                
                return (
                    <FloatingIcon 
                        key={`value-${index}`}
                        icon={<Icon className="w-full h-full" />}
                        className={sizeClass}
                        delay={delay}
                        duration={duration}
                        style={{ left: leftPosition, top: '-20%' }}
                    />
                )
            });
            setIcons(generatedIcons);
        }
    }, []);

    const FloatingIcon = ({ icon, className, delay, duration, style }: { icon: React.ReactNode, className: string, delay: number, duration: number, style: React.CSSProperties }) => {
        return (
             <motion.div
                className={`absolute rounded-full bg-background/60 backdrop-blur-sm shadow-lg text-primary p-2 md:p-3 ${className}`}
                style={style}
                initial={{ opacity: 0, y: -100 }}
                animate={{ 
                    opacity: [0, 0.7, 0.7, 0],
                    y: '110vh'
                }}
                transition={{
                    delay,
                    duration,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {icon}
            </motion.div>
        )
    }

    return (
        <section className="relative w-full pt-20 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-primary/5 overflow-hidden">
            <div className="absolute inset-0 z-10 top-0">
                {icons.length > 0 && icons}
            </div>
            <div className="container mx-auto px-4 md:px-6 z-20 relative">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">
                        Our Portfolio
                    </h1>
                    <p className="text-lg text-foreground/80 md:text-xl">
                        A showcase of our passion, expertise, and commitment to delivering exceptional digital products.
                    </p>
                </div>
            </div>
             <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        </section>
    )
}

export default function PortfolioPage() {

  return (
    <div>
      <PortfolioHero />
      <main className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const gradient = projectGradients[project.id] || projectGradients['default'];
              const icon = projectIcons[project.id] || projectIcons['default'];

              return (
                <Card key={project.id} className="overflow-hidden transition-all hover:shadow-xl group flex flex-col">
                  <CardContent className="p-0 flex flex-col flex-grow">
                    <div className={cn("flex-shrink-0 h-48 w-full flex items-center justify-center bg-gradient-to-br text-white", gradient)}>
                        <div className="transition-transform duration-500 group-hover:scale-110">
                            {icon}
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-headline text-xl font-bold">{project.title}</h3>
                      <p className="mt-2 text-sm text-foreground/80 flex-grow">{project.description}</p>
                       <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                      </div>
                      <div className="mt-6">
                        <ProjectModal project={project} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
