import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageHeader from '@/components/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Testimonials from '@/components/Testimonials';
import { testimonials } from '@/lib/data';
import { CheckCircle, Calendar, Clock, DollarSign, Users } from 'lucide-react';

const courseModules = [
  'HTML & CSS',
  'JavaScript Fundamentals',
  'Bootstrap & Responsive Design',
  'Node.js & Express',
  'React.js & Next.js',
  'MySQL & Databases',
  'Git & Version Control',
  'jQuery & DOM Manipulation',
  'REST API Design',
  'Deployment & DevOps',
];

const upcomingBatches = [
  { id: 1, name: 'Summer 2024 Batch', startDate: 'July 15, 2024', status: 'Open' },
  { id: 2, name: 'Fall 2024 Batch', startDate: 'October 7, 2024', status: 'Opening Soon' },
];

export default function AcademyPage() {
  const pageHeaderImage = PlaceHolderImages.find((p) => p.id === 'academy-hero');
  const academyTestimonials = testimonials.filter(t => t.role.includes('Student') || t.id === 'test-2');

  return (
    <div>
      <PageHeader
        title="Daki Academy"
        description="Become a Full-Stack Developer in 6 Months. Learn the skills to build modern web applications from the ground up."
        image={pageHeaderImage}
      />
      <main>
        {/* Course Details Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Full-Stack Web Development Course</h2>
                <p className="text-foreground/80 text-lg">
                  Our flagship course is an intensive, project-based program designed to equip you with the in-demand skills needed to become a successful full-stack web developer. You'll learn by doing, building a portfolio of real-world projects that showcase your abilities to potential employers.
                </p>
                <p className="text-foreground/80 text-lg">
                  With expert instructors, a supportive community, and a curriculum that's constantly updated to reflect industry trends, Daki Academy is the perfect place to launch your tech career.
                </p>
                 <Button size="lg" asChild>
                    <Link href="/contact?subject=Academy+Application">Apply Now</Link>
                </Button>
              </div>
              <div className="grid gap-6">
                 <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <DollarSign className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline">Pricing</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">$5,000 USD</p>
                        <p className="text-sm text-foreground/80">Installment plans available.</p>
                    </CardContent>
                 </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <Calendar className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline">Duration & Schedule</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1">
                        <p><strong className="font-semibold">Duration:</strong> 6 Months</p>
                        <p><strong className="font-semibold">Schedule:</strong> 3 classes per week</p>
                         <p><strong className="font-semibold">Format:</strong> Live online classes</p>
                    </CardContent>
                 </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl mb-12">What You'll Learn</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courseModules.map((module) => (
                <div key={module} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  <span className="font-medium">{module}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Upcoming Batches Section */}
        <section className="py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl mb-12">Upcoming Batches</h2>
                <div className="max-w-2xl mx-auto">
                    {upcomingBatches.map(batch => (
                        <Card key={batch.id} className="mb-4">
                            <CardContent className="p-6 flex flex-col sm:flex-row justify-between items-center">
                                <div className="mb-4 sm:mb-0">
                                    <h3 className="font-headline text-xl font-bold">{batch.name}</h3>
                                    <p className="text-foreground/80 flex items-center gap-2 mt-1"><Calendar className="h-4 w-4" /> Starts: {batch.startDate}</p>
                                </div>
                                 <Button disabled={batch.status !== 'Open'} asChild>
                                    <Link href="/contact?subject=Academy+Application">
                                        {batch.status === 'Open' ? 'Enroll Now' : 'Notify Me'}
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Testimonials */}
        {academyTestimonials.length > 0 && (
          <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl">
                Success Stories
              </h2>
              <div className="mt-12">
                <Testimonials testimonials={academyTestimonials} />
              </div>
            </div>
          </section>
        )}

      </main>
    </div>
  );
}
