'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/componentsui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, LifeBuoy, ShoppingCart, GraduationCap } from 'lucide-react';
import { services } from '@/lib/data';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  service: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const pageHeaderImage = PlaceHolderImages.find((p) => p.id === 'contact-hero');
  const mapImage = PlaceHolderImages.find((p) => p.id === 'contact-map');
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', service: '', message: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div>
      <PageHeader
        title="Let's Build Something Great"
        description="Have a project in mind or a question for our team? We'd love to hear from you."
        image={pageHeaderImage}
      />
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
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
                            <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
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
                            <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service of Interest (Optional)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map(s => <SelectItem key={s.id} value={s.title}>{s.title}</SelectItem>)}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl><Textarea placeholder="Tell us about your project or question..." className="min-h-[120px]" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit">Send Message</Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-headline text-2xl font-bold mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                        <p className="font-semibold">Our Office</p>
                        <p className="text-foreground/80">123 Tech Avenue, New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                        <p className="font-semibold">Email Us</p>
                        <Link href="mailto:contact@dakitechs.com" className="text-foreground/80 hover:text-primary">contact@dakitechs.com</Link>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                        <p className="font-semibold">Call Us</p>
                        <Link href="tel:+1234567890" className="text-foreground/80 hover:text-primary">+1 (234) 567-890</Link>
                    </div>
                  </div>
                </div>
              </div>

               <div>
                <h3 className="font-headline text-2xl font-bold mb-4">Quick Inquiries</h3>
                 <div className="space-y-3">
                    <Link href="mailto:sales@dakitechs.com" className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg hover:bg-primary/10">
                        <ShoppingCart className="h-6 w-6 text-accent" />
                        <span>Sales Inquiries</span>
                    </Link>
                     <Link href="mailto:support@dakitechs.com" className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg hover:bg-primary/10">
                        <LifeBuoy className="h-6 w-6 text-accent" />
                        <span>Technical Support</span>
                    </Link>
                     <Link href="mailto:academy@dakitechs.com" className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg hover:bg-primary/10">
                        <GraduationCap className="h-6 w-6 text-accent" />
                        <span>Academy Admissions</span>
                    </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-16">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-center mb-8">Find Us Here</h2>
             {mapImage && (
                <div className="aspect-[16/6] w-full rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src={mapImage.imageUrl}
                        alt="Map to DakiTechs office"
                        width={1200}
                        height={400}
                        className="w-full h-full object-cover"
                        data-ai-hint={mapImage.imageHint}
                    />
                </div>
             )}
          </div>
        </div>
      </main>
    </div>
  );
}
