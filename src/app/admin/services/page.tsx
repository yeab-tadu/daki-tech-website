'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { services as initialServices } from '@/lib/data';
import type { Service } from '@/lib/types';
import { PlusCircle, Edit, Trash } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(2, 'Title is required'),
  description: z.string().min(10, 'Short description is required'),
  longDescription: z.string().min(20, 'Full description is required'),
  imageId: z.string().min(2, 'Image ID is required'),
});

type ServiceFormValues = z.infer<typeof formSchema>;

const ServiceForm = ({ service, onSave }: { service?: Service; onSave: (data: Service) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: service || {
      title: '',
      description: '',
      longDescription: '',
      imageId: 'service-default',
    },
  });

  const onSubmit = (data: ServiceFormValues) => {
    const newServiceData: Service = {
      ...data,
      id: service?.id || data.title.toLowerCase().replace(/\s+/g, '-'),
    };
    onSave(newServiceData);
    toast({ title: `Service ${service ? 'updated' : 'created'} successfully!` });
    setIsOpen(false);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {service ? (
          <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
        ) : (
          <Button><PlusCircle className="mr-2 h-4 w-4" /> Add New Service</Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="font-headline">{service ? 'Edit' : 'Add New'} Service</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="title" render={({ field }) => (
              <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
             <FormField control={form.control} name="description" render={({ field }) => (
              <FormItem><FormLabel>Short Description</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="longDescription" render={({ field }) => (
              <FormItem><FormLabel>Full Description</FormLabel><FormControl><Textarea className="min-h-[100px]" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="imageId" render={({ field }) => (
              <FormItem><FormLabel>Image ID</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <Button type="submit">Save Service</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>(initialServices);
  const { toast } = useToast();

  const handleSave = (data: Service) => {
    setServices(prev => {
      const existing = prev.find(s => s.id === data.id);
      if (existing) {
        return prev.map(s => s.id === data.id ? data : s);
      }
      return [...prev, data];
    });
  };

  const handleDelete = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
    toast({ title: 'Service deleted successfully!', variant: 'destructive' });
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-headline">Manage Services</CardTitle>
        <ServiceForm onSave={handleSave} />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.id}>
                <TableCell className="font-medium">{service.title}</TableCell>
                <TableCell className="max-w-sm truncate">{service.description}</TableCell>
                <TableCell className="text-right">
                    <ServiceForm service={service} onSave={handleSave} />
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(service.id)}>
                        <Trash className="h-4 w-4" />
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
