'use client';

import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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
import { ExternalLink } from 'lucide-react';

const ProjectModal = ({ project }: { project: Project }) => {
  const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
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
          {projectImage && (
             <Image
                src={projectImage.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full aspect-[3/2]"
                data-ai-hint={projectImage.imageHint}
              />
          )}
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

export default function PortfolioPage() {
  const pageHeaderImage = PlaceHolderImages.find((p) => p.id === 'portfolio-hero');

  return (
    <div>
      <PageHeader
        title="Our Portfolio"
        description="A showcase of our passion, expertise, and commitment to delivering exceptional digital products."
        image={pageHeaderImage}
      />
      <main className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
              return (
                <Card key={project.id} className="overflow-hidden transition-all hover:shadow-xl">
                  <CardContent className="p-0">
                    {projectImage && (
                      <Image
                        src={projectImage.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover aspect-[3/2] w-full"
                        data-ai-hint={projectImage.imageHint}
                      />
                    )}
                    <div className="p-6">
                      <h3 className="font-headline text-xl font-bold">{project.title}</h3>
                      <p className="mt-2 text-sm text-foreground/80 h-10 overflow-hidden">{project.description}</p>
                       <div className="flex flex-wrap gap-2 mt-4 h-5 overflow-hidden">
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
