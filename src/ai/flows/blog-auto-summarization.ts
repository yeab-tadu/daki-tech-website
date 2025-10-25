'use server';

/**
 * @fileOverview A blog post summarization AI agent.
 *
 * - blogAutoSummarization - A function that handles the blog post summarization process.
 * - BlogAutoSummarizationInput - The input type for the blogAutoSummarization function.
 * - BlogAutoSummarizationOutput - The return type for the blogAutoSummarization function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BlogAutoSummarizationInputSchema = z.object({
  blogPostContent: z
    .string()
    .describe('The content of the blog post to be summarized.'),
});
export type BlogAutoSummarizationInput = z.infer<
  typeof BlogAutoSummarizationInputSchema
>;

const BlogAutoSummarizationOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the blog post content.'),
});
export type BlogAutoSummarizationOutput = z.infer<
  typeof BlogAutoSummarizationOutputSchema
>;

export async function blogAutoSummarization(
  input: BlogAutoSummarizationInput
): Promise<BlogAutoSummarizationOutput> {
  return blogAutoSummarizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'blogAutoSummarizationPrompt',
  input: {schema: BlogAutoSummarizationInputSchema},
  output: {schema: BlogAutoSummarizationOutputSchema},
  prompt: `You are an expert content summarizer specializing in creating concise and engaging summaries for blog posts.

  Please summarize the following blog post content:

  {{{blogPostContent}}}
  `,
});

const blogAutoSummarizationFlow = ai.defineFlow(
  {
    name: 'blogAutoSummarizationFlow',
    inputSchema: BlogAutoSummarizationInputSchema,
    outputSchema: BlogAutoSummarizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
