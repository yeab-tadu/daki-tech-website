import PageHeader from '@/components/PageHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/lib/data';
import type { FAQ } from '@/lib/types';

const faqCategories = ['General', 'Services', 'Academy', 'Payment', 'Technical Support'];

export default function FAQPage() {
    const categorizedFaqs: { [key: string]: FAQ[] } = faqs.reduce((acc, faq) => {
        (acc[faq.category] = acc[faq.category] || []).push(faq);
        return acc;
    }, {} as { [key: string]: FAQ[] });

  return (
    <div>
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services, academy, and company."
      />
      <main className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                {faqCategories.map(category => (
                     categorizedFaqs[category] && (
                        <div key={category}>
                            <h2 className="font-headline text-3xl font-bold mb-6">{category}</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {categorizedFaqs[category].map(faq => (
                                    <AccordionItem key={faq.id} value={faq.id}>
                                        <AccordionTrigger className="font-headline text-lg text-left">{faq.question}</AccordionTrigger>
                                        <AccordionContent className="text-foreground/80">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    )
                ))}
            </div>
        </div>
      </main>
    </div>
  );
}
