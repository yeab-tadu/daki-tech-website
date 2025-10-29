'use client';

import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { PlusCircle, Edit, Trash, Video, Calendar, BellRing } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth, useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, doc } from 'firebase/firestore';
import { setDocumentNonBlocking, addDocumentNonBlocking, deleteDocumentNonBlocking } from '@/firebase/non-blocking-updates';

// Schemas
const videoSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(3, 'Title must be at least 3 characters.'),
  description: z.string().min(10, 'Description must be at least 10 characters.'),
  videoId: z.string().min(5, 'YouTube Video ID is required.'),
});

const nextBatchSchema = z.object({
  status: z.string().min(3, 'Status is required.'),
});

const currentBatchSchema = z.object({
  startDate: z.string().min(8, 'Start date is required.'),
});

type VideoFormValues = z.infer<typeof videoSchema>;

// Video Form Component
const VideoForm = ({ video: existingVideo, onSave }: { video?: any; onSave: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const firestore = useFirestore();

  const form = useForm<VideoFormValues>({
    resolver: zodResolver(videoSchema),
    defaultValues: existingVideo || { title: '', description: '', videoId: '' },
  });
  
  useEffect(() => {
    form.reset(existingVideo || { title: '', description: '', videoId: '' });
  }, [existingVideo, form]);


  const onSubmit = (data: VideoFormValues) => {
    if (existingVideo?.id) {
      const docRef = doc(firestore, 'announcements/videos/collection', existingVideo.id);
      setDocumentNonBlocking(docRef, data, { merge: true });
      toast({ title: 'Video updated successfully!' });
    } else {
      const collectionRef = collection(firestore, 'announcements/videos/collection');
      addDocumentNonBlocking(collectionRef, data);
      toast({ title: 'Video added successfully!' });
    }
    onSave();
    setIsOpen(false);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {existingVideo ? (
          <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
        ) : (
          <Button><PlusCircle className="mr-2 h-4 w-4" /> Add New Video</Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{existingVideo ? 'Edit' : 'Add New'} Video</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="title" render={({ field }) => (
              <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="description" render={({ field }) => (
              <FormItem><FormLabel>Description</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="videoId" render={({ field }) => (
              <FormItem><FormLabel>YouTube Video ID</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <Button type="submit">Save Video</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default function AdminAnnouncementsPage() {
  const auth = useAuth();
  const firestore = useFirestore();
  const { toast } = useToast();

  // Firestore References
  const videosCollectionRef = useMemoFirebase(() => collection(firestore, 'announcements/videos/collection'), [firestore]);
  const nextBatchDocRef = useMemoFirebase(() => doc(firestore, 'announcements', 'nextBatch'), [firestore]);
  const currentBatchDocRef = useMemoFirebase(() => doc(firestore, 'announcements', 'currentBatch'), [firestore]);

  // Data Hooks
  const { data: videos, isLoading: videosLoading, error: videosError } = useCollection(videosCollectionRef);
  const { data: nextBatchData } = useDoc(nextBatchDocRef);
  const { data: currentBatchData } = useDoc(currentBatchDocRef);

  // Form Hooks
  const nextBatchForm = useForm({
    resolver: zodResolver(nextBatchSchema),
    values: { status: nextBatchData?.status || '' }
  });
  const currentBatchForm = useForm({
    resolver: zodResolver(currentBatchSchema),
    values: { startDate: currentBatchData?.startDate || '' }
  });

  const onNextBatchSubmit = (data: z.infer<typeof nextBatchSchema>) => {
    setDocumentNonBlocking(nextBatchDocRef, data, { merge: true });
    toast({ title: 'Next batch status updated!' });
  };

  const onCurrentBatchSubmit = (data: z.infer<typeof currentBatchSchema>) => {
    setDocumentNonBlocking(currentBatchDocRef, data, { merge: true });
    toast({ title: 'Current batch start date updated!' });
  };
  
  const handleDeleteVideo = (id: string) => {
    if (!id) return;
    const docRef = doc(firestore, 'announcements/videos/collection', id);
    deleteDocumentNonBlocking(docRef);
    toast({ title: 'Video deleted successfully!', variant: 'destructive' });
  };

  if (!auth.currentUser) {
    return <p>Please log in to view this page.</p>;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Next Batch */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><BellRing /> Next Batch Registration</CardTitle>
            <CardDescription>Update the status for the next batch enrollment.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...nextBatchForm}>
              <form onSubmit={nextBatchForm.handleSubmit(onNextBatchSubmit)} className="space-y-4">
                <FormField control={nextBatchForm.control} name="status" render={({ field }) => (
                  <FormItem><FormLabel>Status</FormLabel><FormControl><Input placeholder="e.g., Open, Opening Soon" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <Button type="submit">Save Status</Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Current Batch */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Calendar /> Current Batch Start Date</CardTitle>
            <CardDescription>Set the official start date for the current batch.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...currentBatchForm}>
              <form onSubmit={currentBatchForm.handleSubmit(onCurrentBatchSubmit)} className="space-y-4">
                <FormField control={currentBatchForm.control} name="startDate" render={({ field }) => (
                  <FormItem><FormLabel>Start Date</FormLabel><FormControl><Input placeholder="e.g., July 15, 2024" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <Button type="submit">Save Date</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      {/* Videos */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2"><Video /> Announcement Videos</CardTitle>
            <CardDescription>Manage the YouTube videos displayed on the announcement page.</CardDescription>
          </div>
          <VideoForm onSave={() => {}} />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Video ID</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {videosLoading && <TableRow><TableCell colSpan={3}>Loading...</TableCell></TableRow>}
              {videosError && <TableRow><TableCell colSpan={3} className="text-destructive">Error loading videos.</TableCell></TableRow>}
              {videos && videos.map((video) => (
                <TableRow key={video.id}>
                  <TableCell className="font-medium">{video.title}</TableCell>
                  <TableCell>{video.videoId}</TableCell>
                  <TableCell className="text-right">
                    <VideoForm video={video} onSave={() => {}} />
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteVideo(video.id)}>
                      <Trash className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
