'use client';

import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Video, BellRing } from 'lucide-react';
import Link from 'next/link';

const announcements = [
    {
        id: 1,
        title: 'Orientation for Summer 2024 Batch',
        description: 'Join us for a virtual orientation to learn more about the upcoming batch.',
        videoId: 'dQw4w9WgXcQ'
    },
    {
        id: 2,
        title: 'Introduction to Full-Stack Development',
        description: 'A brief overview of what you will learn in our program.',
        videoId: '3JZ_D3ELwOQ'
    }
]

const YouTubeEmbed = ({ videoId, title }: { videoId: string, title: string }) => {
    return (
        <div className="aspect-video">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
            ></iframe>
        </div>
    )
}

export default function AnnouncementPage() {
  return (
    <div>
      <PageHeader
        title="Announcements"
        description="Stay up-to-date with the latest news, batch schedules, and important information from DakiTechs Academy."
      />
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content: Videos */}
            <div className="lg:col-span-2 space-y-12">
                <div>
                    <h2 className="font-headline text-3xl font-bold mb-6 flex items-center gap-3">
                        <Video className="h-8 w-8 text-primary" />
                        Latest Updates
                    </h2>
                    <div className="space-y-8">
                        {announcements.map(announcement => (
                             <Card key={announcement.id}>
                                 <CardHeader>
                                     <CardTitle className="font-headline text-xl">{announcement.title}</CardTitle>
                                 </CardHeader>
                                <CardContent>
                                    <p className="text-foreground/80 mb-4">{announcement.description}</p>
                                    <YouTubeEmbed videoId={announcement.videoId} title={announcement.title} />
                                </CardContent>
                             </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
               <Card className="bg-primary/5">
                 <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center gap-3">
                        <BellRing className="h-6 w-6 text-accent" />
                        Next Batch Registration
                    </CardTitle>
                 </CardHeader>
                 <CardContent>
                    <p className="text-foreground/80 mb-4">
                        Registration for our Fall 2024 batch is now open! Secure your spot to start your journey into tech.
                    </p>
                    <Button asChild>
                        <Link href="/contact?subject=Academy+Registration">
                            Register Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                 </CardContent>
               </Card>
               <Card>
                 <CardHeader>
                    <CardTitle className="font-headline text-xl flex items-center gap-3">
                        <Calendar className="h-6 w-6 text-primary" />
                        Current Batch Status
                    </CardTitle>
                 </CardHeader>
                 <CardContent>
                    <p className="text-foreground/80">
                        The Summer 2024 batch classes began on:
                    </p>
                    <p className="font-bold text-lg text-primary mt-2">July 15, 2024</p>
                 </CardContent>
               </Card>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
