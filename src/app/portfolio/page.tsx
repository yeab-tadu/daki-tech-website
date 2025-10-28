
'use client';

import React, { useState, useEffect } from 'react';
import { projects as initialProjects } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';
import { FolderKanban, Layers, Server, Database, Rocket, CodeXml, Hotel, Building, GraduationCap, Contact, BookOpenCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';


const projectIcons: { [key: string]: React.ReactNode } = {
    'proj-bms': <Building className="w-full h-full" />,
    'proj-menu': <BookOpenCheck className="w-full h-full" />,
    'proj-bizcard': <Contact className="w-full h-full" />,
    'proj-sms': <GraduationCap className="w-full h-full" />,
    'proj-hms': <Hotel className="w-full h-full" />,
    'default': <Rocket className="w-full h-full" />
};

const projectGradients: { [key: string]: string } = {
    'proj-bms': 'from-blue-500 to-cyan-400',
    'proj-menu': 'from-green-500 to-teal-400',
    'proj-bizcard': 'from-purple-500 to-indigo-400',
    'proj-sms': 'from-orange-500 to-amber-400',
    'proj-hms': 'from-red-500 to-rose-400',
    'default': 'from-gray-500 to-gray-400'
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
        <section className="relative w-full h-dvh min-h-[700px] flex items-center justify-center bg-primary/5 overflow-hidden">
            <div className="absolute inset-0 z-10 top-0">
                {icons.length > 0 && icons}
            </div>
             <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="container mx-auto px-4 md:px-6 z-20 relative text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        <span className="text-primary">Our </span>
                        <span className="text-accent">Work</span>
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl">
                        A showcase of our passion, expertise, and commitment to delivering exceptional digital products.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

const ProjectMarquee = () => {
    const MarqueeRow = ({ projects, duration, direction = 1 }: { projects: Project[], duration: number, direction?: 1 | -1 }) => {
        if (!projects || projects.length === 0) return null;
        
        const xAnimation = direction === 1 ? ["0%", "-100%"] : ["-100%", "0%"];
        
        return (
            <motion.div
                className="flex gap-8 py-4"
                animate={{ x: xAnimation }}
                transition={{
                    ease: 'linear',
                    duration: duration,
                    repeat: Infinity,
                }}
                whileHover={{ animationPlayState: 'paused' }}
            >
                {[...projects, ...projects].map((project, index) => {
                    const gradient = projectGradients[project.id] || projectGradients['default'];
                    const icon = projectIcons[project.id] || projectIcons['default'];

                    return (
                        <div key={`${project.id}-${index}`} className="flex-shrink-0 w-80 h-80">
                            <Card className={cn("relative w-full h-full overflow-hidden group/project rounded-2xl text-white", gradient)}>
                                <div className="absolute inset-0 transition-opacity duration-500 opacity-20 group-hover/project:opacity-40">
                                    <div className="w-full h-full scale-125 flex items-center justify-center p-8">
                                        {icon}
                                    </div>
                                </div>
                                <CardContent className="relative z-10 flex flex-col justify-end h-full p-6 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                                    <div>
                                        <h3 className="font-headline text-2xl font-bold transition-transform duration-300 group-hover/project:-translate-y-1">{project.title}</h3>
                                        <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover/project:opacity-100 transition-opacity duration-300">
                                            {project.technologies.map(tech => <Badge key={tech} variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">{tech}</Badge>)}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )
                })}
            </motion.div>
        );
    };

    return (
        <div className="w-full overflow-hidden relative space-y-8 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <MarqueeRow projects={initialProjects.slice(0,5)} duration={90} />
            <MarqueeRow projects={initialProjects.slice(0,5).reverse()} duration={100} direction={-1} />
        </div>
    );
};


export default function PortfolioPage() {

  return (
    <div>
      <PortfolioHero />
      <main className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <ProjectMarquee />
        </div>
      </main>
    </div>
  );
}
