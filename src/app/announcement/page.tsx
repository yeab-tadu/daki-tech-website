'use client';

import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Video, BellRing } from 'lucide-react';
import Link from 'next/link';
import { useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, doc } from 'firebase/firestore';

const YouTubeEmbed = ({ videoId, title }: { videoId: string; title: string }) => {
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
  );
};

export default function AnnouncementPage() {
  const firestore = useFirestore();

  const videosCollectionRef = useMemoFirebase(() => collection(firestore, 'announcements/videos/collection'), [firestore]);
  const nextBatchDocRef = useMemoFirebase(() => doc(firestore, 'announcements/nextBatch'), [firestore]);
  const currentBatchDocRef = useMemoFirebase(() => doc(firestore, 'announcements/currentBatch'), [firestore]);

  const { data: announcements, isLoading: videosLoading } = useCollection(videosCollectionRef);
  const { data: nextBatchData, isLoading: nextBatchLoading } = useDoc(nextBatchDocRef);
  const { data: currentBatchData, isLoading: currentBatchLoading } = useDoc(currentBatchDocRef);


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
                  {videosLoading && <p>Loading videos...</p>}
                  {announcements?.map((announcement) => (
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
                   {announcements?.length === 0 && !videosLoading && <p>No announcements yet. Check back soon!</p>}
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
                    Registration for our next batch is: <span className="font-bold">{nextBatchLoading ? 'Loading...' : nextBatchData?.status || 'TBA'}</span>
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
                  <p className="text-foreground/80">The current batch classes began on:</p>
                  <p className="font-bold text-lg text-primary mt-2">
                    {currentBatchLoading ? 'Loading...' : currentBatchData?.startDate || 'TBA'}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
