'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import PageHeader from '@/components/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { jobs } from '@/lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  cv: z.any().refine(file => file?.length == 1, 'CV is required.'),
});

const ApplicationForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '' },
  });
  
  const fileRef = form.register("cv");

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Application Submitted!',
      description: "Thank you for your interest. We'll be in touch soon.",
    });
    form.reset();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Apply Now</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload CV</FormLabel>
                  <FormControl>
                    <Input type="file" {...fileRef} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit Application</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default function CareersPage() {
  const pageHeaderImage = PlaceHolderImages.find((p) => p.id === 'careers-hero');

  return (
    <div>
      <PageHeader
        title="Join Our Innovative Team"
        description="Become part of a dynamic company that values creativity, collaboration, and continuous growth. Let's build the future together."
        image={pageHeaderImage}
      />
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                 <h2 className="font-headline text-3xl font-bold tracking-tighter">Our Culture</h2>
                 <p className="text-foreground/80">
                    At Daki Techs, we foster a collaborative and inclusive environment where every team member's voice is heard. We believe in work-life balance, continuous learning, and empowering our employees to do their best work.
                 </p>
              </div>
              <div>
                <h2 className="font-headline text-3xl font-bold tracking-tighter mb-6">Open Positions</h2>
                <Accordion type="single" collapsible className="w-full">
                  {jobs.map(job => (
                    <AccordionItem key={job.id} value={job.id}>
                      <AccordionTrigger className="font-headline text-xl">
                        <div className="flex flex-col text-left">
                            <span>{job.title}</span>
                            <span className="text-sm font-normal text-foreground/60 flex items-center gap-2"><MapPin className="h-4 w-4" /> {job.location}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-4">
                        <p className="mb-4">{job.description}</p>
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                         <Button className="mt-6">Apply for this role</Button>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                {jobs.length === 0 && (
                  <p className="text-foreground/80 text-center py-8">There are no open positions at the moment. Please check back later!</p>
                )}
              </div>
            </div>
            <div className="lg:col-span-1">
              <ApplicationForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
