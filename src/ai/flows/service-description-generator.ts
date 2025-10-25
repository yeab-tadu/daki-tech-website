'use server';

/**
 * @fileOverview An AI agent for generating service descriptions.
 *
 * - generateServiceDescription - A function that generates a service description.
 * - ServiceDescriptionInput - The input type for the generateServiceDescription function.
 * - ServiceDescriptionOutput - The return type for the generateServiceDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ServiceDescriptionInputSchema = z.object({
  serviceName: z.string().describe('The name of the service.'),
});
export type ServiceDescriptionInput = z.infer<typeof ServiceDescriptionInputSchema>;

const ServiceDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated description of the service.'),
});
export type ServiceDescriptionOutput = z.infer<typeof ServiceDescriptionOutputSchema>;

export async function generateServiceDescription(
  input: ServiceDescriptionInput
): Promise<ServiceDescriptionOutput> {
  return generateServiceDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'serviceDescriptionPrompt',
  input: {schema: ServiceDescriptionInputSchema},
  output: {schema: ServiceDescriptionOutputSchema},
  prompt: `You are an expert marketing copywriter, skilled at writing compelling descriptions of services for technology companies.

  Write a short description of the following service:

  Service: {{{serviceName}}}
  `,
});

const generateServiceDescriptionFlow = ai.defineFlow(
  {
    name: 'generateServiceDescriptionFlow',
    inputSchema: ServiceDescriptionInputSchema,
    outputSchema: ServiceDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
